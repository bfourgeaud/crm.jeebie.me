<template>
  <AppCard class="editor">
    <div class="status">
      <span>Edité le dimanche 14 février 2021</span>
    </div>
    <DocCompanyInfo class="self" />
    <DocClientInfo v-model="invoice.client" class="client" />
    <DocFieldEdit v-model="invoice.title" class="title">
      Ajouter un titre
    </DocFieldEdit>
    <DocServiceTable v-model="invoice.articles" />
    <DocPriceBox v-model="invoice.total" class="total" />
    <DocPayment class="payment" />
    <DocConditions class="conditions" />
  </AppCard>
</template>

<script>
export default {
  name: 'DocInvoice',
  props: { value: { type: Object, default: () => ({}) } },
  data () {
    return {
      lazyInvoice: this.calcTotal(this.value)
    }
  },
  computed: {
    invoice: {
      get () {
        return this.lazyInvoice
      },
      set (val) {
        this.lazyInvoice = this.calcTotal(val)
        this.$emit('input', this.lazyInvoice)
      }
    }
  },
  watch: {
    value: {
      handler (val) {
        this.lazyInvoice = this.calcTotal(val)
      },
      deep: true
    }
  },
  methods: {
    calcTotal (val) {
      const totalHT = val.articles.reduce((a, b) => a + (b.totalPrice || 0), 0)
      const tva = val.tva
      const totalTTC = totalHT - (totalHT * (tva || 0) / 100)
      return {
        ...val,
        total: { totalHT, tva, totalTTC }
      }
    }
  }
}
</script>

<style scoped>
.editor {
  @apply mx-4;
  @apply my-8;
  @apply p-8;
  @apply flex-1;
  @apply grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "date date"
                       "self client"
                       "title title"
                       "items items"
                       "payment total"
                       "payment total"
                       "conditions conditions";
}

/* data-v-dc666d22 */
.self {
  grid-area: self;
}

/* data-v-dc666d22 */
.status {
  grid-area: date;
  @apply text-right;
}

/* data-v-dc666d22 */
.status {
  @apply flex;
  @apply flex-col;
  @apply items-end;
}

/* data-v-dc666d22 */
.client {
  grid-area: client;
}

/* data-v-dc666d22 */
.title {
  grid-area: title;
}

/* data-v-dc666d22 */
.items {
  grid-area: items;
}

/* data-v-dc666d22 */
.tva {
  grid-area: tva;
}

/* data-v-dc666d22 */
.total {
  grid-area: total;
}

/* data-v-dc666d22 */
.payment {
  grid-area: payment;
}

.conditions {
  grid-area: conditions;
}

/* data-v-b904e5fa */
.deadline-grid {
  @apply col-span-2;
}

/* data-v-177aaaf6 */
.title {
  @apply flex;
  @apply flex-1;
  @apply items-center;
  @apply justify-items-center;
  @apply my-4;
}
</style>
