<template>
  <div
    class="absolute inset-0 transition duration-300 ease-in-out"
    :class="omniOpened ? 'pointer-events-auto bg-opacity-dark' : 'pointer-events-none bg-transparent'"
    @click="RESET_OMNI"
  />
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'AppCover',
  computed: { ...mapState('app', ['omniOpened']) },
  methods: { ...mapMutations('app', ['RESET_OMNI']) }
}
</script>
