export const SET_MODEL = "SET_MODEL";
export const SET_CURRENT_MODEL = "SET_CURRENT_MODEL";
export const SET_MODEL_ID = "SET_MODEL_ID";
export const LOADING_MODEL = "LOADING_MODEL";
export const SET_PAGINATION = "SET_PAGINATION";
export const SET_TABLE_LOADING = "SET_TABLE_LOADING";
export const SET_LIST_ITEMS = "SET_LIST_ITEMS";
export const SET_CURRENT_ERRORS = "SET_CURRENT_ERRORS";
export const SAVING_MODEL = "SAVING_FORM";

export default {
  [SET_LIST_ITEMS](state, contacts) {
    state.contacts = contacts;
  },

  [SET_PAGINATION](state, pagination) {
    state.pagination = pagination;
  },

  [SET_TABLE_LOADING](state, loading = false) {
    state.table.loading = loading;
  },

  [LOADING_MODEL](state, value = true) {
    state.form.loading = value;
  },

  [SAVING_MODEL](state, value = true) {
    state.form.saving = value;
  },

  [SET_MODEL](state, payload) {
    state.form.contact = payload;
  },

  [SET_CURRENT_MODEL](state, id) {
    state.form.contactId = id;
  },

  [SET_MODEL_ID](state, id) {
    state.form.contactId = id;
  },

  [SET_CURRENT_ERRORS](state, errors) {
    state.form.errors = errors;
  },
};
