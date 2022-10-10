<template>
  <v-tooltip bottom max-width="400">
    <template v-slot:activator="{ on }">
      <div v-on="on">
        <VueEllipsis
          :data="text"
          :line-clamp="lineClamp"
          :line-height="lineHeight"
          :end-char="endChar"
        />
      </div>
    </template>
    {{ tooltip ? tooltip : data }}
  </v-tooltip>
</template>
<script>
export default {
  name: "CustomEllipsis",
  props: {
    data: {
      default: "",
      required: true,
    },
    tooltip: {
      default: undefined,
      required: false,
    },
    endChar: {
      type: String,
      default: "...",
      required: false,
    },
    lineClamp: {
      type: Number,
      default: 1,
      required: false,
    },
    lineHeight: {
      type: String,
      default: "24px",
      required: false,
    },
  },

  computed: {
    text() {
      return [null, undefined].includes(this.data) ? "" : this.data;
    },
  },
};
</script>
<style scoped>
.v-tooltip__content {
  word-break: break-all;
}
</style>
