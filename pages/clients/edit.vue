<template>
  <div class="container text-center pb-16">
    <AppSubTitle title="Informations concernant votre client" class="mt-8" />
    <FormToggle v-model="lazyClient.isCompany" true-str="Entreprise" false-str="Particulier" class="mb-8" />
    <FormEditCompany v-if="lazyClient.isCompany" v-model="lazyClient.company" class="mb-4" />
    <FormEditContact v-model="lazyClient.contact" :no-addr="lazyClient.isCompany" />
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
  props: {
    client: {
      type: Object,
      default: () => ({
        isCompany: false,
        company: {
          name: '',
          siret: '',
          tva: '',
          addr: '',
          addrFact: ''
        },
        contact: {
          firstname: '',
          lastname: '',
          mobile: '',
          phone: '',
          email: '',
          addr: ''
        }
      })
    }
  },
  data () {
    return {
      lazyClient: this.client
    }
  },
  methods: {
    ...mapActions('clients', ['addClient']),
    submit () {
      this.addClient(this.client)
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 480px;
}
</style>
