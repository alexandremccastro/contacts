export default {
  toggleDialog(state) {
    state.dialog.show = !state.dialog.show;
  },

  assignDialog(state, options) {
    Object.assign(state.dialog, options);
  },

  setLoadingConfirmation(state, loadingConfirmation) {
    Object.assign(state, { loadingConfirmation });
  },
};
