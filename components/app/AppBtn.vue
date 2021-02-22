<template>
  <component
    :is="to ? 'NuxtLink' : 'button'"
    :to="to"
    class="btn"
    :class="{
      'border border-grey-200 text-blue-light hover:border-blue-500': !disabled && !loading && outlined,
      'bg-blue-500': !disabled && !loading && !outlined,
      'hover:bg-blue-700': !disabled && !loading && !outlined,
      'bg-gray-600': disabled || loading,
      'cursor-not-allowed': disabled,
      'cursor-wait': loading,
      'rounded-full' : rounded,
      'xsmall': xSmall,
      'small': small,
      'large': large,
      'xlarge': xLarge
    }"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <div class="btn-content">
      <slot name="pre" />
      <span>
        <slot v-if="!loading" />
        <div v-else>
          Loading...
        </div>
      </span>
    </div>
  </component>
</template>

<script>
export default {
  name: 'AppBtn',
  props: {
    block: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    medium: {
      type: Boolean,
      default: false
    },
    xLarge: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    xSmall: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'primary'
    },
    to: {
      type: String,
      default: null
    }
  },
  computed: {
    btnClasses () {
      return [
        `bg-${this.color}`,
        this.rounded ? 'rounded-full' : ''
      ]
    }
  }
}
</script>

<style scoped>
.btn {
  @apply cursor-pointer;
  @apply text-center;
  @apply py-px;
  @apply px-8;
  @apply mx-4;
  @apply uppercase;
  @apply whitespace-nowrap;
  @apply shadow-md;
  @apply h-8;
  @apply inline-block;
  @apply flex;
  @apply border;
  @apply border-transparent;
  @apply items-center;
  @apply justify-center;
}

.btn.small {
  @apply h-6;
}

.btn.xsmall {
  @apply h-5;
}

.btn.large {
  @apply h-10;
}

.btn.xlarge {
  @apply h-12;
}

.btn.btn-primary {
  @apply bg-blue-light;
  @apply text-white;
}

.btn.btn-primary:hover {
  @apply bg-white;
  @apply text-blue-light;
  @apply border;
  @apply border-blue-light;
}

.btn:focus {
  @apply outline-none;
}

.btn .btn-content {
  @apply flex;
  @apply items-center;
  @apply justify-center;
}
</style>
