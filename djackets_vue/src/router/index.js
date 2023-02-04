import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import { useStore } from "@/store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:category_slug/:product_slug/",
    name: "Product",
    component: () => import("@/views/Product"),
  },
  {
    path: "/:category_slug/",
    name: "Category",
    component: () => import("@/views/Category"),
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("@/views/Search"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("@/views/Cart"),
    meta: {
      requireLogin: true,
    },
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: () => import("@/views/SignUp"),
  },
  {
    path: "/log-in",
    name: "Login",
    component: () => import("@/views/Login"),
  },
  {
    path: "/my-account",
    name: "MyAccount",
    component: () => import("@/views/MyAccount"),
    meta: {
      requireLogin: true,
    },
  },
  {
    path: "/cart/checkout",
    name: "Checkout",
    component: () => import("@/views/Checkout"),
    meta: {
      requireLogin: true,
    },
  },
  {
    path: "/cart/success",
    name: "Success",
    component: () => import("@/views/Success"),
    meta: {
      requireLogin: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const store = useStore();
  if (
    to.matched.some(
      (record) => record.meta.requireLogin && !store.isAuthenticated
    )
  ) {
    next({ name: "Login", query: { to: to.path } });
  } else {
    next();
  }
});

export default router;
