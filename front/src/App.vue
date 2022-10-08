<template>
  <v-app>
    <AppBar />
    <SideBar />


    <v-main app>
      <v-container fluid>
          <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "@/components/SideBar";
import AppBar from "@/components/AppBar";

export default {
  name: 'App',

  components: {
    SideBar,
    AppBar
  },

};
</script>
