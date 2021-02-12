<template>
  <component :is="to ? 'NuxtLink' : 'div'" :to="to ? resolvedLink : ''" class="row">
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
  },
  computed: {
    resolvedLink () {
      let link = this.to
      const regex = /\/:\w+/gm
      const found = link.match(regex)
      found.forEach((element) => {
        link = link.replace(element, `/${this.item[element.substring(2)]}`)
      })
      return link
    }
  }
}
</script>

<style scoped>
.row {
    -webkit-transition: all .2s;
    transition: all .2s;
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.row-head .label, .row-head {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}

.row:hover {
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
    display: -webkit-box;
    display: -ms-flexbox;
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
