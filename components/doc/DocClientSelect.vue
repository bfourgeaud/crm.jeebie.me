<template>
  <div class="client-select">
    <AppCard class="card-style">
      <AppDataList :items="clients">
        <AppBtn slot="header" class="flex justify-between items-center mb-2" to="/clients/edit">
          <AccountCircleIcon class="SvgIcon--24 ml-2 text-blue-100" />
          Nouvau client
        </AppBtn>
        <AppBtn slot-scope="row" class="flex justify-between items-center mb-2 text-blue-light" outlined @click="$emit('select', row.item)">
          <AccountCircleIcon class="SvgIcon--24 ml-2" />
          {{ row.item.isCompany ? row.item.company.name : `${row.item.contact.firstname} ${row.item.contact.lastname}` }}
        </AppBtn>
      </AppDataList>
    </AppCard>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DocClientSelect',
  computed: {
    ...mapState('clients', ['clients'])
  }
}
</script>

<style scoped>
.client-select {
  overflow-x: hidden;
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  z-index: 99;
}

.client-select-item {
  @apply pb-2;
}

.client-select-item .card-container {
  @apply flex;
  @apply justify-between;
  @apply p-2;
  @apply items-center;
  @apply text-blue-light;
  @apply cursor-pointer;
}

.client-select .card-style {
  overflow-y: scroll;
  border: 1px solid #1685ea;
  height: fit-content;
  max-height: 15rem;
  padding: 1rem;
  margin: 2rem 0;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
</style>
