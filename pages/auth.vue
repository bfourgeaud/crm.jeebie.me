<template>
  <div class="auth">
    <div class="left-panel">
      <div class="flex flex-col text-center h-full">
        <div class="my-auto">
          <div class="mt-2 lg:mt-8 ml-4">
            JEEBIE CRM
          </div>
          <div class="mt-2 lg:mt-8 ml-4">
            Toute votre Auto-Entreprise sur une seule plateforme
          </div>
        </div>
        <div class="mt-auto pb-2 lg:pb-8 flex flex-col">
          <div>{{ alreadyAccount ? 'Pas encore inscrit ?' : 'Déja un compte ?' }}</div>
          <AppBtn class="mx-8 mt-4" @click="alreadyAccount = !alreadyAccount">
            {{ alreadyAccount ? 'S\'inscrire' : 'Se Connecter' }}
          </AppBtn>
        </div>
      </div>
    </div>
    <div class="right-panel my-auto mx-auto text-center">
      <AppServiceTitle :title="`Jeebie CRM - ${alreadyAccount ? 'Login' : 'Register'}`" />
      <AuthRegister v-if="!alreadyAccount" />
      <AuthLogin v-else />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Auth',
  layout: 'disconnected',
  data () {
    return {
      alreadyAccount: true
    }
  }
}
</script>

<style scoped>
.auth {
  display: grid;
  grid-template-rows: 1fr 200px;
}
.left-panel {
  @apply bg-blue-grey;
  @apply text-white;
  order: 1
}

@screen lg {
  .auth {
    display: grid;
    grid-template-columns: 424px 1fr;
    grid-template-rows: 1fr;
  }

  .left-panel {
    order: 0
  }
}
</style>
