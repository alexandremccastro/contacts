import contactProvider from "@/core/api/providers/contact";

import {
  SET_CURRENT_ERRORS,
  SET_TABLE_LOADING,
  SET_CURRENT_MODEL,
  SET_LIST_ITEMS,
  SET_PAGINATION,
  LOADING_MODEL,
  SAVING_MODEL,
  SET_MODEL,
} from "../contact/mutations";

export default {
  async filter({ commit, state }) {
    commit(SET_TABLE_LOADING, true);

    const { page = 1, itemsPerPage = 20, trashed = false } = state.pagination;

    const data = await contactProvider.filter({
      page,
      itemsPerPage,
      trashed
    });

    if (data) {
      commit(SET_LIST_ITEMS, data.data);
      commit(SET_PAGINATION, data.meta);
      commit(SET_TABLE_LOADING, false);
    }
  },

  async delete({ commit }, contact) {
    commit(SET_TABLE_LOADING, true);

    const res = await contactProvider.delete(contact);

    if (res) {
      commit(SET_TABLE_LOADING, false);
    }
  },

  async undelete({ commit }, contact) {
    commit(SET_TABLE_LOADING, true);

    const res = await contactProvider.undelete(contact);

    if (res) {
      commit(SET_TABLE_LOADING, false);
    }
  },

  async find({ commit }, id) {
    commit(LOADING_MODEL, true);
    const res = await contactProvider.find(id);

    if (res) {
      const data = res;
      commit(SET_MODEL, data);
      commit(LOADING_MODEL, false);
      return data;
    }
  },

  async update({ state, commit, dispatch }) {
    commit(SAVING_MODEL, true);

    try {
      const res = await contactProvider.update(
        state.form.contactId,
        state.form.contact
      );
      dispatch(
        "snackbar/showSnackbar",
        {
          type: "success",
          message: "Contact updated.",
        },
        { root: true }
      );

      dispatch("filter");

      return res;
    } catch (error) {
      commit(SET_CURRENT_ERRORS, error.data);
      throw error;
    } finally {
      commit(SAVING_MODEL, false);
    }
  },

  async create({ state, dispatch, commit }) {
    commit(SAVING_MODEL, true);
    try {
      const res = await contactProvider.create(state.form.contact);
      dispatch(
        "snackbar/showSnackbar",
        {
          type: "success",
          message: "Contact updated.",
        },
        { root: true }
      );

      dispatch("filter");

      return res;
    } catch (error) {
      commit(SET_CURRENT_ERRORS, error.data);
      throw error;
    } finally {
      commit(SAVING_MODEL, false);
    }
  },

  setCurrentModelId({ commit }, modelId) {
    commit(SET_CURRENT_MODEL, modelId);
  },

  setCurrentModel({ commit }, model) {
    commit(SET_MODEL, model);
  },

  setCurrentErrors({ commit }, errors) {
    commit(SET_CURRENT_ERRORS, errors);
  },
};
