<template>
  <div class="container">
    <BaseInput
      v-model="inputVal"
      v-click-outside="hideSuggest"
      :autocomplete-items="['Item 1', 'Item 2', 'Item 3']"
      :autocomplete-show="opened"
      @update-autocomplete="opened = $event"
      @autocomplete-selected="fillAC"
    >
      <template slot-scope="item" name="autocomplete">
        {{ item }}
      </template>
    </BaseInput>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  name: 'Examples',
  directives: {
    ClickOutside
  },
  data () {
    return {
      inputVal: '',
      opened: false
    }
  },
  methods: {
    hideSuggest () {
      this.opened = false
    },
    fillAC (e) {
      this.inputVal = e
      this.hideSuggest()
    }
  }
}
</script>
