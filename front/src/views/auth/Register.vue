<template>
  <div>
    <v-card class="mb-5" width="300">
      <v-container>
        <v-card-title class="justify-center mb-4"> Contacts </v-card-title>
        <v-card-subtitle class="text-center mb-0">Join our contacts apps for free.</v-card-subtitle>
        <v-form @submit.prevent="attemptRegister" ref="register">
          <v-card-text class="mb-0">
            <v-row>
              <v-col cols="12">
                <TextField
                  label="Name"
                  v-model="user.name"
                  :rules="rules.name"
                  :disabled="loading"
                />
              </v-col>
              <v-col cols="12">
                <TextField
                  label="Email"
                  v-model="user.email"
                  :rules="rules.email"
                  :disabled="loading"
                />
              </v-col>
              <v-col cols="12">
                <TextField
                  label="Password"
                  v-model="user.password"
                  type="password"
                  :rules="rules.password"
                  :disabled="loading"
                />
              </v-col>
              <v-col cols="12">
                <v-btn type="submit" block color="primary" :loading="loading">
                  Register
                </v-btn>
              </v-col>
            </v-row>



          </v-card-text>
        </v-form>
      </v-container>
    </v-card>
    <div class="text-center">
      Already has an account? <router-link :to="{name: 'Login'}"> Login</router-link>.
    </div>
  </div>
</template>
<script>
import TextField from "@/components/TextField";
import { mapActions, mapGetters } from "vuex";
import validations from "@/core/utils/validations";

export default {
  name: "LoginView",

  components: {
    TextField,
  },

  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      loading: false,
    };
  },

  created() {
    if (this.userData) this.$router.push({ name: "Contacts" });
  },

  computed: {
    rules() {
      return {
        name: [(v) => validations.required(v)],
        email: [(v) => validations.required(v)],
        password: [(v) => validations.required(v)],
      };
    },
    ...mapGetters({
      userData: "auth/getUser",
    }),
  },

  methods: {
    ...mapActions({
      register: "auth/register",
      login: "auth/login",
      showSnackbar: "snackbar/showSnackbar",
    }),

    async attemptRegister() {
      if (this.$refs.register.validate()) {
        this.loading = true;

        try {
          await this.register(this.user);
          await this.login(this.user);

          this.$router.push({ name: "Contacts" });

          this.showSnackbar({
            type: "success",
            message: "Successfully registered!",
          });
        } catch {
          this.showSnackbar({
            type: "error",
            message: "Email already in use.",
          });
        } finally {
          this.loading = false;
        }
      }
    },
  },
};
</script>
