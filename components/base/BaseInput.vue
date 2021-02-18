<template>
  <div class="text-lg font-normal">
    <label v-if="label" class="block text-gray-700 font-medium mb-2" for="email">
      {{ label }}
    </label>
    <input
      v-model="input"
      class="py-4 px-3 appearance-none border border-grey-200 rounded w-full text-gray-700 leading-tight focus:outline-none"
      :placeholder="placeholder"
      :type="type"
      :name="name"
      autocomplete="current-password"
    >
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    value: { type: [String, Array, Boolean], default: null },
    label: { type: String, default: null },
    type: { type: String, default: 'text' },
    name: { type: String, default: '' },
    placeholder: { type: String, default: '' }
  },
  data () {
    return {
      lazyValue: this.value
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
