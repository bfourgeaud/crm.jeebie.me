<template>
  <div
    class="card-container"
    :class="[
      border ? 'border' : ''
    ]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppCard',
  props: {
    border: { type: Boolean, default: false }
  }
}
</script>

<style scoped>
.card-container {
  @apply rounded-md;
  @apply bg-white;
  @apply shadow-6;
}

.card-container.border {
  @apply border;
}
</style>
