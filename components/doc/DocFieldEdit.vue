<template>
  <DocAddBox v-if="!edit && !input" center @click="edit = true">
    <slot />
  </DocAddBox>
  <div v-else-if="!edit && input">
    {{ input }}
    <div class="edit-toggle" @click="edit = true">
      <BaseIcon icon="edit" :size="24" class="cursor-pointer ml-2 text-blue-light" />
    </div>
  </div>
  <div v-else class="input-group">
    <BaseInput v-model="input" class="flex-1" />
    <BaseBtn large class="mx-4 bg-blue-light text-white hover:bg-blue-DEFAULT" @click="edit = false">
      Valider
    </BaseBtn>
  </div>
</template>

<script>
export default {
  name: 'DocFieldEdit',
  props: {
    value: { type: [Object, String], default: '' }
  },
  data () {
    return {
      lazyValue: this.value,
      edit: false
    }
  },
  computed: {
    input: {
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

<style scoped>
.input-group {
  @apply flex;
  @apply items-center;
  @apply justify-center;
  @apply justify-items-center;
}
</style>
