<template>
  <div>
    <Snackbar
      v-for="(snackbar, idx) in availableBars"
      :key="snackbar.id"
      :snackbar="snackbar"
      :style="calculateBottom(idx)"
      @close="() => removeSnackbar(snackbar.idx)"
    />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Snackbar from "../Snackbar";

export default {
  name: "DisplaySnackBar",

  components: {
    Snackbar,
  },

  computed: {
    ...mapGetters("snackbar", ["visibleSnackbars"]),

    availableBars() {
      let available = this.visibleSnackbars.map((snackbar) => {
        const dialog = { isVisible: true };

        Object.defineProperty(dialog, "isVisible", {
          get: () => this.isVisible,

          set: (isVisible) => {
            this.isVisible = isVisible;

            if (isVisible === false) this.removeSnackbar(snackbar.idx);
          },
        });

        Object.assign(dialog, { ...snackbar });

        return dialog;
      });

      return available;
    },
  },
  methods: {
    ...mapActions("snackbar", ["removeSnackbar"]),

    calculateBottom(idx) {
      return { bottom: `${idx == 0 ? 20 : 80 * idx + 20}px` };
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
