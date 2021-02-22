<template>
  <div class="editor-table items mb-2" :style="gridStyle">
    <div v-for="header in headers" :key="header" class="head item">
      {{ header }}
    </div>
    <div v-for="(row, rowIdx) in items" :key="rowIdx" class="row-contents">
      <div
        v-for="(val, colIdx) in Object.values(row)"
        :key="`${rowIdx}-${colIdx}`"
        class="cell"
        :class="{
          first : colIdx === 0,
          last: colIdx === Object.keys(row).length-1
        }"
      >
        <slot name="col" :val="val">
          {{ val }}
          <div v-if="colIdx === Object.keys(row).length-1" class="div">
            <div class="edit" @click="editItem(rowIdx)">
              <BaseIcon icon="edit" :size="24" class="ml-2 text-blue-light" />
            </div>
          </div>
        </slot>
      </div>
    </div>

    <div v-if="edit" class="add-row">
      <AppInput v-model="editedItem.desc" placeholder="Description" class="my-4" />
      <div class="my-4 flex justify-between">
        <AppInput v-model="editedItem.count" placeholder="Nombre" type="number" class="mr-4 flex-1" />
        <AppInput v-model="editedItem.unitPrice" placeholder="Tarif unitaire" type="number" class="ml-4 flex-1" />
      </div>
      <div class="my-4 flex justify-center">
        <BaseBtn class="mr-4 bg-error text-white hover:bg-red-dark" @click="cancel">
          Annuler
        </BaseBtn>
        <BaseBtn class="ml-4 bg-success text-white" @click="add">
          Valider
        </BaseBtn>
      </div>
    </div>
    <DocAddBox class="col-span-4 after" @click="edit = true">
      Ajouter une prestation
    </DocAddBox>
  </div>
</template>

<script>
export default {
  name: 'DocServiceTable',
  props: {
    value: { type: Array, default: () => [] }
  },
  data () {
    return {
      headers: ['Description', 'Nombre', 'Tarif Unitaire', 'Total HT'],
      lazyValue: this.value,
      edit: false,
      editedItem: this.reseteditedItem()
    }
  },
  computed: {
    items: {
      get () {
        return this.lazyValue
      },
      set (val) {
        this.lazyValue = val
        this.$emit('input', val)
      }
    },
    gridStyle () {
      const nbCols = this.headers.length - 1
      return {
        gridTemplateColumns: `1fr repeat(${nbCols}, auto)`
      }
    }
  },
  watch: {
    value (val) {
      this.lazyValue = val
    }
  },
  methods: {
    add () {
      const totalPrice = this.editedItem.unitPrice * this.editedItem.count
      this.items.push({ ...this.editedItem, totalPrice })
      this.editedItem = this.reseteditedItem()
      this.edit = false
      this.$emit('input', this.items)
    },
    cancel () {
      this.editedItem = this.reseteditedItem()
      this.edit = false
    },
    editItem (rowIdx) {
      this.editedItem = this.items[rowIdx]
      this.items.splice(rowIdx, 1)
      this.edit = true
    },
    reseteditedItem () {
      return {
        desc: '',
        count: null,
        unitPrice: null
      }
    }
  }
}
</script>

<style scoped>
/* data-v-eac825e4 */
.editor-table {
  display: grid;
}

/* data-v-eac825e4*/
.head.first {
  border-top-left-radius: 5px;
}

/* data-v-eac825e4 */
.head {
  @apply bg-blue-light;
  @apply text-white;
  @apply flex;
  @apply font-medium;
  @apply items-center;
  @apply p-4;
  justify-items: space-between; /* ?? */
}

.editor-table .row-contents {
  display: contents;
}

.cell {
  @apply border-blue-light;
  @apply border-l;
  @apply border-b;
  @apply text-center;
  @apply p-3;
  @apply w-auto;
}

.cell.first {
  @apply text-left;
}

.cell.last {
  @apply border-r;
  @apply relative;
}

.add-row {
  @apply flex;
  @apply flex-col;
  @apply p-4;
  @apply col-span-4;

  @apply border-blue-light;
  @apply border-l;
  @apply border-r;
}

.edit {
  @apply absolute;
  @apply cursor-pointer;
  right: -32px;
  top: -8px;
  @apply bottom-0;
  @apply flex;
  @apply justify-center;
  @apply items-center;
}

</style>
