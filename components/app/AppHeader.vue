<template>
  <div class="flex justify-between">
    <div class="logo flex items-center h-full">
      <button class="px-1">
        <span class="ml-6">JEEBIE CRM</span>
      </button>
    </div>
    <div v-if="isLoggedIn" class="account" @click="accountOpen = !accountOpen">
      <div class="account-container">
        <div class="account-greet">
          <span class="uppercase">BENJAMIN</span>
        </div>
        <div class="icon-toggle" :class="accountOpen ? 'open' : ''">
          <chevron-icon down />
        </div>
      </div>
      <div class="account-dropdown" :class="accountOpen ? 'open' : ''">
        <div class="account-dropdown-btn">
          <account-circle-icon class="mr-2 SvgIcon--32" />
          Mon Compte
        </div>
        <div class="account-dropdown-line" />
        <div class="account-dropdown-btn" @click="logout">
          <power-icon class="mr-2 SvgIcon--32" />
          Déconnexion
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'AppHeader',
  data () {
    return {
      accountOpen: false
    }
  },
  computed: {
    ...mapState('auth', ['authUser']),
    ...mapGetters('auth', ['isLoggedIn'])
  },
  methods: {
    async logout () {
      try {
        await this.$fire.auth.signOut()
        this.$router.push({ name: 'auth' })
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>

<style scoped>
.account {
  @apply relative mr-8 px-6 h-full bg-blue-DEFAULT;
}
.account-container {
  @apply flex items-center cursor-pointer h-full pl-4;
}
.account-greet {
  @apply mx-4;
}

.account-dropdown {
  @apply absolute right-0 w-full transition duration-500 ease-in opacity-0 pointer-events-none bg-blue-light;
}

.account-dropdown.open {
  @apply opacity-100 pointer-events-auto;
}

.account-dropdown-btn {
  @apply flex items-center cursor-pointer uppercase my-6 ml-5;
}

.account-dropdown-line {
  @apply mx-4 h-px bg-blue-dark;
}

.icon-toggle {
  @apply transition duration-500 ease-in-out transform;
}

.icon-toggle.open {
  @apply rotate-180;
}
</style>
