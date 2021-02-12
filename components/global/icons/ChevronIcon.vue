<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
    <path v-if="down" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6-6-6 1.41-1.42z" />
    <path v-else-if="left" d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.42z" />
    <path v-else-if="right" d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z" />
    <path v-else-if="up" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" />
  </svg>
</template>

<script>
export default {
  name: 'ChevronIcon',
  props: {
    left: { type: Boolean, default: false },
    right: { type: Boolean, default: false },
    up: { type: Boolean, default: false },
    down: { type: Boolean, default: false }
  }
}
</script>
