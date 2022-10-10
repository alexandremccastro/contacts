import session from "@/core/utils/session";

export default {
  assignUser(state, user) {
    session.set("user", user);
    state.user = user;
  },
  assignErrors(state, errors) {
    Object.assign(state.errors, errors);
  },
  cleanUser(state) {
    state.user = null
  }
};
