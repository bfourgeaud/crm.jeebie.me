<template>
  <!-- Menu Items -->
  <div class="flex flex-col text-center uppercase">
    <app-nav-link to="/" icon="home" icon-color="text-yellow-DEFAULT">
      Tableau de Bord
    </app-nav-link>
    <app-nav-link to="/clients" icon="contacts" icon-color="text-blue-light">
      Mes Clients
    </app-nav-link>
    <app-nav-link to="/gestion" icon="chart" icon-color="text-green-DEFAULT">
      Ma Gestion
    </app-nav-link>
    <app-nav-link to="/demarche" icon="account-balance" icon-color="text-red-light">
      Mes Démarches
    </app-nav-link>

    <div class="omni" :class="omniOpen ? 'open' : ''" @click="omniOpen = !omniOpen">
      <div class="omnisocket">
        <plus-icon
          class="icon-toggle"
          :class="[omniOpen ? 'open' : '']"
          style="height: 30px;"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppNav',
  data () {
    return {
      omniOpen: false
    }
  }
}
</script>

<style scoped>
.omni {
  position: absolute;
  bottom: 64px;
  left: 78px;
}
.omnisocket {
  width: 64px;
  height: 64px;
  position: absolute;
  left: 0;
  right: 0;
  top: -32px;
  background-color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
  border-radius: 32px;
}

.icon-toggle {
  @apply transition;
  @apply duration-500;
  @apply ease-in-out;
  @apply transform;
  @apply text-blue-light;
}

.icon-toggle.open {
  @apply rotate-135;
  @apply text-red-light;
}
</style>
