<template>
  <v-container class="d-flex vh-100 justify-center align-center" fluid>
    <router-view />
  </v-container>
</template>
<script>
export default {
  name: "CentralizedView",
};
</script>
<style scoped>
.vh-100 {
  height: 100vh;
}
</style>
