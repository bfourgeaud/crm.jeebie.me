<template>
  <div>
    <div class="grid grid-cols-2 gap-4">
      <BaseInput v-model="company.name" type="text" name="company-name" placeholder="Nom de l'entreprise" class="col-span-2" />
      <BaseInput v-model="company.siret" type="text" name="siret" placeholder="Numéro SIRET" />
      <BaseInput v-model="company.tva" type="text" name="tva" placeholder="Numéro de TVA" />
      <AppInputAddress v-model="company.addr" type="text" name="addr-company" placeholder="Adresse du siège social" class="col-span-2" />
      <AppInputAddress v-model="company.addrFact" type="text" name="addr-fact" placeholder="Adresse de facturation (si différente)" class="col-span-2" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormEditCompany',
  props: {
    value: {
      type: Object,
      default: () => ({
        name: '',
        siret: '',
        tva: '',
        addr: {
          text: '',
          exact: null
        },
        addrFact: {
          text: '',
          exact: null
        }
      })
    }
  },
  data () {
    return {
      lazyValue: this.value
    }
  },
  computed: {
    company: {
      get () {
        return this.lazyValue
      },
      set (val) {
        this.lazyValue = val
        this.$emit('input', val)
      }
    }
  },
  watch: {
    value (val) {
      this.lazyValue = val
    }
  }
}
</script>
