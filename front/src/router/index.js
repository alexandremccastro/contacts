import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import session from "@/core/utils/session";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

const requiresAuth = (route) =>
  route.matched.some((record) => record.meta.requiresAuth);
const isAuthenticated = () => session.has("user");

router.beforeEach((to, from, next) => {
  let hasMatches = to.matched.some((record) => record != null);

  if (hasMatches) {
    if (requiresAuth(to)) {
      if (isAuthenticated()) {
        next();
      } else {
        next("/login");
      }
    }

    next();
  } else {
    next({ name: "NotFound" });
  }
});

export default router;
