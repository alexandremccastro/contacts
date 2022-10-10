export default {
  displayDialog({ commit }, options) {
    commit("assignDialog", options);
    commit("toggleDialog");
  },

  async acceptDialog({ commit, state }) {
    if (state.dialog.callback) {
      try {
        commit("setLoadingConfirmation", true);
        await state.dialog.callback();
      } finally {
        commit("setLoadingConfirmation", false);
        commit("toggleDialog");
      }
    }
  },
  cancelDialog({ commit }) {
    commit("toggleDialog");
  },
};
