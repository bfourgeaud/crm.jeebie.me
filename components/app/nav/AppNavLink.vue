<template>
  <nuxt-link :to="to" class="md:px-2 md:py-8 flex justify-center md:justify-between items-center" @click.native="RESET_OMNI">
    <div class="flex flex-col md:flex-row items-center">
      <div v-if="icon" class="mx-2 flex items-center justify-center mb-1 md:mb-0">
        <BaseIcon :icon="icon" :size="24" :class="iconColor ? iconColor : ''" />
      </div>
      <span class="item-label text-xs md:text-sm">
        <slot />
      </span>
    </div>
    <div class="chevron hidden mr-4 items-center justify-center">
      <chevron-icon right />
    </div>
  </nuxt-link>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'AppNavLink',
  props: {
    to: { type: String, default: '#' },
    icon: { type: String, default: null },
    iconColor: { type: String, default: null }
  },
  methods: { ...mapMutations('app', ['RESET_OMNI']) }
}
</script>

<style scoped>

a:not([href='/']):not(.nuxt-link-active):not(:hover),
a:not([href='/']):not(.nuxt-link-active):not(:hover) .icon,
a[href='/']:not(.nuxt-link-exact-active):not(:hover),
a[href='/']:not(.nuxt-link-exact-active):not(:hover) .icon  {
  color: hsla(0,0%,82.7%,.5)
}

a.nuxt-link-active, a:hover {
  opacity: 100%;
}

@screen md {
  a:hover .chevron {
    @apply flex;
    @apply animate-oscilliate;
  }
}

.item-label {
  white-space: nowrap;
}
</style>
