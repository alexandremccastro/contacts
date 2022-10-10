<template>
  <div>
    <h3>Trashed</h3>
    <v-data-table
      class="mb-3"
      hide-default-footer
      :headers="table.headers"
      :loading="table.loading"
      :items="contacts"
      :items-per-page="pagination.perPage"
    >
      <template v-slot:[`item.createdAt`]="{ item }">
        {{ item.createdAt | formatDate }}
      </template>

      <template v-slot:[`item.updatedAt`]="{ item }">
        {{ item.updatedAt | formatDate }}
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-btn icon color="success" @click="confirmDelete(item)">
          <v-icon>mdi-arrow-u-left-top</v-icon>
        </v-btn>
      </template>
    </v-data-table>
    <v-pagination
      circle
      v-model="page"
      total-visible="10"
      :length="pagination.lastPage"
    ></v-pagination>

    <v-fab-transition>
      <v-btn @click="showDialog" color="pink" dark fixed bottom right fab>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "RecentIndex",
  data() {
    return {
      dialogOptions: {
        show: false,
        uuid: null,
      },
      page: 1,
    };
  },

  computed: {
    ...mapGetters({
      table: "contact/table",
      contacts: "contact/contacts",
      pagination: "contact/pagination",
    }),
  },

  created() {
    this.setPagination({ page: 1, trashed: true });
    this.filter();
  },

  methods: {
    ...mapActions({
      filter: "contact/filter",
      displayDialog: "dialog/displayDialog",
      undelete: "contact/undelete",
    }),

    ...mapMutations({
      setPagination: "contact/SET_PAGINATION",
    }),

    confirmDelete(contact) {
      this.currentContact = contact;
      this.displayDialog({
        color: "info",
        title: "Undelete Contact",
        type: "confirmation",
        text: `Are you sure you wanna undelete <strong>${contact.firstName}</strong>?`,
        callback: this.attemptUndelete,
      });
    },

    showDialog({ uuid }) {
      this.dialogOptions = {
        show: true,
        uuid,
      };
    },

    async attemptUndelete() {
      await this.undelete(this.currentContact);
      this.currentContact = undefined;
      this.setPagination({ page: this.page, trashed: true });
      await this.filter();
    },
  },

  watch: {
    page(value) {
      this.setPagination({ page: value, trashed: true });
      this.filter();
    },
  },
};
</script>
