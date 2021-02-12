export const state = () => ({
  clients: []
})

export const mutations = {
  RESET_STORE: (state) => {
    state.clients = []
  },

  SET_CLIENTS: (state, clients) => {
    state.clients = clients
  },

  ADD_CLIENT: (state, client) => {
    state.clients.push(client)
  }
}

export const getters = {
  getByID: state => (id) => { return state.clients.find(client => client.id === id) }
}

export const actions = {
  async fetchClients ({ commit }) {
    const collection = this.app.$fire.firestore.collection('clients')
    try {
      const snapshot = await collection.get()
      const clients = []
      snapshot.forEach((doc) => {
        clients.push({ id: doc.id, ...doc.data() })
      })
      commit('SET_CLIENTS', clients)
    } catch (e) {
      alert(e)
    }
  },

  addClient ({ state, commit }, client) {
    const collection = this.app.$fire.firestore.collection('clients')
    collection.add(client)
      .then((docRef) => {
        commit('ADD_CLIENT', client)
      })
      .catch((error) => {
        alert(error)
      })
  }
}
