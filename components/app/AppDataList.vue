<template>
  <span class="data-table">
    <AppRow v-for="(item, index) in items" :key="index" :to="linkTo" :item="item" class="data-row before mb-px"> <!-- TODO: item is not defined correctly -->
      <slot slot="head" name="head" :item="item" />
      <template v-if="withOptions" slot="actions">
        <div class="options-wrapper action">
          <OptionsWrapperIcon class="SvgIcon--40" />
        </div>
      </template>
    </AppRow>
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
    margin-top: 3rem;
    display: -webkit-box;
    display: -ms-flexbox;
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

.data-table .data-row.before {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}
.data-table .data-row {
    height: 64px;
    -webkit-box-shadow: 0 2px 0 rgb(0 0 0 / 12%);
    box-shadow: 0 2px 0 rgb(0 0 0 / 12%);
    background-color: #fff;
    padding: 0 5px;
    margin-bottom: 1px;
    margin-left: 0;
    margin-right: 0;
}

/* Scoped */
.options-wrapper {
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
</style>
