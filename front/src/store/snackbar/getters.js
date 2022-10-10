export default {
  visibleSnackbars(state) {
    return state.snackbars.filter((snackbar) => snackbar.isVisible);
  },
};
