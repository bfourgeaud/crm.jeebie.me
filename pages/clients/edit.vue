<template>
  <div class="mx-auto text-center">
    <AppSubTitle title="Informations concernant votre client" class="mt-8" />
    <FormToggle v-model="lazyClient.isCompany" true-str="Entreprise" false-str="Particulier" class="mb-8" />
    <FormEditCompany v-if="lazyClient.isCompany" v-model="lazyClient.company" />
    <FormEditContact v-model="lazyClient.contact" :no-addr="lazyClient.isCompany" />
    <AppBtn @click="submit">
      CONFIRMER
    </AppBtn>
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
