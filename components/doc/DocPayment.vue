<template>
  <div v-if="!edit" class="show presta-edit">
    <div class="flex flex-col">
      <div class="text-blue-light">
        Méthode de paiement
      </div>
      <div class="transferPayment">
        <b>Banque :</b>
        <div>TransferWise Europe SA</div>
        <b>IBAN :</b>
        <div>BE49 9670 5327 3271</div>
        <b>SWIFT/BIC :</b>
        <div>TRWIBEB1XXX</div>
        <b>Titulaire</b>
        <div>Benjamin Fourgeaud</div>
      </div>
    </div>
    <div class="edit-btn" @click="edit = true">
      <BaseIcon icon="edit" :size="24" class="cursor-pointer text-blue-light" />
    </div>
  </div>
  <div v-else class="edit-container">
    <AppInput class="mb-4" placeholder="Mode de paiement" />
    <AppInput class="my-4" placeholder="Entrez ici vos conditions, pénalités de retard, etc ..." />
    <div class="my-4 flex justify-center">
      <BaseBtn class="mr-4 bg-error text-white hover:bg-red-dark" @click="cancel">
        Annuler
      </BaseBtn>
      <BaseBtn class="ml-4 bg-success text-white" @click="add">
        Valider
      </BaseBtn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocPayment',
  data () {
    return {
      edit: false
    }
  },
  methods: {
    cancel () {
      this.edit = false
    },
    add () {
      this.edit = false
    }
  }
}
</script>

<style scoped>
.show {
  @apply flex;
}

.presta-edit {
  @apply mt-8;
  @apply mb-4;
}

.edit-btn {
  @apply cursor-pointer;
  @apply ml-2;
}

.edit-container {
  @apply border;
  @apply border-blue-light;
  @apply rounded-md;
  @apply p-4;
  @apply pb-0;
}

.transferPayment {
  display: grid;
  grid-template-columns: 1fr 2fr;
  @apply gap-2;
  @apply mt-2;
}
</style>
