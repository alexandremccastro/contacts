<template>
  <v-app>
    <router-view />

    <DisplaySnackbar />
    <DisplayDialog />
  </v-app>
</template>

<script>
import DisplayDialog from "@/components/DisplayDialog";
import DisplaySnackbar from "@/components/DisplaySnackbar";

export default {
  name: 'App',
  components: {
    DisplayDialog,
    DisplaySnackbar
  }
};
</script>
