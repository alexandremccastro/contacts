import Vue from "vue";
import Vuex from "vuex";
import { createLogger } from "vuex";

// Application modules
import dialog from "./dialog";
import snackbar from "./snackbar";
import contact from "./contact";
import template from "./template";
import auth from "./auth";

Vue.use(Vuex);

const debug = process.env.VUE_APP_ENV !== "production";

export default new Vuex.Store({
  modules: {
    dialog,
    snackbar,
    auth,
    contact,
    template,
  },

  strict: debug,
  plugins: debug ? [createLogger({})] : [],
});
