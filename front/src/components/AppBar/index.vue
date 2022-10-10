<template>
  <v-app-bar color="primary" dark clipped-left app>
    <v-btn icon @click="toggleDrawer" >
      <v-icon>mdi-menu</v-icon>
    </v-btn>

    <v-toolbar-title>Contacts</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon class="mr-2" @click="changeTheme">
      <v-icon>{{ this.$vuetify.theme.dark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent' }}</v-icon>
    </v-btn>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item @click="attemptLogout">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
import {mapActions, mapMutations} from "vuex";

export default {
  name: "AppBar",
  methods: {
    ...mapMutations({
      toggleDrawer: "template/TOGGLE_DRAWER"
    }),

    ...mapActions({
      logout: 'auth/logout',
      showSnackbar: "snackbar/showSnackbar",
    }),

    async attemptLogout() {
      try {
        await this.logout();

        this.showSnackbar({
          message: "Logged out success.",
        });
      } catch (error) {
        this.showSnackbar({
          message: "Unexpected error.",
        });
      } finally {
        this.$router.push({ name: "Login" });
      }
    },

    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>