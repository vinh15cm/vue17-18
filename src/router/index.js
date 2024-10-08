import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    alias: ["/home"],
    component: () => import(/** webpackChunkName: "home */ "@/views/Home.vue"),
    children: [
      {
        path: "/about",
        alias: ["/home"],
        component: () =>
          import(/** webpackChunkName: "about */ "@/views/Home.vue"),
      },
      {
        path: "/contact",
        alias: ["/get-in-touch"],
        component: () =>
          import(/** webpackChunkName: "contact */ "@/views/Contact.vue"),
      },
      {
        path: "/search",
        component: () =>
          import(/** webpackChunkName: "search */ "@/views/Search.vue"),
      },
      {
        path: "/dashboard",
        beforeEnter: (to, from, next) => {
          const isLoggedIn = true;
          if (!isLoggedIn) {
            alert("Bạn không có quyền truy cập trang này");
            next(false);
          } else {
            next("/login");
          }
        },
        component: () =>
          import(/** webpackChunkName: "dashboard */ "@/views/Dashboard.vue"),
      },
      {
        path: "/admin",
        component: () =>
          import(/** webpackChunkName: "admin */ "@/views/Admin.vue"),
        children: [
          {
            path: "manager-user",
            component: () =>
              import(
                /** webpackChunkName: "manager-user */ "@/views/ManagerUser.vue"
              ),
          },
          {
            path: "manager-product",
            component: () =>
              import(
                /** webpackChunkName: "manager-product */ "@/views/ManagerProduct.vue"
              ),
          },
          {
            path: "settings",
            component: () =>
              import(/** webpackChunkName: "settings */ "@/views/Settings.vue"),
          },
        ],
      },
      {
        path: "/login",
        component: () =>
          import(/** webpackChunkName: "login */ "@/views/Login.vue"),
      },
    ],
  },
  {
    path: "/list-product",
    component: () =>
      import(
        /** webpackChunkName: "product-detail */ "@/views/ListProduct.vue"
      ),
  },
  {
    path: "/product-detail/:id",
    component: () =>
      import(
        /** webpackChunkName: "product-detail/:id */ "@/views/ProductDetail.vue"
      ),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () =>
      import(/** webpackChunkName: "notfound */ "@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
