<template>
  <div class="options-wrapper" tabindex="0" @focus="showOptions = true" @focusout="showOptions = false">
    <OptionsWrapperIcon class="SvgIcon--40" />
    <div v-if="showOptions" class="pop-options-container">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppOptions',
  data () {
    return {
      showOptions: false
    }
  }
}
</script>

<style>
.options-wrapper {
  @apply cursor-pointer;
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0 1rem;
}

.pop-options-container {
  @apply absolute;
  @apply items-stretch;
  top: -15px;
  right: -15px;
  @apply bg-white;
  @apply rounded-md;
  @apply whitespace-no-wrap;
  box-shadow: 1px 1px 5px 0 rgb(80 80 80 / 50%);
  @apply z-50;

  @apply flex;
  @apply flex-col;
}
</style>
