<template>
  <div>
    <p v-if="authUser">
      You are logged in with {{ authUser.email }}.
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState('auth', ['authUser']),
    ...mapGetters('auth', ['isLoggedIn'])
  }
}
</script>
