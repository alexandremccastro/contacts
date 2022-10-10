<template>
  <div>
    <template v-if="dialog.type == 'confirmation'">
      <v-dialog persistent v-model="dialog.show" :width="dialog.width">
        <v-card>
          <v-toolbar v-if="dialog.title" :color="dialog.color" elevation="0" dark>
            <v-toolbar-title>{{ dialog.title }}</v-toolbar-title>
          </v-toolbar>

          <v-card-text class="py-4 mb-0">
            <span v-html="dialog.text" />
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-spacer />
            <v-btn @click="cancelDialog" width="100" class="mr-2">
              {{ dialog.buttons.cancel.text }}
            </v-btn>

            <v-btn
              @click="acceptDialog"
              width="100"
              :color="dialog.color"
              dark
              :loading="loadingConfirmation"
            >
              {{ dialog.buttons.confirm.text }}
              <v-icon v-if="dialog.buttons.confirm.icon">
                {{ dialog.buttons.confirm.icon }}
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
    <template v-else>
      <v-dialog persistent v-model="dialog.show" :width="dialog.width">
        <v-card>
          <v-toolbar v-if="dialog.title" :color="dialog.color" elevation="0" dark>
            <v-toolbar-title>{{ dialog.title }}</v-toolbar-title>
          </v-toolbar>

          <v-card-text class="py-4 mb-0">
            <span v-html="dialog.text" />
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-spacer />
            <v-btn @click="cancelDialog" width="100" class="mr-2">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "DisplayDialog",
  computed: {
    ...mapState("dialog", ["dialog"]),
    ...mapGetters("dialog", ["loadingConfirmation"]),
  },

  methods: {
    ...mapActions("dialog", ["cancelDialog", "acceptDialog"]),
  },
};
</script>
