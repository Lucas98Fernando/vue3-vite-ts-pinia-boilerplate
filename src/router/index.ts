import { createRouter, createWebHistory, RouteRecordRaw, } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Example",
    component: () => import("../modules/example/pages/Example.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../modules/example/pages/About.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router