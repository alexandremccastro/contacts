import Centralized from "@/views/template/Centralized";
import Login from "@/views/auth/Login";
import Register from "@/views/auth/Register";

export default [
  {
    name: "Auth",
    path: "/",
    redirect: "/login",
    component: Centralized,
    meta: {
      requiresAuth: false,
    },
    children: [
      {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
          title: "Login",
        },
      },
      {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {
          title: "Register",
        },
      }
    ],
  }
];
