import auth from "./auth";
import contact from "./contact";

export default [
  {
    path: "/",
    handler: auth,
  },
  {
    path: "/contacts",
    handler: contact,
  },
];
