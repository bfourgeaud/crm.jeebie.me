<template>
  <component :is="to ? 'NuxtLink' : 'div'" :to="to" class="card" :class="classes">
    <progress-bar v-if="loading" class="card__progress" />
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Card',
  props: {
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    elevation: { type: Number, default: 0 },
    outlined: { type: Boolean, default: false },
    rounded: { type: Boolean, default: false },
    to: { type: String, default: null }
  },
  computed: {
    classes () {
      return {
        disabled: this.disabled,
        loading: this.loading,
        [`shadow-${this.elevation}`]: this.elevation,
        border: this.outlined,
        'rounded-md': this.rounded,
        'cursor-pointer': this.to
      }
    }
  }
}
</script>

<style>
.disabled {
  @apply pointer-events-none;
}

.disabled>:not(.card__progress){
   @apply opacity-50;
}

.card__progress {
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

.loading {
  @apply overflow-hidden;
}

.card__title+.card__subtitle {
  @apply -mt-4;
}

.card__title+.card__subtitle, .card__title+.card__text {
  @apply pt-0;
}

.card__subtitle, .card__text, .card__title {
  @apply p-4;
}

.card__subtitle, .card__text {
  @apply text-sm;
  @apply font-normal;
  @apply leading-5;
  @apply tracking-normal;
}
</style>
