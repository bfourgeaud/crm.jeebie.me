<template>
  <div class="text-lg font-normal relative">
    <label v-if="label" class="block text-gray-700 font-medium mb-2" for="email">
      {{ label }}
    </label>
    <input
      v-model="input"
      class="py-4 px-3 appearance-none border border-grey-200 rounded w-full text-gray-700 leading-tight focus:outline-none"
      :placeholder="placeholder"
      :type="type"
      :name="name"
      autocomplete="current-password"
      @input="openAutoComplete"
      @blur="$emit('blur')"
    >
    <div v-show="_autocompleteShow" class="absolute w-full px-2 z-10">
      <BaseCard :elevation="3" class="mt-2 py-2 text-sm bg-white" rounded>
        <div
          v-for="(item, idx) in autocompleteItems"
          :key="idx"
          class="group py-2 cursor-pointer flex items-center hover:bg-opacity-light whitespace-no-wrap overflow-x-hidden"
          @click="selectAutocomplete(item)"
        >
          <slot :item="item">
            {{ item }}
          </slot>
        </div>
      </BaseCard>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    value: { type: [String, Array, Boolean], default: null },
    label: { type: String, default: null },
    type: { type: String, default: 'text' },
    name: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    autocompleteItems: { type: Array, default: () => ([]) },
    autocompleteShow: { type: Boolean, default: false }
  },
  data () {
    return {
      lazyValue: this.value,
      lazyAutocompleteShow: this.autocompleteShow
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
    _autocompleteShow: {
      get () {
        return this.lazyAutocompleteShow
      },
      set (val) {
        this.lazyAutocompleteShow = val
        this.$emit('update-autocomplete', val)
      }
    }
  },
  watch: {
    value (val) {
      this.lazyValue = val
    },
    autocompleteShow (val) {
      this.lazyAutocompleteShow = val
    }
  },
  methods: {
    fillWithAutoComplete (item) {
      this.input = item
      this._autocompleteShow = false
    },
    openAutoComplete () {
      if (this.autocompleteItems && this.autocompleteItems.length > 0) {
        this._autocompleteShow = true
      }
    },
    selectAutocomplete (item) {
      this.$emit('autocomplete-selected', item)
      this._autocompleteShow = false
    }
  }
}
</script>
