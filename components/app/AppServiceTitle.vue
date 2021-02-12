<template>
  <h3 class="text-3xl mb-5">
    {{ title }}
  </h3>
</template>

<script>
export default {
  name: 'AppServiceTitle',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
