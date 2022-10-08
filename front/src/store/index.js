import Vue from "vue"
import Vuex from "vuex"
import { createLogger } from 'vuex'

// Application modules
import contact from "./contact"
import template from "./template"

Vue.use(Vuex)

const debug = process.env.VUE_APP_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    contact,
    template
  },

  strict: debug,
  plugins:  debug ? [createLogger({})] : []
})

