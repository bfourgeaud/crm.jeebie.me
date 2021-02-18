<template>
  <div class="price-box">
    <div class="line">
      <div>Total HT</div>
      <div class="price">
        {{ total.totalHT }} €
      </div>
    </div>
    <div v-if="total.tva" class="line">
      <div>TVA</div>
      <div class="price">
        {{ total.tva }} %
      </div>
    </div>
    <div class="line dark">
      <div>Total</div>
      <div class="price">
        {{ total.totalTTC }} €
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocPriceBox',
  props: {
    value: {
      type: Object,
      default: () => ({
        totalHT: 0,
        tva: 0,
        totalTTC: 0
      })
    }
  },
  data () {
    return {
      lazyValue: this.value
    }
  },
  computed: {
    total: {
      get () {
        return this.lazyValue
      },
      set (val) {
        this.lazyValue = val
        this.$emit('input', val)
      }
    }
  },
  watch: {
    value (val) {
      this.lazyValue = val
    }
  }
}
</script>

<style scoped>
/* data-v-1af274cd */
.price-box {
  @apply flex;
  @apply items-end;
  @apply flex-col;
}

.price-box .line {
  max-width: 196px; /* @media min-width 1000px */
  @apply w-full;
  @apply flex;
  @apply justify-between;
  @apply py-1;
  @apply px-4;
  @apply font-medium;
}

.price-box .line.dark {
  @apply mt-1;
  @apply py-2;
  @apply px-4;
  @apply bg-blue-dark;
  @apply text-white;
  border-radius: 5px;
}

.price-box .line:not(.dark) .price {
  @apply text-blue-light;
}
</style>
