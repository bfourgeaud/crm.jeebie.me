<template>
  <div class="flex justify-between text-lg">
    <AppBtn class="w-full mr-2 uppercase flex flex-col items-center py-4" :outlined="toggle" @click="toggle = false">
      <ChartIcon />
      {{ falseStr }}
    </AppBtn>
    <AppBtn class="w-full ml-2 uppercase flex flex-col items-center py-4" :outlined="!toggle" @click="toggle = true">
      <ChartIcon />
      {{ trueStr }}
    </AppBtn>
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
