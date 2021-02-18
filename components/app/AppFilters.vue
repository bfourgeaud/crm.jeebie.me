<template>
  <div class="flex items-center">
    <BaseBtn
      v-for="(item, index) in items"
      :key="index"
      class="border mr-4"
      :class="{
        'bg-blue-light text-white border-blue-light': isSelected(item),
        'bg-white text-grey-300': !isSelected(item)
      }"
      rounded
      @click="select(item)"
    >
      {{ item }}
    </BaseBtn>
  </div>
</template>

<script>
export default {
  name: 'AppFilters',
  props: {
    value: { type: [String, Array], default: '' },
    items: { type: Array, default: () => [] },
    multi: { type: Boolean, default: false }
  },
  data () {
    return {
      selectedItems: this.multi ? [...this.value] : this.value
    }
  },
  watch: {
    selectedItems () {
      this.$emit('input', this.selectedItems)
    }
  },
  methods: {
    select (item) {
      const active = this.isSelected(item)
      if (active && !this.multi) { return }
      if (!this.multi) { this.selectedItems = item }

      if (this.multi && active) { this.removeItem(item) }
      if (this.multi && !active) { this.addItem(item) }
    },
    removeItem (item) {
      const index = this.selectedItems.indexOf(item)
      if (index > -1) {
        this.selectedItems.splice(index, 1)
      }
    },
    addItem (item) {
      this.selectedItems.push(item)
    },
    isSelected (item) {
      if (this.multi) {
        return this.selectedItems.filter(e => e === item).length > 0
      }
      return this.selectedItems === item
    }
  }
}
</script>
