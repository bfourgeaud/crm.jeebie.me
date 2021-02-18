<template>
  <div v-if="!edit" class="show presta-edit">
    <div>
      <span class="text-blue-light">Conditions de paiement - </span>
      {{ conditions }}
    </div>
    <div class="edit-btn" @click="edit = true">
      <EditIcon class="text-blue-light SvgIcon--32" />
    </div>
  </div>
  <div v-else class="edit-container">
    <AppInput v-model="editedValue" class="my-4" placeholder="Entrez ici vos conditions, pénalités de retard, etc ..." />
    <div class="my-4 flex justify-center">
      <AppBtn class="mr-4" @click="cancel">
        Annuler
      </AppBtn>
      <AppBtn class="ml-4" @click="add">
        Valider
      </AppBtn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocConditions',
  props: {
    value: {
      type: String,
      default: 'Taux de pénalités exigibles de plein droit et sans rappel préalable en cas de paiement à une date ultérieure à celle figurant sur la facture : 10,00% , Indemnité forfaitaire pour frais de recouvrement en cas de paiement à une date ultérieure à celle figurant sur la facture : 40,00€. Si les frais de recouvrement sont supérieurs à ce montant, une indemnisation complémentaire sera due, sur présentation des justificatifs.'
    }
  },
  data () {
    return {
      edit: false,
      lazyValue: this.value,
      editedValue: this.value
    }
  },
  computed: {
    conditions: {
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
  },
  methods: {
    cancel () {
      this.editedValue = this.conditions
      this.edit = false
    },
    add () {
      this.conditions = this.editedValue
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
</style>
