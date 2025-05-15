import { createRouter, createWebHistory } from 'vue-router'

// const routes = [
//   {
//     path: '/',
//     name: 'Index',
//     meta: {
//       title: '首页',
//       menuOrder: 1
//     },
//     component: () => import('../views/index/index.vue')
//   },
//   {
//     path: '/about',
//     name: 'About',
//     meta: {
//       title: '关于',
//       menuOrder: 2
//     }
//     component: () => import('../views/about/index.vue')
//   },
//   {
//     path: '/contact',
//     name: 'Contact',
//     meta: {
//       title: '联系',
//       menuOrder: 3
//     }
//     component: () => import('../views/contact/index.vue')
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// })

import routes from "./routes";

console.log(routes);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router

