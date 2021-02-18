<template>
  <div class="card__title">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CardTitle'
}
</script>

<style>
.card__title {
  @apply items-center;
  @apply flex;
  @apply flex-wrap;
  @apply text-xl;
  @apply leading-8;
  @apply break-all;
  @apply tracking-wide;
  @apply font-semibold;
}
</style>
