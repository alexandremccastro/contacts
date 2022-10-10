const state = () => ({
  loadingConfirmation: false,

  dialog: {
    type: null, // confirmation, alert
    show: false,
    color: null, // primary, warning, danger
    text: null,
    width: 400,
    callback: null,
    buttons: {
      cancel: {
        text: "Cancel",
      },
      confirm: {
        text: "Confirm",
      },
    },
  },
});

export default state;
