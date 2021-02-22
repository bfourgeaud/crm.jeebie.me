<template>
  <BaseCard class="editor" :elevation="6" rounded>
    <div class="status">
      <span>Edité le dimanche 14 février 2021</span>
    </div>
    <DocCompanyInfo class="self" />
    <DocClientInfo :value="client" class="client" @update="SET_CLIENT" />
    <DocFieldEdit :value="title" class="title" @input="SET_TITLE">
      Ajouter un titre
    </DocFieldEdit>
    <DocServiceTable :value="articles" @input="SET_ARTICLES" />
    <DocPriceBox :value="total" class="total" />
    <DocPayment :value="paymentMethod" class="payment" @input="SET_PAYMENT" />
    <DocConditions :value="conditions" class="conditions" @input="SET_CONDITIONS" />
  </BaseCard>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'DocInvoice',
  computed: {
    ...mapState('invoice', [
      'company',
      'client',
      'title',
      'articles',
      'dateOverdue',
      'paymentMethod',
      'total',
      'conditions'
    ])
  },
  methods: {
    ...mapMutations('invoice', [
      'SET_CLIENT',
      'SET_TITLE',
      'SET_ARTICLES',
      'SET_DATE_OVER',
      'SET_PAYMENT',
      'SET_CONDITIONS'
    ])
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
