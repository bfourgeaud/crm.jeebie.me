<template>
  <div class="container">
    <div v-if="client">
      <BaseCard class="flex flex-col md:flex-row text-blue-dark p-2 lg:p-4 md:border-b-2 border-blue-100 mt-4 lg:mt-12">
        <div class="flex items-center justify-items-start">
          <BaseIcon :icon="client.isCompany ? 'company' :'person'" :size="64" class="bg-blue-100 text-blue-light flex-shrink-0" rounded />
          <div class="text-opacity-dark text-base p-2 lg:p-4 flex-shrink">
            <div class="text-black">
              {{ client.contact.firstname }} {{ client.contact.lastname }}
            </div>
            <div v-if="client.isCompany" class="text-black">
              {{ client.company.name }}
            </div>
            <div>{{ formatAddr(client).street }}</div>
            <div>{{ formatAddr(client).line2 }}</div>
            <a :href="`mailto:${client.contact.email}`" class="underline">{{ client.contact.email }}</a>
          </div>
          <BaseCardActions class="mx-4">
            <BaseIcon icon="edit" :size="24" class="cursor-pointer text-blue-light hover:text-blue-dark" @click.native="editClient" />
            <BaseIcon icon="delete" :size="24" class="cursor-pointer text-red-light hover:text-red-dark ml-4" @click.native="deleteClient" />
          </BaseCardActions>
        </div>
        <BaseSpacer />
        <div class="flex flex-col mt-8 md:mt-0 justify-center">
          <BaseBtn class="border text-white bg-warning hover:bg-transparent hover:text-warning mb-2" rounded :to="`/clients/${client.id}/quote/new`" large>
            <BaseIcon icon="plus" :size="14" class="mr-2" />
            Nouveau Devis
          </BaseBtn>
          <BaseBtn class="border text-white bg-success hover:bg-transparent hover:text-success" rounded :to="{ name: 'invoices-new', params: { user: client }}" large>
            <BaseIcon icon="plus" :size="14" class="mr-2" />
            Nouvelle Facture
          </BaseBtn>
        </div>
      </BaseCard>

      <AppFilters v-model="selectedFilters" :items="filters" class="my-8 mx-2 md:mx-8 lg:mx-0" />

      <BaseCard v-for="item in filteredItems" :key="item.id" to="#" :elevation="2" class="py-2 mx-2 flex items-center hover:bg-blue-100 hover:text-blue-light">
        <BaseIcon :icon="item.type" :size="32" class="text-white mx-4" :class="getItemIconColor(item)" rounded />
        <div>
          <p>{{ item.title }}</p>
          <p class="text-opacity-dark">
            {{ item.date }}
          </p>
        </div>
        <BaseSpacer />
        <BaseCardActions>
          <p class="mx-4 uppercase" :class="statusClass(item.status)">
            {{ item.status }}
          </p>
          <p class="hidden md:block mx-4 text-opacity-400">
            {{ item.amount }} €
          </p>
          <BaseSpacer />
          <BaseIcon icon="edit" :size="24" class="text-blue-light hover:text-blue-dark mr-2" @click.native.prevent="editItem(item)" />
          <BaseIcon icon="delete" :size="24" class="text-red-light hover:text-red-dark" @click.native.prevent="deleteItem(item)" />
        </BaseCardActions>
      </BaseCard>

      <BaseDialogConfirmation ref="confirmDialog" />
    </div>
    <div v-else>
      {{ error }}
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ClientPage',
  data () {
    return {
      client: null,
      error: null,
      filters: [
        'Tous',
        'Devis',
        'Factures'
      ],
      selectedFilters: 'Tous',
      devis: [],
      factures: []
    }
  },
  computed: {
    filteredItems () {
      switch (this.selectedFilters) {
        case 'Tous' : return [...this.devis, ...this.factures]
        case 'Devis' : return this.devis
        case 'Factures' : return this.factures
        default: return []
      }
    }
  },
  created () {
    const clientFound = (result) => {
      this.client = result

      this.$dbs.invoices.query(
        'client.id',
        '==',
        result.id,
        (result) => {
          this.factures = result.map(function (el) {
            const o = Object.assign({}, el)
            o.type = 'invoice'
            o.status = 'brouillon'
            return o
          })
        },
        (error) => { this.error = error }
      )
    }

    this.$dbs.clients.find(
      this.$route.params.id,
      clientFound,
      (error) => { this.error = error }
    )
  },
  methods: {
    ...mapActions('clients', ['removeClient']),
    editItem (item) {
      alert('Edit Item !')
    },
    deleteItem (item) {
      alert('Delete Item !')
    },
    editClient () {
      this.$router.push({ name: 'clients-edit', params: { client: this.client } })
    },
    async deleteClient () {
      const ok = await this.$refs.confirmDialog.show({
        title: this.client.isCompany ? ` Delete ${this.client.company.name} ?` : `Delete ${this.client.contact.firstname} ${this.client.contact.lastname} ?`,
        message: 'Are you sure you want to delete this client ? It cannot be undone.',
        okText: 'Confirm'
      })

      if (ok) {
        this.$dbs.clients.delete(this.client.id, () => {
          this.removeClient(this.client.id)
          this.$router.push({ name: 'clients' })
        })
      }
    },
    statusClass (status) {
      return {
        'text-warning': status === 'envoyée',
        'text-success': status === 'payée',
        'text-opacity-400': status === 'brouillon'
      }
    },
    formatAddr (client) {
      const addrField = client.isCompany ? client.company.addr : client.contact.addr
      const exact = addrField.exact ? addrField.exact.properties : null
      return {
        street: exact ? `${exact.housenumber || ''} ${exact.street || exact.name || ''}` : addrField.text,
        postcode: exact ? exact.postcode || '' : '',
        city: exact ? exact.city || exact.state || '' : '',
        country: exact ? exact.country || '' : '',
        line2: exact ? `${exact.postcode || ''} ${exact.city || exact.state || ''}, ${exact.country || ''}` : ''
      }
    },
    getItemIconColor (item) {
      switch (item.type) {
        case 'invoice' :
          return 'bg-success'
        case 'quote' :
          return 'bg-warning'
      }
    }
  }
}
</script>
