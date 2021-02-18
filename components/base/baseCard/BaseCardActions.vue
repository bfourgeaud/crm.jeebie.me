<template>
  <div class="card__actions">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CardActions'
}
</script>

<style scoped>
.card__actions {
  @apply flex;
  @apply items-center;
  @apply p-2;
}
</style>
