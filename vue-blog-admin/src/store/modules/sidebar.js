import router from '@/router'

const state = {
  sidebar: []
}

const mutations = {
  SET_SIDEBAR: (state, sidebar) => {
    state.sidebar = sidebar
  }
}

const actions = {
  createSidebar: ({ commit }, sidebar) => {
    commit('SET_SIDEBAR', sidebar)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}