import authProvider from "@/core/api/providers/auth";
import session from "@/core/utils/session";

export default {
  async login({ commit }, credentials) {
    const data = await authProvider.login(credentials);

    if (!data) throw new Error("Invalid credentials.");

    const { name, token, username } = data;

    commit("assignUser", { name, token, username });
  },

  async register({ commit }, user) {
    await authProvider.register(user);
    return commit
  },

  async logout({ commit }) {
    try {
      await authProvider.logout();
      commit('cleanUser');
    } finally {
      session.destroy();
    }
  },
};
