<template>
  <div>
    <SideBar />
    <AppBar />

    <v-main app>
      <v-container class="px-5" style="min-height: 90vh" fluid>
        <v-slide-x-reverse-transition mode="out-in">
          <router-view />
        </v-slide-x-reverse-transition>
      </v-container>
    </v-main>
  </div>
</template>
<script>
import SideBar from "@/components/SideBar";
import AppBar from "@/components/AppBar";

export default {
  name: "DashboardView",

  components: {
    AppBar,
    SideBar,
  },
};
</script>
