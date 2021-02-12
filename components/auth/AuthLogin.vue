<template>
  <div>
    <form onsubmit="return false;">
      <div class="mb-4">
        <input
          v-model="formData.email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Email"
          type="email"
          autocomplete="username"
        >
      </div>
      <div class="mb-4">
        <input
          v-model="formData.password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Password"
          type="password"
          autocomplete="current-password"
        >
      </div>
      <AppBtn @click="signInUser">
        Sign In
      </AppBtn>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AuthLogin',
  data () {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async signInUser () {
      try {
        await this.$fire.auth.signInWithEmailAndPassword(
          this.formData.email,
          this.formData.password
        )
        this.$router.push({ name: 'index' })
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>
