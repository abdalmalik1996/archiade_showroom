// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "/",
        name: "Showroom",
        component: () => import("@/views/Showroomviews.vue"),
      },
      {
        path: "/Showroom/products/:name",
        name: "products",
        component: () => import("@/views/productsView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-red",
});

export default router;
