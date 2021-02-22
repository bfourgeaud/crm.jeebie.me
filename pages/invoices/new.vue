<template>
  <div class="container" style="max-width: 720px;">
    <DocInvoice v-show="!preview" />
    <div class="actions">
      <BaseBtn class="bg-blue-light text-white" @click="togglePreview">
        {{ preview ? 'Modifier' : 'Suivant' }}
      </BaseBtn>
      <BaseBtn v-if="preview" class="ml-4" @click="saveDoc">
        Valider
      </BaseBtn>
    </div>
    <div>{{ invoice }}</div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'NewInvoice',
  data () {
    return {
      preview: false
    }
  },
  computed: {
    ...mapState({ invoice: state => state.invoice })
  },
  created () {
    this.RESET_INVOICE()
    this.SET_CLIENT(this.$route.params.user)
  },
  methods: {
    ...mapMutations('invoice', ['SET_CLIENT', 'RESET_INVOICE']),
    togglePreview () {
      this.preview = !this.preview
    },
    saveDoc () {
      this.$dbs.invoices.create(this.invoice, () => {
        this.RESET_INVOICE()
        alert('Invoice saved')
      })
    }
  }
}
</script>
