<template>
  <div>
    <p v-if="authUser">You are logged in with {{ authUser.email }}.</p>
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

<style>
.SvgIcon--32 {
  height: 32px;
}

.SvgIcon--40 {
  height: 40px;
}
</style>
