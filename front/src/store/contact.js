
export default {
  namespaced: true,
  state: {
    name: 'Alexandre',

    table: {
      headers: [
        {
          text: 'Name',
          width: '20%'
        },
        {
          text: 'Email',
          width: '20%'
        },
        {
          text: 'Created At',
          width: '20%'
        },
        {
          text: 'Updated At',
          width: '20%'
        },
        {
          text: 'Actions',
          width: '20%'
        },
      ]
    }
  },
  getters: {
    table(state) {
      return state.table
    }
  },
  mutations: {
  },
  actions: {
    displayAlert({state}) {
      alert("Helloo " + state.name)
    }
  }
}
