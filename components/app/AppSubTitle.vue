<template>
  <h3 class="text-2xl mb-5">
    {{ title }}
  </h3>
</template>

<script>
export default {
  name: 'AppSubTitle',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
