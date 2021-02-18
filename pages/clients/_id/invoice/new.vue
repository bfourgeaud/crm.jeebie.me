<template>
  <div class="edit-preview">
    <DocInvoice v-if="!preview" v-model="invoice" />
    <div class="actions">
      <AppBtn @click="previewDoc">
        {{ preview ? 'Modifier' : 'Suivant' }}
      </AppBtn>
      <AppBtn v-if="preview" class="ml-4" @click="saveDoc">
        Valider
      </AppBtn>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NewInvoice',
  data () {
    return {
      invoice: this.defaultInvoice(),
      preview: false
    }
  },
  computed: {
    ...mapGetters('clients', ['getByID'])
  },
  mounted () {
    this.invoice.client = this.getByID(this.$route.params.id)
  },
  methods: {
    defaultInvoice () {
      return {
        company: null,
        client: null,
        title: '',
        articles: [],
        tva: 0,
        dateOverdue: '',
        paymentMethod: ''
      }
    },
    previewDoc () {
      this.preview = !this.preview
    },
    saveDoc () {
      return null
    }
  }
}
</script>

<style scoped>
/* data-v-31207c04 */
.edit-preview {
  @apply flex;
  @apply flex-col;
  @apply items-stretch;
  @apply w-full;
  max-width: 720px;
  @apply mx-auto;
}

/* data-v-1afd9d79 */
.actions {
  @apply flex;
  @apply items-center;
  @apply justify-between;
  @apply mx-auto;
}
</style>
