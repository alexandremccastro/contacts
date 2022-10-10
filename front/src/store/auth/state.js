import session from "@/core/utils/session";

const state = () => ({
  user: session.get("user"),
  errors: {
    email: [],
  },
});

export default state;
