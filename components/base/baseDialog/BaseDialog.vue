<template>
  <div v-if="opened" class="bg-opacity-dark w-full h-screen absolute inset-0 flex items-center justify-center z-50">
    <div class="m-4">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseDialog',
  props: {
    value: { type: Boolean, default: false }
  },
  data () {
    return {
      lazyValue: this.value
    }
  },
  computed: {
    opened: {
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
    open () { this.opened = true },
    close () { this.opened = false }
  }
}
</script>
