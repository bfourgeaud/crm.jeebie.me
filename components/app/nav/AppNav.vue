<template>
  <!-- Menu Items -->
  <div class="app-nav grid relative md:flex md:flex-col text-center uppercase">
    <app-nav-link to="/" icon="home" icon-color="text-warning">
      Accueil
    </app-nav-link>
    <app-nav-link to="/clients" icon="contacts" icon-color="text-blue-light">
      Clients
    </app-nav-link>
    <AppNavOmni />
    <app-nav-link to="/gestion" icon="chart" icon-color="text-success">
      Gestion
    </app-nav-link>
    <app-nav-link to="/demarche" icon="account-balance" icon-color="text-error">
      Démarches
    </app-nav-link>
  </div>
</template>

<script>
export default {
  name: 'AppNav'
}
</script>

<style scoped>
.app-nav {
  grid-template-columns: 1fr 1fr 32px 1fr 1fr;
}
</style>
