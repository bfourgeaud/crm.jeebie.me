<template>
  <div class="container text-center pb-16">
    <AppSubTitle title="Informations concernant votre client" class="mt-8" />
    <FormToggle v-model="client.isCompany" true-str="Entreprise" false-str="Particulier" class="mb-8" />
    <FormEditCompany v-if="client.isCompany" v-model="client.company" class="mb-4" />
    <FormEditContact v-model="client.contact" :no-addr="client.isCompany" />
    <div class="flex justify-center items-center">
      <AppBtn class="btn-primary mt-8" rounded large @click="submit">
        CONFIRMER
      </AppBtn>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ClientEdit',
  data () {
    return {
      client: null
    }
  },
  created () {
    this.client = this.$route.params.client || this.defaultClient()
  },
  methods: {
    ...mapActions('clients', ['addClient']),
    submit () {
      if (!this.client.id) { // Does not already exists
        this.addClient(this.client)
      } else {
        alert('Updating client')
      }
      this.$router.go(-1)
    },
    defaultClient () {
      return {
        isCompany: false,
        company: {
          name: '',
          siret: '',
          tva: '',
          addr: { text: '', exact: null },
          addrFact: { text: '', exact: null }
        },
        contact: {
          firstname: '',
          lastname: '',
          mobile: '',
          phone: '',
          email: '',
          addr: { text: '', exact: null }
        }
      }
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 480px;
}
</style>
