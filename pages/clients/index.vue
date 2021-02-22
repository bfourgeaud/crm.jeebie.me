<template>
  <div class="container">
    <div class="flex flex-col-reverse md:flex-row items-center justify-center mt-8 mb-16 w-3/4 mx-auto md:w-auto">
      <div class="clients-search w-full md:w-auto mt-12 md:mt-0">
        <input v-model="search" class="search mr-0 md:mr-12" placeholder="Rechercher un client ...">
      </div>
      <BaseBtn to="/clients/edit" class="bg-transparent text-blue-light border hover:bg-blue-light hover:text-white w-full md:w-auto" rounded large>
        <BaseIcon icon="person-add" :size="24" class="mr-2" />
        Ajouter un client
      </BaseBtn>
    </div>

    <BaseCard v-for="item in filteredClients" :key="item.id" :elevation="1" :to="`/clients/${item.id}`" class="flex mx-1 group hover:bg-blue-100 hover:text-blue-light">
      <BaseCardTitle class="flex items-center">
        <BaseIcon :icon="item.isCompany ? 'company' :'person'" :size="32" class="mr-4 bg-blue-100 text-white group-hover:bg-blue-light" rounded />
        <p class="text-base font-bold">
          {{ item.isCompany ? item.company.name : fullName(item.contact.firstname, item.contact.lastname) }}
        </p>
        <BaseIcon icon="chevron-right" :size="32" class="mx-2" />
      </BaseCardTitle>
      <BaseSpacer />
      <BaseCardActions>
        <BaseIcon icon="edit" :size="24" class="text-blue-light hover:text-blue-dark" @click.native.prevent="editItem(item)" />
        <BaseIcon icon="delete" :size="24" class="text-red-light hover:text-red-dark ml-4" @click.native.prevent="deleteItem(item)" />
      </BaseCardActions>
    </BaseCard>

    <BaseDialogConfirmation ref="confirmDialog" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ClientsIndex',
  data () {
    return {
      search: ''
    }
  },
  computed: {
    ...mapState('clients', ['clients']),
    filteredClients () {
      const search = this.search.toLowerCase()
      const searchFunction = client =>
        client.contact.firstname.toLowerCase().includes(search) ||
        client.contact.lastname.toLowerCase().includes(search) ||
        client.company.name.toLowerCase().includes(search)

      return search ? this.clients.filter(searchFunction) : this.clients
    }
  },
  created () { this.fetchClients() },
  methods: {
    ...mapActions('clients', ['fetchClients', 'removeClient']),
    editItem (item) {
      this.$router.push({ name: 'clients-edit', params: { client: item } })
    },
    async deleteItem (item) {
      const ok = await this.$refs.confirmDialog.show({
        title: item.isCompany ? ` Delete ${item.company.name} ?` : `Delete ${this.fullName(item.contact.firstname, item.contact.lastname)} ?`,
        message: 'Are you sure you want to delete this client ? It cannot be undone.',
        okText: 'Confirm'
      })

      if (ok) {
        this.$dbs.clients.delete(item.id, () => {
          this.removeClient(item.id) // Handle temp store data
        })
      }
    },
    fullName (firstname, lastname) {
      return `${firstname.substring(0, 1).toUpperCase()}. ${lastname.charAt(0).toUpperCase() + lastname.slice(1)}`
    }
  }
}
</script>

<style scoped>
.clients-search {
  @apply relative;
  @apply flex;
  @apply flex-1;
  @apply h-12;
}

.clients-search .search{
  @apply flex-1;
  @apply border;
  @apply border-grey-200;
  @apply rounded-md;
  @apply py-4;
  @apply px-6;
  @apply font-normal;
}

.clients-search .search:focus {
  @apply outline-none;
}
</style>
