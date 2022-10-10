export default {
  appendSnackbar(state, snackbar) {
    Object.assign(snackbar, {
      id: new Date().getTime() + Math.floor(Math.random() * 10000).toString(),
      idx: state.snackbars.length + 1,
      isVisible: true,
      hasAction: snackbar.hasAction || true,
      timeout: snackbar.timeout || 3000,
      icon: snackbar.icon,
      type: snackbar.type || "info",
    });

    state.snackbars.push(snackbar);
  },

  removeSnackbar(state, idx) {
    state.snackbars = state.snackbars.filter((snackbar) => snackbar.idx != idx);
  },
};
