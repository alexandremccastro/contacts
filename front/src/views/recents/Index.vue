<template>
  <div>
    <h3>Recent</h3>
      <v-data-table hide-default-footer :headers="table.headers">
      </v-data-table>
      <v-pagination circle></v-pagination>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'RecentIndex',
  computed: {
    ...mapGetters({
      drawer: 'template/drawer',
      dark: 'template/dark',
      table: 'contact/table'
    })
  },

  methods: {
    ...mapActions({
      displayAlert: 'contact/displayAlert'
    })
  }
}
</script>