import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        secondary: "#b0bec5",
        danger: "#f44336",
        warning: "#ff9800",
        anchor: "#8c9eff",
        appbar: "#34495e",
        sidebar: "#34495e",
      },
      dark: {
        secondary: "#b0bec5",
        danger: "#f44336",
        warning: "#ff9800",
        anchor: "#8c9eff",
      },
    },
  },
});
