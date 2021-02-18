<template>
  <DocAddBox v-if="!edit && !input" center @click="edit = true">
    <slot />
  </DocAddBox>
  <div v-else-if="!edit && input">
    {{ input }}
    <div class="edit-toggle" @click="edit = true">
      <EditIcon class="cursor-pointer ml-2 text-blue-light SvgIcon--24" />
    </div>
  </div>
  <div v-else class="input-group">
    <AppInput v-model="input" class="flex-1" />
    <AppBtn class="mx-4" @click="edit = false">
      Valider
    </AppBtn>
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
