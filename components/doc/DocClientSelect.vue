<template>
  <div class="client-select">
    <BaseCard class="flex flex-col my-4 p-2 mx-1 overflow-y-auto bg-white" :elevation="3" rounded>
      <BaseBtn right x-bold x-small class="text-error" @click="$emit('close')">
        X
      </BaseBtn>
      <BaseBtn :to="{ name: 'clients-edit' }" left class="flex justify-start items-center whitespace-no-wrap bg-white text-blue-light hover:bg-blue-light hover:text-white shadow-3">
        <BaseIcon icon="account-circle" :size="24" class="mr-2" />
        <p class="uppercase">
          Nouvau client
        </p>
      </BaseBtn>

      <BaseBtn v-for="client in clients" :key="client.id" left class="flex justify-start items-center whitespace-no-wrap bg-white text-blue-light hover:bg-blue-light hover:text-white shadow-3 mt-1" @click="$emit('select', client)">
        <BaseIcon icon="account-circle" :size="24" class="mr-2" />
        <p class="uppercase">
          {{ client.isCompany ? client.company.name : `${client.contact.firstname} ${client.contact.lastname}` }}
        </p>
      </BaseBtn>
    </BaseCard>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'DocClientSelect',
  computed: {
    ...mapState('clients', ['clients'])
  },
  created () {
    this.fetchClients()
  },
  methods: { ...mapActions('clients', ['fetchClients']) }
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
  flex-direction: column;
}
</style>
