import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/article',
    name: 'article',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Article/index.vue'),
  },
  {
    path: '/article/detail',
    name: 'articleDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/Article/ArticleDetail.vue'),
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/List/index.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About/index.vue'),
  },
];
const scrollBehavior = (to: any, from: any, savedPosition: any) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { x: 0, y: 0 };
  }
};
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior
});

export default router;
