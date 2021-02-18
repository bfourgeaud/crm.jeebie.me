<!--
Do not use outline if you want to control hover effects
-->
<template>
  <component :is="to ? 'NuxtLink' : 'div'" :to="to" class="btn" :class="classes" @click="$emit('click')">
    <span class="btn__content">
      <slot v-if="!icon" />
      <span v-else aria-hidden="true" class="icon"><slot /></span> <!-- TODO -->
    </span>
  </component>
</template>

<script>
export default {
  name: 'BaseBtn',
  props: {
    block: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    large: { type: Boolean, default: false },
    loading: { type: Boolean, default: false }, /* TODO */
    small: { type: Boolean, default: false },
    xLarge: { type: Boolean, default: false },
    xSmall: { type: Boolean, default: false },
    sizeInherit: { type: Boolean, default: false },
    elevation: { type: Number, default: 0 },
    bold: { type: Boolean, default: false },
    xBold: { type: Boolean, default: false },

    icon: { type: Boolean, default: false }, /* TODO */
    outlined: { type: Boolean, default: false },
    plain: { type: Boolean, default: false },
    rounded: { type: Boolean, default: false },
    text: { type: Boolean, default: false },
    tile: { type: Boolean, default: false },

    to: { type: String, default: null }
  },
  computed: {
    classes () {
      return {
        'btn--has-bg': !this.text && !this.outlined && !this.icon,
        'size--small': this.small,
        'size--large': this.large,
        'size--xlarge': this.xLarge,
        'size--xsmall': this.xSmall,
        'btn--disabled': this.disabled,
        'btn--block': this.block,
        loading: this.loading,
        [`shadow-${this.elevation}`]: this.elevation,
        border: this.outlined,
        'btn--rounded': this.rounded,
        'btn--text': this.text,
        'btn--tile': this.tile,
        'btn--plain': this.plain,
        'btn--outlined': this.outlined,
        'btn--round': this.icon,
        'btn--icon': this.icon,
        'btn--bold': this.bold,
        'btn--xbold': this.xBold,
        'btn--size-unset': this.sizeInherit
      }
    }
  }
}
</script>

<style scoped>
.btn {
  @apply cursor-pointer;
  @apply text-sm;
  @apply items-center;
  @apply rounded;
  @apply inline-flex;
  @apply font-medium;
  @apply tracking-wider;
  @apply justify-center;
  @apply relative;
  @apply uppercase;
  @apply whitespace-no-wrap;
}

.btn.btn--bold {
  @apply font-bold;
}
.btn.btn--xbold {
  @apply font-extrabold;
}
.btn:not(.btn--round):not(.btn--size-unset){
  @apply h-8;
  min-width: 64px;
  @apply px-4;
}

.btn.size--large {
  @apply h-12;
  min-width: 78px;
  @apply px-5;
}

.btn.size--small {
  @apply h-6;
  min-width: 50px;
  @apply px-3;
}

.btn.size--xlarge {
  @apply h-16;
  min-width: 92px;
  @apply px-6;
}

.btn.size--xsmall {
  @apply h-5;
  min-width: 36px;
  @apply px-2;
}

.btn:not(.btn--has-bg) {
  @apply bg-transparent;
}

.btn.btn--disabled {
  @apply text-opacity-medium;
}

.btn--disabled {
  @apply pointer-events-none;
}

.btn.btn--disabled.btn--has-bg {
  @apply bg-opacity-light;
}

.btn--block {
  max-width: auto;
  @apply flex;
  @apply min-w-full !important;
}

.btn--rounded {
  @apply rounded-3xl;
}

.btn--round {
  @apply rounded-full;
}

.btn--icon {
  @apply min-h-0;
  @apply min-w-0;
  @apply p-0;
}

.btn.btn--icon {
  @apply text-opacity-medium;
}

.btn--tile {
  @apply rounded-none;
}

.btn--plain:before {
  @apply hidden;
}

.btn--outlined {
  @apply border;
}

.btn__content {
  @apply items-center;
  @apply flex;
}

</style>
