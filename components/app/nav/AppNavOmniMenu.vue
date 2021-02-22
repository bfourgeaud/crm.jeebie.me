<template>
  <BaseCard class="absolute flex flex-col px-2 py-4 -rotate-180 bg-white text-blue-dark" :elevation="2" rounded>
    <AppNavOmniMenuItem icon="contacts" icon-bg="bg-blue-light" to="/clients/edit">
      Ajouter un client
    </AppNavOmniMenuItem>
    <AppNavOmniMenuItem class="mt-2" icon="quote" icon-bg="bg-warning" :to="{ name: 'quotes-new' }">
      Créer un Devis
    </AppNavOmniMenuItem>
    <AppNavOmniMenuItem class="mt-2" icon="invoice" icon-bg="bg-success" :to="{ name: 'invoices-new' }">
      Créer une Facture
    </AppNavOmniMenuItem>
    <AppNavOmniMenuItem class="mt-2" icon="bill" icon-bg="bg-error" to="">
      Créer une Dépense
    </AppNavOmniMenuItem>
  </BaseCard>
</template>

<script>
export default {
  name: 'OmniMenu'
}
</script>
