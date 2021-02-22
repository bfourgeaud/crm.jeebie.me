<template>
  <div
    class="icon"
    :class="[rounded ? 'rounded-full' : '', raised ? 'shadow-6' : '']"
    :style="`width:${size}px; height:${size}px;`"
    @click="$emit('click')"
  >
    <component :is="component" :style="iconStyles" />
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    icon: { type: String, default: '' },
    rounded: { type: Boolean, default: false },
    size: { type: Number, default: 24 },
    raised: { type: Boolean, default: false }
  },
  data () {
    return {
      component: null
    }
  },
  computed: {
    iconStyles () {
      return {
        height: this.rounded ? this.size / 2 : this.size
      }
    },
    loader () {
      if (!this.icon) {
        return null
      }
      return () => import('@/components/icons/' + this.formatIconName(this.icon))
    }
  },
  mounted () {
    this.loader()
      .then(() => {
        this.component = () => this.loader()
      })
      .catch(() => {
        this.component = () => import('@/components/icons/HomeIcon')
      })
  },
  methods: {
    formatIconName (name) {
      const camelCased = name.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase() })
      const upperCased = camelCased.charAt(0).toUpperCase() + camelCased.slice(1)
      return `${upperCased}Icon`
    }
  }
}
</script>

<style scoped>
.icon {
  @apply flex;
  @apply items-center;
  @apply justify-center;
}
.SvgIcon--24{
  height: 24px;
}

.SvgIcon--32 {
  height: 32px;
}

.SvgIcon--40 {
  height: 40px;
}

.SvgIcon--64 {
  height: 64px;
}
</style>
