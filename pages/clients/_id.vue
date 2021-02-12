<template>
  <div v-if="client">
    CLIENT : {{ client.id }}
  </div>
  <div v-else>
    No client found
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ClientPage',
  data () {
    return {
      client: null
    }
  },
  computed: { ...mapGetters('clients', ['getByID']) },
  mounted () {
    this.client = this.getByID(this.$route.params.id) // Attention lorsque clients n'est pas fetched (Peut etre passer le client directement en prop)
  }
}
</script>
