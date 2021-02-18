<template>
  <div class="add-box" :class="center ? 'center' : ''" @click="$emit('click')">
    <AddCircleIcon class="SvgIcon--32 add" />
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
}

.add-box:hover {
  @apply cursor-pointer;
}

.add-box.center {
  @apply justify-center;
}

.add-box:not(.center) {
  @apply pl-8;
}

.add-box .add {
  /*
  @apply bg-white;
  */
  @apply rounded-full;
  @apply flex;
  @apply items-center;
  @apply justify-center;
  @apply font-extrabold;
  @apply mr-4;
}

.add-box.after {
  @apply rounded-t-none;
}
</style>
