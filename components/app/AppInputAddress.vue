<template>
  <BaseInput
    v-model="searchTxt"
    v-click-outside="() => showSuggest(false)"
    :name="name"
    :label="label"
    :type="type"
    :placeholder="placeholder"
    :autocomplete-items="searchResults"
    :autocomplete-show="suggestOpened"
    @update-autocomplete="showSuggest($event)"
    @autocomplete-selected="setRes"
  >
    <template slot-scope="row" name="autocomplete">
      <BaseIcon icon="location" :size="24" class="mx-4 text-opacity-light group-hover:text-opacity-dark" />
      <b class="mr-2">
        {{ formatName (row.item) }}
      </b>
      <p class="font-medium text-opacity-dark">
        {{ `${row.item.properties.city}, ${row.item.properties.state}, ${row.item.properties.country}` }}
      </p>
    </template>
  </BaseInput>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  name: 'AppInputAddr',
  directives: {
    ClickOutside
  },
  props: {
    value: {
      type: [Object],
      default: () => ({
        text: '',
        exact: null
      })
    },
    label: { type: String, default: null },
    type: { type: String, default: 'text' },
    name: { type: String, default: '' },
    placeholder: { type: String, default: '' }
  },
  data () {
    return {
      lazyValue: this.value,
      lazySuggest: '',
      searchResults: [],
      suggestOpened: false
    }
  },
  computed: {
    input: {
      get () {
        return this.lazyValue
      },
      set (val) {
        this.lazyValue = val
        this.$emit('input', val)
      }
    },
    searchTxt: {
      get () {
        return this.lazyValue.text
      },
      set (val) {
        this.lazyValue = val
        this.$maps.searchAddr(val, { limit: 5, lang: 'fr' }, (res) => {
          this.searchResults = res.features
        })
        this.$emit('input', { text: val, exact: null })
      }
    }
  },
  watch: {
    value (val) {
      this.lazyValue = val
    }
  },
  methods: {
    showSuggest (val) {
      this.suggestOpened = val
    },
    setRes (e) {
      this.showSuggest(false)
      this.input = {
        text: this.formatAddr(e.properties),
        exact: e
      }
    },
    formatAddr (props) {
      switch (props.type) {
        case 'street' :
          return `${props.name}, ${props.postcode} ${props.city}, ${props.country}`
        case 'house' :
          return `${props.housenumber ? props.housenumber : ''} ${props.street}, ${props.postcode} ${props.city}, ${props.country}`
        case 'locality' :
          return `${props.name}, ${props.state}, ${props.country}`
        case 'city' :
          return `${props.name}, ${props.state}, ${props.country}`
        case 'country' :
          return `${props.name}, ${props.country}`
      }
      return `${props.name}`
    },
    formatName (item) {
      const props = item.properties
      return props.name ? props.name : `${props.housenumber ? props.housenumber : ''} ${props.street}`
    }
  }
}
</script>
