<template>
  <div v-if="!edit" class="show presta-edit">
    <div>
      <span class="text-blue-light">Conditions de paiement - </span>
      {{ conditions }}
    </div>
    <div class="edit-btn" @click="edit = true">
      <BaseIcon icon="edit" :size="24" class="cursor-pointer text-blue-light" />
    </div>
  </div>
  <div v-else class="edit-container">
    <AppInput v-model="editedValue" class="my-4" placeholder="Entrez ici vos conditions, pénalités de retard, etc ..." />
    <div class="my-4 flex justify-center">
      <BaseBtn class="mr-4 bg-error text-white hover:bg-red-dark" @click="cancel">
        Annuler
      </BaseBtn>
      <BaseBtn class="ml-4 bg-success text-white hover:bg-blue" @click="add">
        Valider
      </BaseBtn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocConditions',
  props: {
    value: { type: String, default: '' }
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
