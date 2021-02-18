<template>
  <span class="data-table">
    <slot name="header" />
    <slot v-for="item in items" :item="item">
      {{ item }}
    </slot>
  </span>
</template>

<script>
export default {
  name: 'AppDataList',
  props: {
    items: { type: [Array], default: () => [] },
    withOptions: { type: Boolean, default: false },
    linkTo: { type: String, default: null }
  }
}
</script>

<style scoped>
/* Global */
.data-table {
    position: relative;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    color: #000;
}
</style>
