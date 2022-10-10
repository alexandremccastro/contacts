import auth from "./auth";
import contact from "./contact";

export default [
  {
    path: "/auth",
    handler: auth,
  },
  {
    path: "/contacts",
    handler: contact,
  },
];
