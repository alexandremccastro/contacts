import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueEllipsis from "@/plugins/ellipsis";
import router from "./router";
import store from "./store";
import "./filters";

Vue.config.productionTip = false;

Vue.use(VueEllipsis);

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
