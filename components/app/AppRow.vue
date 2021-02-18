<template>
  <component :is="to ? 'NuxtLink' : 'div'" :to="to" class="row data-row">
    <slot />
    <div class="row-head">
      <slot name="head" />
    </div>
    <div class="row-actions">
      <slot name="actions" />
    </div>
  </component>
</template>

<script>
export default {
  name: 'AppRow',
  props: {
    to: { type: String, default: null },
    item: { type: Object, default: () => null }
  }
}
</script>

<style scoped>
.row {
    transition: all .2s;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
}

.data-row.before {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}
.data-row {
    /*height: 64px;*/
    box-shadow: 0 2px 0 rgb(0 0 0 / 12%);
    background-color: #fff;
    padding: 5px 5px;
    margin-bottom: 1px;
    margin-left: 0;
    margin-right: 0;
}

.row-head .label, .row-head {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}

.row:hover, .row:hover .row-head, .row:hover .row-actions {
    color: #0057e7;
    background-color: #d0e7fb;
}

.row-head {
    -ms-flex-align: center;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.row-actions {
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}

.action{
    cursor: pointer;
}
</style>
