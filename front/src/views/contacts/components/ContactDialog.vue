<template>
  <v-dialog width="600" v-model="model">
    <v-card>
      <v-toolbar color="primary" dark elevation="0">
        <v-toolbar-title class="text--white">{{ dialogTitle }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn text @click="model = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-card-text class="panel pt-5">
        <ContactForm ref="contactForm" @saved="close" />
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="flex">
        <v-spacer></v-spacer>
        <v-btn width="100" @click="model = false">Close</v-btn>

        <v-btn
          color="primary"
          :disabled="loading || saving"
          :loading="loading || saving"
          width="100"
          @click="attemptSave"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import ContactForm from "./ContactForm";
import Vue from "vue";
import { SET_MODEL } from "@/store/contact/mutations";

export default {
  name: "ContactDialog",
  props: {
    value: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    ContactForm,
  },

  computed: {
    ...mapGetters("contact", [
      "readyToUpdate",
      "errors",
      "loading",
      "saving",
    ]),

    model: {
      get() {
        const { show } = this.value;

        if (show) return show;
        return false;
      },
      set(value) {
        const options = { ...this.value };
        options.show = value;
        this.$emit("input", options);
      },
    },

    type() {
      return this.value.type;
    },

    dialogTitle() {
      if (this.readyToUpdate) return "Edit Contact";

      return "Create Contact";
    },
  },

  methods: {
    ...mapActions({
      showSnackbar: "snackbar/showSnackbar",
    }),
    ...mapMutations("contact", [SET_MODEL]),

    prepareToCreate() {
      this[SET_MODEL](null);
    },

    async attemptSave() {
      await this.$refs.contactForm.attemptSave();
    },
    close() {
      this.model = false
    }
  },

  watch: {
    value: {
      handler(value) {
        if (this.model) {
          Vue.nextTick(() => {
            const { uuid, show } = value;

            if (uuid && show) {
              this.$refs.contactForm.prepareToCreate();
              this.$refs.contactForm.findContact(value);
            } else {
              this.$refs.contactForm.prepareToCreate();
            }
          });
        }
      },
      deep: true,
    },
  },
};
</script>
