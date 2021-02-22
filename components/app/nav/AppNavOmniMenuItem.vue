<template>
  <nuxt-link :to="to" class="flex justify-start items-center whitespace-no-wrap" @click.native="RESET_OMNI">
    <BaseIcon :icon="icon" :size="iconSize" class="mr-2" :class="[iconBg, iconColor]" rounded />
    <p class="uppercase">
      <slot />
    </p>
  </nuxt-link>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'OmniMenuItem',
  props: {
    icon: { type: String, default: '' },
    iconSize: { type: Number, default: 33 },
    iconBg: { type: String, default: 'bg-blue-100' },
    iconColor: { type: String, default: 'text-white' },
    to: { type: [String, Object], default: '#' }
  },
  methods: { ...mapMutations('app', ['RESET_OMNI']) }
}
</script>
