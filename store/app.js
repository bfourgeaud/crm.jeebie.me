export const state = () => ({
  omniOpened: false
})

export const mutations = {
  TOGGLE_OMNI: (state) => {
    state.omniOpened = !state.omniOpened
  },
  SET_OMNI: (state) => {
    state.omniOpened = true
  },
  RESET_OMNI: (state) => {
    state.omniOpened = false
  }
}

export const actions = {}
