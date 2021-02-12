<template>
  <nuxt-link :to="to" class="px-2 py-8 flex justify-between items-center">
    <div class="flex items-center">
      <div v-if="icon" class="mx-2 flex items-center justify-center">
        <component :is="`${icon}-icon`" class="icon" :class="iconColor ? iconColor : ''" />
      </div>
      <span>
        <slot />
      </span>
    </div>
    <div class="chevron hidden mr-4 items-center justify-center">
      <chevron-icon right />
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'AppNavLink',
  props: {
    to: { type: String, default: '#' },
    icon: { type: String, default: null },
    iconColor: { type: String, default: null }
  }
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

a:hover .chevron {
  @apply flex animate-oscilliate;
}
</style>
