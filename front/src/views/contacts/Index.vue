<template>
  <div>
    <h3>Contacts</h3>
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
        <v-btn icon @click="showDialog(item)">
          <v-icon>mdi-pencil-outline</v-icon>
        </v-btn>

        <v-btn icon color="danger" @click="confirmDelete(item)">
          <v-icon>mdi-delete-outline</v-icon>
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

    <AgentDialog v-model="dialogOptions" />
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import AgentDialog from "./components/ContactDialog";
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
  components: {
    AgentDialog,
  },
  computed: {
    ...mapGetters({
      table: "contact/table",
      contacts: "contact/contacts",
      pagination: "contact/pagination",
    }),
  },

  created() {
    this.setPagination({ page: 1, trashed: false });
    this.filter();
  },

  methods: {
    ...mapActions({
      filter: "contact/filter",
      displayDialog: "dialog/displayDialog",
      delete: "contact/delete",
    }),

    ...mapMutations({
      setPagination: "contact/SET_PAGINATION",
    }),

    confirmDelete(contact) {
      this.currentContact = contact;
      this.displayDialog({
        color: "danger",
        title: "Delete Contact",
        type: "confirmation",
        text: `Are you sure you wanna delete <strong>${contact.firstName}</strong>?`,
        callback: this.attemptDelete,
      });
    },

    showDialog({ uuid }) {
      this.dialogOptions = {
        show: true,
        uuid,
      };
    },

    async attemptDelete() {
      await this.delete(this.currentContact);
      this.currentContact = undefined;
      await this.filter();
    },
  },

  watch: {
    page(value) {
      this.setPagination({ page: value, trashed: false });
      this.filter();
    },
  },
};
</script>
