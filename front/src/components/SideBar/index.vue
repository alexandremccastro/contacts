<template>
  <v-navigation-drawer  class="px-3 py-4" :value="drawer" clipped app>

    <v-list dense nav>
      <template v-for="item in sidebar.items">
        <template v-if="item.type == 'menu'">
          <v-list-item :to="item.route" :key="item.title">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </template>
        <template v-if="item.type == 'group'">
          <v-list-group :key="item.title" v-model="item.active" append-icon="" v-bind:prepend-icon="item.active ? 'mdi-chevron-down' : 'mdi-chevron-up' ">
            <template v-slot:activator>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </template>

            <template v-for="submenu in item.items">
              <v-list-item @click="submenu.action" :key="submenu.title">
                <v-list-item-icon>
                  <v-icon>{{ submenu.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ submenu.title }}</v-list-item-title>
              </v-list-item>
            </template>
          </v-list-group>
        </template>
        <template v-else-if="item.type == 'divider'">
          <v-divider :key="item.title" class="my-2"></v-divider>
        </template>
      </template>
    </v-list>

  </v-navigation-drawer>
</template>
<script>
import { mapMutations, mapState } from "vuex";

export default  {
  name: "SideBar",

  computed: {
    ...mapState('template',{
      drawer: state => state.drawer,
      dark: state => state.dark,
      sidebar: state => state.sidebar
    }),
  },

  methods: {
    ...mapMutations({
      toggleDrawer: "template/TOGGLE_DRAWER"
    }),
  }
}
</script>