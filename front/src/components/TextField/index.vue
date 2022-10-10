<template>
  <div>
    <label class="text-body-2">{{ label }}</label>
    <v-text-field
      v-model="model"
      solo
      dense
      @blur="propagate"
      @keyup="propagate"
      :counter="counter"
      :hint="hint"
      :hide-details="hideDetails"
      :clearable="clearable"
      :rules="rules"
      :disabled="disabled"
      :readonly="readonly"
      :loading="loading"
      :prepend-icon="prependIcon"
      :prepend-inner-icon="prependInnerIcon"
      :append-icon="appendIcon"
      :append-outer-icon="appendOuterIcon"
      :prefix="prefix"
      :suffix="suffix"
      :type="type"
      :error-messages="errorMessages"
      :value="value"
      @click:append="() => $emit('click:append')"
    >
    </v-text-field>
  </div>
</template>
<script>
export default {
  name: "TextField",
  props: {
    label: {
      type: String,
      default: "Label",
    },
    filled: {
      type: Boolean,
      default: false,
    },
    solo: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    hideDetails: {
      type: String,
      default: "auto",
    },
    counter: {
      type: Boolean,
      default: false,
    },
    hint: {
      type: String,
      default: "",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: Array,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    prependIcon: {
      type: String,
      default: null,
    },
    prependInnerIcon: {
      type: String,
      default: null,
    },
    appendIcon: {
      type: String,
      default: null,
    },
    appendOuterIcon: {
      type: String,
      default: null,
    },
    prefix: {
      type: String,
      default: null,
    },
    suffix: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: null,
    },
    errorMessages: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },

  methods: {
    propagate(event) {
      const { target } = event;
      if (target) {
        this.$emit("input", target.value);
      }
    },
  },
};
</script>
