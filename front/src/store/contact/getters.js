export default {
  resources(state) {
    return state.resources;
  },

  table(state) {
    return state.table;
  },

  pagination(state) {
    return state.pagination;
  },

  contacts(state) {
    return state.contacts;
  },
  agent(state) {
    return state.form.contact;
  },
  loading(state) {
    return state.form.loading;
  },
  saving(state) {
    return state.form.saving;
  },
  errors(state) {
    return state.form.errors;
  },
  readyToUpdate(state) {
    return state.form.contactId != null;
  },
  filters(state) {
    return state.filters;
  },
};
