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
  },

  REMOVE_CLIENT: (state, index) => {
    state.clients.slice(index, 1)
  }
}

export const getters = {
  getByID: state => (id) => { return state.clients.find(client => client.id === id) }
}

export const actions = {
  fetchClients ({ commit }) {
    this.app.$dbs.clients.index(
      (res) => { commit('SET_CLIENTS', res) },
      (err) => { alert(err) }
    )
  },

  addClient ({ state, commit }, client) {
    this.app.$dbs.clients.create(
      client,
      null,
      (err) => { alert(err) }
    )
  },

  removeClient ({ state, commit }, id) {
    const newList = state.clients.filter(c => c.id !== id)
    commit('SET_CLIENTS', newList)
  }
}
