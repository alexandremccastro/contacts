<template>
  <div>
    <v-card class="mb-5" width="300">
      <v-container>
        <v-card-title class="justify-center mb-4"> Contacts </v-card-title>
        <v-card-subtitle class="text-center mb-0">Type your credentials to sign in.</v-card-subtitle>
        <v-form @submit.prevent="attemptLogin" ref="login">
          <v-card-text class="mb-0">
            <v-row>
              <v-col cols="12">
                <TextField
                  label="Email"
                  v-model="user.email"
                  :rules="rules.email"
                />
              </v-col>
              <v-col cols="12">
                <TextField
                  label="Password"
                  v-model="user.password"
                  type="password"
                  :rules="rules.password"
                />
              </v-col>
              <v-col cols="12">
                <v-btn type="submit" block color="primary" :loading="loading">
                  Login
                </v-btn>
              </v-col>
            </v-row>



          </v-card-text>
        </v-form>


      </v-container>
    </v-card>

    <div class="text-center">
      Don't have an account? <router-link :to="{name: 'Register'}"> Create one here</router-link>.
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
      login: "auth/login",
      showSnackbar: "snackbar/showSnackbar",
    }),

    async attemptLogin() {
      if (this.$refs.login.validate()) {
        this.loading = true;

        try {
          await this.login(this.user);

          this.$router.push({ name: "Contacts" });

          this.showSnackbar({
            type: "success",
            message: "Successfully logged in!",
          });
        } catch {
          this.showSnackbar({
            type: "error",
            message: "Invalid credentials",
          });
        } finally {
          this.loading = false;
        }
      }
    },
  },
};
</script>
