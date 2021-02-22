/* eslint-disable vue/max-attributes-per-line */
<template>
  <div>
    <AppSubTitle title="Coordonées du client" />
    <div class="grid grid-cols-2 gap-4">
      <BaseInput v-model="contact.firstname" type="text" name="firstname" placeholder="Nom" />
      <BaseInput v-model="contact.lastname" type="text" name="lastname" placeholder="Prénom" />
      <BaseInput v-model="contact.mobile" type="text" name="mobile" placeholder="Téléphone Mobile" />
      <BaseInput v-model="contact.phone" type="text" name="phone" placeholder="Téléphone Fixe" />
      <BaseInput v-model="contact.email" type="email" name="email" placeholder="Adresse e-mail" class="col-span-2" />
      <AppInputAddress
        v-if="!noAddr"
        v-model="contact.addr"
        type="text"
        name="addr"
        placeholder="Adresse postale"
        class="col-span-2"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormEditContact',
  props: {
    value: {
      type: Object,
      default: () => ({
        firstname: '',
        lastname: '',
        mobile: '',
        phone: '',
        email: '',
        addr: {
          text: '',
          exact: null
        }
      })
    },
    noAddr: { type: Boolean, default: false }
  },
  data () {
    return {
      lazyValue: this.value
    }
  },
  computed: {
    contact: {
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
