
const TOGGLE_DRAWER = "TOGGLE_DRAWER"

export default {
  namespaced: true,
  state: {
    drawer: true,
    dark: false,

    sidebar: {
      items: [
        {
          type: "menu",
          title: "Contacts",
          icon: 'mdi-account-outline',
          route: { name: 'Contacts' }
        },
        {
          type: "menu",
          title: "Recent",
          icon: 'mdi-history',
          route: { name: 'Recent' }
        },
        {
          type: "divider",
        },
        {
          type: "group",
          title: "Labels",
          active: true,
          items:  [
            {
              type: "menu",
              title: "Create Label",
              icon: 'mdi-plus',
              action: () => {
                alert('ok')
              }
            },
          ]
        },
        {
          type: 'divider'
        },
        {
          type: "menu",
          title: "Trashed",
          icon: 'mdi-trash-can-outline',
          route: { name: 'Trashed' }
        },
      ]
    }
  },
  getters: {
    drawer(state) {
      return state.drawer
    }
  },
  mutations: {
    [TOGGLE_DRAWER](state) {
      state.drawer = !state.drawer
    }
  },
  actions: {
    toggleDrawer({ state }) {
      alert("Helloo " + state.name)
    }
  }
}
