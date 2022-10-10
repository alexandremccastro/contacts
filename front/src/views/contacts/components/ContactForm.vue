<template>
  <v-form ref="contactForm">
    <v-row>
      <v-col cols="6">
        <TextField
          label="First Name"
          v-model="contact.firstName"
          filled
          outlined
          :loading="compoundLoad"
          :rules="rules.firstName"
          :disabled="compoundLoad"
        />
      </v-col>

      <v-col cols="6">
        <TextField
          label="Last Name"
          v-model="contact.lastName"
          filled
          outlined
          :loading="compoundLoad"
          :rules="rules.lastName"
          :disabled="compoundLoad"
        />
      </v-col>

      <v-col cols="12">
        <TextField
          label="Company"
          v-model="contact.company"
          filled
          outlined
          :loading="compoundLoad"
          :rules="rules.company"
          :disabled="compoundLoad"
        />
      </v-col>

      <v-col cols="12">
        <TextField
          label="Job Title"
          v-model="contact.jobTitle"
          filled
          outlined
          :loading="compoundLoad"
          :rules="rules.jobTitle"
          :disabled="compoundLoad"
        />
      </v-col>

      <v-col cols="12">
        <TextField
          label="Phone Number"
          v-model="contact.phoneNumber"
          filled
          outlined
          :loading="compoundLoad"
          :rules="rules.phoneNumber"
          :disabled="compoundLoad"
        />
      </v-col>
      <v-col cols="12">
        <TextField
          label="Email"
          v-model="contact.email"
          filled
          outlined
          :loading="compoundLoad"
          :rules="rules.email"
          :disabled="compoundLoad"
        />
      </v-col>
      <v-col cols="12">
        <Textarea
          label="Notes"
          v-model="contact.notes"
          filled
          outlined
          :loading="compoundLoad"
          :rules="rules.notes"
          :disabled="compoundLoad"
        />
      </v-col>
    </v-row>
  </v-form>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import TextField from "@/components/TextField";
import Textarea from "@/components/Textarea";
import validations from "@/core/utils/validations";

export default {
  name: "PeriodicityForm",

  components: {
    TextField,
    Textarea
  },
  data() {
    return {
      contact: { },
    };
  },

  computed: {
    ...mapGetters("contact", [
      "errors",
      "readyToUpdate",
      "loading",
      "saving",
    ]),

    rules() {
      return {
        firstName: [(v) => validations.required(v)],
        phoneNumber: [(v) => validations.required(v)],
      };
    },

    compoundLoad() {
      return this.loading || this.saving
    }
  },

  methods: {
    ...mapActions({
      find: "contact/find",
      update: "contact/update",
      create: "contact/create",
      setCurrentModelId: "contact/setCurrentModelId",
      setCurrentErrors: "contact/setCurrentErrors",
      setCurrentModel: "contact/setCurrentModel",
      showSnackbar: "snackbar/showSnackbar",
    }),

    prepareToCreate() {
      this.contact = {};
      this.setCurrentErrors([]);
      this.setCurrentModelId(null);
      this.$refs.contactForm.reset();
    },

    async attemptSave() {
      if (this.$refs.contactForm.validate()) {
        this.setCurrentModel(this.contact);
        if (this.readyToUpdate) await this.update();
        else await this.create();
        this.$emit('saved', true)
      }
    },

    async findContact(contact) {
      try {
        const { uuid } = contact;
        this.setCurrentModelId(uuid);
        const data = await this.find(uuid);
        this.contact = { ...data };
      } catch {
        this.showSnackbar({
          type: "danger",
          message: "Contact not found.",
        });
      }
    },
  },
};
</script>
