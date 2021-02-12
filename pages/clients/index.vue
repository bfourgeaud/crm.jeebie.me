<template>
  <div class="container mx-auto">
    <div class="actions my-8 flex align-center">
      <div class="flex flex-1">
        <AppInput v-model="search" class="w-full mr-16" placeholder="Rechercher un client ..." />
      </div>
      <nuxt-link to="/clients/edit">
        Ajouter un client
      </nuxt-link>
    </div>

    <AppDataList :items="filteredClients" link="id" link-to="/clients/:id" with-options>
      <template slot="head" slot-scope="props">
        <div class="profile">
          <AccountCircleIcon class="client-profile SvgIcon--32" /> <!-- TODO CHANGE DEPENING COMPANY -->
          <div class="profile">
            {{ props.item.contact.firstname }} <!-- TODO CHANGE DEPENING COMPANY -->
            <ChevronIcon right />
          </div>
        </div>
      </template>
    </AppDataList>
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
  methods: { ...mapActions('clients', ['fetchClients']) }
}
</script>

<style scoped>
.profile {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.client-profile {
    margin: 0 1rem;
    color: #d0e7fb;
}

.row:hover .client-profile {
    color: #0057e7;
}
</style>
