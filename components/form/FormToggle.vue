<template>
  <div class="flex justify-between text-lg">
    <BaseBtn
      class="h-32 w-full mr-2 uppercase py-4 border"
      :class="!toggle ? 'text-white bg-blue-light' : 'text-opacity-dark bg-white'"
      size-inherit
      x-bold
      @click.native="toggle = false"
    >
      <span class="flex flex-col items-center justify-center">
        <BaseIcon icon="contacts" class="mb-4" />
        {{ falseStr }}
      </span>
    </BaseBtn>
    <BaseBtn
      class="w-full ml-2 uppercase py-4 border h-32"
      :class="toggle ? 'text-white bg-blue-light' : 'text-opacity-dark bg-white'"
      size-inherit
      x-bold
      @click.native="toggle = true"
    >
      <span class="flex flex-col items-center justify-center">
        <BaseIcon icon="company" class="mb-4" />
        {{ trueStr }}
      </span>
    </BaseBtn>
  </div>
</template>

<script>
export default {
  name: 'FormToggle',
  props: {
    value: { type: Boolean, default: false },
    trueStr: { type: String, default: 'true' },
    falseStr: { type: String, default: 'false' }
  },
  data () {
    return {
      lazyValue: this.value
    }
  },
  computed: {
    toggle: {
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
