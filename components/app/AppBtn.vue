<template>
  <button
    class="text-white py-2 px-4 rounded font-medium focus:outline-none"
    :class="{
      'border border-grey-200 text-dark opacity-50 hover:text-blue-500 hover:opacity-100 hover:border-blue-500': !disabled && !loading && outlined,
      'bg-blue-500': !disabled && !loading && !outlined,
      'hover:bg-blue-700': !disabled && !loading && !outlined,
      'bg-gray-600': disabled || loading,
      'cursor-not-allowed': disabled,
      'cursor-wait': loading,
    }"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot v-if="!loading" />
    <div v-else>
      Loading...
    </div>
  </button>
</template>

<script>
export default {
  name: 'AppBtn',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    }
  }
}
</script>
