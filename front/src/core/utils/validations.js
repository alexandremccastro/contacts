export default {
  required: (v, message = "Required field.") => !!v || message,
};
