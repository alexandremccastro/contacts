<template>
  <v-snackbar
    :value="snackbar.isVisible"
    :class="animation"
    timeout="-1"
    :color="snackbar.type"
    :right="snackbar.right || true"
    :left="snackbar.left"
    :top="snackbar.top"
    :bottom="snackbar.bottom"
  >
    <v-icon v-if="snackbar.hasIcon || true" class="mr-1">
      {{ snackbar.icon || getIcon }}
    </v-icon>
    <span>
      {{ snackbar.message }}
    </span>
    <template v-slot:action="{}">
      <v-btn icon @click="handleClose">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "SnackBar",

  props: {
    snackbar: {
      type: Object,
      required: true,
    },
  },

  computed: {
    getIcon() {
      const icons = {
        info: "mdi-alert-octagon",
        success: "mdi-check-circle-outline",
        warning: "mdi-alert-outline",
        error: "mdi-alert-circle",
        danger: "mdi-alert-circle",
      };

      return icons[this.snackbar.type] || icons.info;
    },
  },

  data() {
    return {
      animation: "slide-in-right",
    };
  },

  created() {
    if (!this.snackbar.isPersistent) {
      setTimeout(() => {
        this.handleClose();
      }, this.snackbar.timeout || 4000);
    }
  },

  methods: {
    handleClose() {
      this.animation = "slide-out-right";
      setTimeout(() => {
        this.$emit("close");
      }, 500);
    },
  },
};
</script>

<style lang="css" scoped>
.slide-in-right {
  -webkit-animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-out-right {
  animation: slide-out-right 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

@keyframes slide-out-right {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(1000px);
    opacity: 0;
  }
}
</style>
