<template>
  <div class="add-box cursor-pointer" :class="center ? 'justify-center' : 'pl-8'" @click="$emit('click')">
    <BaseIcon icon="plus" :size="28" rounded class="mr-4 text-white bg-blue-light" />
    <slot />
  </div>
</template>

<script>
export default {
  name: 'DocAddBox',
  props: {
    center: { type: Boolean, default: false }
  }
}
</script>

<style scoped>
.add-box {
  @apply text-blue-light;
  @apply bg-blue-100;

  @apply border;
  @apply rounded-md;
  @apply border-blue-light;

  @apply py-4;

  @apply flex;
  @apply flex-1;
  @apply items-center;
}

.add-box.after {
  @apply border-t-0;
  @apply rounded-t-none;
}

.add-box.before {
  @apply border-b-0;
  @apply rounded-b-none;
}
</style>
