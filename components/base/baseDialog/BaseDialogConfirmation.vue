<template>
  <BaseDialog ref="popup">
    <BaseCard class="bg-white" rounded :elevation="6">
      <BaseCardTitle v-if="title">
        {{ title }}
      </BaseCardTitle>
      <BaseCardSubtitle v-if="subtitle">
        {{ subtitle }}
      </BaseCardSubtitle>
      <BaseCardText v-if="message">
        {{ message }}
      </BaseCardText>
      <BaseCardActions>
        <BaseSpacer />
        <BaseBtn class="text-success" text x-bold @click="_confirm">
          {{ okText }}
        </BaseBtn>
        <BaseBtn class="text-error" text x-bold @click="_cancel">
          {{ cancelText }}
        </BaseBtn>
      </BaseCardActions>
    </BaseCard>
  </BaseDialog>
</template>

<script>
export default {
  name: 'ConfirmPopup',
  data () {
    return {
      title: undefined,
      subtitle: undefined,
      message: undefined,

      okText: undefined,
      cancelText: 'Cancel',

      resolvePromise: undefined,
      rejectPromise: undefined
    }
  },
  methods: {
    show (opts = {}) {
      this.title = opts.title
      this.subtitle = opts.subtitle
      this.message = opts.message
      this.okText = opts.okText
      if (opts.cancelText) {
        this.cancelText = opts.cancelText
      }
      this.$refs.popup.open()
      return new Promise((resolve, reject) => {
        this.resolvePromise = resolve
        this.rejectPromise = reject
      })
    },
    _confirm () {
      this.$refs.popup.close()
      this.resolvePromise(true)
    },
    _cancel () {
      this.$refs.popup.close()
      this.resolvePromise(false)
    }
  }
}
</script>
