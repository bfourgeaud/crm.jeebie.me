<template>
  <div class="text-lg font-normal">
    <label v-if="label" class="block text-gray-700 font-medium mb-2" for="email">
      {{ label }}
    </label>
    <input
      v-model="input"
      class="py-4 px-3 appearance-none border border-grey-200 rounded w-full text-gray-700 leading-tight focus:outline-none relative"
      :placeholder="placeholder"
      :type="type"
      :name="name"
      autocomplete="off"
      :readonly="!service"
      @keydown="showSearchResults = true"
      @blur="showSearchResults = false"
    >
    <ul v-if="showSearchResults" class="search-results">
      <li v-for="(result, i) in searchResults" :key="i" class="item" @click="input = result">
        {{ result }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppInputAddr',
  props: {
    value: { type: [String, Array, Boolean], default: null },
    label: { type: String, default: null },
    type: { type: String, default: 'text' },
    name: { type: String, default: '' },
    placeholder: { type: String, default: '' }
  },
  data () {
    return {
      lazyValue: this.value,
      searchResults: [],
      showSearchResults: false,
      service: null
    }
  },
  head () {
    return {
      script: [{
        src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDTivtdgz-KjijymcSS3tvl7IM9I2wz5Nk&libraries=places',
        defer: true,
        callback: () => {
          this.service = new window.google.maps.places.AutocompleteService()
        }
      }]
    }
  },
  computed: {
    input: {
      get () {
        return this.lazyValue
      },
      set (val) {
        this.lazyValue = val
        this.service.getPlacePredictions({
          input: val,
          types: ['address']
        }, this.displaySuggestions)
        this.$emit('input', val)
      }
    }
  },
  watch: {
    value (newValue) {
      this.lazyValue = newValue
    }
  },
  methods: {
    MapsInit () {
      this.service = new window.google.maps.places.AutocompleteService()
    },
    displaySuggestions (predictions, status) {
      if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
        this.searchResults = []
        return
      }
      this.searchResults = predictions.map(prediction => prediction.description)
    }
  }
}
</script>

<style scoped>
.search-results {
  @apply bg-white;
  @apply text-blue-light;
  @apply fixed;
  @apply text-left;
  @apply rounded;
  @apply mt-1;
  @apply overflow-hidden;
  box-shadow: 0 1px 10px rgb(0 0 0 / 20%), 0 2px 4px 0 rgb(0 0 0 / 10%);
}

.search-results .item {
  @apply mt-px;
  @apply cursor-pointer;
  @apply p-2;
  @apply flex;
}

.search-results .item:hover {
  @apply bg-blue-light;
  @apply text-white;
}
</style>
