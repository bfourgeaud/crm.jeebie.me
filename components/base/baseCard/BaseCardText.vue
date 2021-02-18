<template>
  <div class="card__text">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CardText'
}
</script>

<style scoped>
.v-card__text {
  @apply w-full;
}
</style>
