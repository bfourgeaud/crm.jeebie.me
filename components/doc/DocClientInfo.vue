<template>
  <div class="clients-box">
    <div v-if="!client">
      <div v-if="!choose" class="client-box-add">
        <DocAddBox class="my-8" center style="height: 128px;" @click="choose = true">
          Ajouter un client
        </DocAddBox>
      </div>

      <div v-else class="client-box-edit">
        <DocClientSelect @select="select" />
      </div>
    </div>
    <div v-else class="clients-box-print">
      <div class="clients-box-print-infos">
        <div>
          <b>{{ client.isCompany ? client.company.name : `${client.contact.firstname} ${client.contact.lastname}` }}</b>
        </div>
        <div v-if="client.isCompany">
          <b>{{ `${client.contact.firstname} ${client.contact.lastname}` }}</b>
        </div>
        <div>{{ formatAddr(client).street }}</div>
        <div>{{ formatAddr(client).line2 }}</div>
        <div>{{ client.contact.email }}</div>
        <div />
      </div>
      <div class="clients-box-print-edit">
        <div class="edit-toggle" @click="edit">
          <EditIcon class="cursor-pointer ml-2 text-blue-light SvgIcon--32" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocClientInfo',
  props: {
    value: { type: Object, default: null }
  },
  data () {
    return {
      lazyValue: this.value,
      choose: false
    }
  },
  computed: {
    client: {
      get () {
        return this.lazyValue
      },
      set (val) {
        this.lazyValue = val
        this.$emit('input', val)
      }
    }
  },
  watch: {
    value (val) {
      this.lazyValue = val
    }
  },
  methods: {
    select (e) {
      this.client = e
      this.choose = false
    },
    edit () {
      this.choose = true
      this.client = null
    },
    formatAddr (client) {
      const addrField = client.isCompany ? client.company.addr : client.contact.addr
      const exact = addrField.exact ? addrField.exact.properties : null
      return {
        street: exact ? `${exact.housenumber || ''} ${exact.street || exact.name || ''}` : addrField.text,
        postcode: exact ? exact.postcode || '' : '',
        city: exact ? exact.city || exact.state || '' : '',
        country: exact ? exact.country || '' : '',
        line2: exact ? `${exact.postcode || ''} ${exact.city || exact.state || ''}, ${exact.country || ''}` : ''
      }
    }
  }
}
</script>

<style scoped>
/* data-v-1fbc3496 */
.clients-box-print {
  @apply flex;
  @apply items-center;
  @apply pt-8;
  @apply text-right;
  height: 96px;
}

/* data-v-1fbc3496 */
.clients-box-print-infos {
  @apply w-full;
}

/* data-v-1fbc3496 */
.clients-box-print-edit {
  @apply ml-4;
}

.client-box-add {
  height: 128px;
}

.client-box-edit {
  position: relative;
  height: 128px;
}
</style>
