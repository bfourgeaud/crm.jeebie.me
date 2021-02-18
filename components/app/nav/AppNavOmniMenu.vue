<template>
  <BaseCard class="absolute flex flex-col px-2 py-4 -rotate-180 bg-white text-blue-dark" :elevation="2" rounded>
    <AppNavOmniMenuItem icon="contacts" icon-bg="bg-blue-light" to="/clients/edit">Ajouter un client</AppNavOmniMenuItem>
    <AppNavOmniMenuItem class="mt-2" icon="contacts" icon-bg="bg-warning" to="">Créer un Devis</AppNavOmniMenuItem>
    <AppNavOmniMenuItem class="mt-2" icon="contacts" icon-bg="bg-success" to="">Créer une Facture</AppNavOmniMenuItem>
    <AppNavOmniMenuItem class="mt-2" icon="contacts" icon-bg="bg-error" to="">Créer une Dépense</AppNavOmniMenuItem>
  </BaseCard>
</template>

<script>
export default {
  name: 'OmniMenu'
}
</script>
