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
        <v-list-item>
          <v-list-item-title>TEste</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  name: "AppBar",
  methods: {
    ...mapMutations({
      toggleDrawer: "template/TOGGLE_DRAWER"
    }),

    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>