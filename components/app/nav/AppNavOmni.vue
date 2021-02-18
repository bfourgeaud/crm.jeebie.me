<template>
  <div class="omni">
    <BaseIcon
      icon="plus"
      class="bg-white text-blue-light omnisocket"
      :class="omniOpened ? 'open' : ''"
      :size="size"
      rounded
      raised
      @click="TOGGLE_OMNI"
    />
    <AppNavOmniMenu class="omniMenu z-50" :class="omniOpened ? 'open opacity-100' : 'opacity-0 hidden'" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'AppNavOmni',
  data () {
    return {
      size: 64
    }
  },
  computed: { ...mapState('app', ['omniOpened']) },
  methods: { ...mapMutations('app', ['TOGGLE_OMNI']) }
}
</script>

<style scoped>
.omni {
  position: relative;
  margin-left: -16px;
}

.omniMenu {
  min-height: 128px;
  bottom: calc(64px + 32px);
  left: -73px;
  width: 210px;
  transform: translateY(0);
}

.omniMenu.open{
  transform: translateY(-32px);
}

@screen md {
  .omni {
    position: absolute;
    left: 78px;
    bottom: 64px;
    margin-left: 0px;
  }

  .omniMenu {
    bottom: 32px;
  }
}

.omnisocket {
  width: 64px;
  height: 64px;
  position: absolute;
  left: 0;
  right: 0;
  top: -32px;
  background-color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
  border-radius: 32px;
}

.omnisocket {
  @apply transition;
  @apply duration-500;
  @apply ease-in-out;
  @apply transform;
  @apply text-blue-light;
}

.omnisocket.open {
  @apply rotate-135;
  @apply text-red-light;
}
</style>
