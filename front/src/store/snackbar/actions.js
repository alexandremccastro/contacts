export default {
  showSnackbar({ commit }, options) {
    commit("appendSnackbar", options);
  },

  removeSnackbar({ commit }, idx) {
    commit("removeSnackbar", idx);
  },
};
