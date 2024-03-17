import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import SignUpVue from "../views/SignUp.vue";
import LoginVue from "../views/Login.vue";
import ProfileVue from "../views/Profile.vue";
import Analytics from "../views/Analytic.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/signup",
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/ShortenUrl.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUpVue,
    },
    {
      path: "/login",
      name: "login",
      component: LoginVue,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileVue,
    },
    { path: "/analytics", name: "analytics", component: Analytics },
  ],
});

export default router;
