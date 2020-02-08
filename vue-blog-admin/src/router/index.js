import Vue from 'vue';
import Router from 'vue-router'
import store from '@/store'
Vue.use(Router);
import Layout from '@/layout'
const contentRoutes = [
  {
    path: '/',
    component: Layout,
    name: 'default',
    children: [{
      path: 'index',
      component: resolve => require(['@/views/Home/index.vue'], resolve),
      name: 'Home',
      meta: { title: '主页', icon: 'el-icon-s-home', noCache: true }
    }],
    meta: { title: '主页面', icon: 'el-icon-s-home', }
  },
  {
    path: '/login',
    component: resolve => require(['@/views/Login/index.vue'], resolve),
    name: 'login',
    meta: { title: '登陆页面', disabled: true }
  },
  {
    path: '/category',
    redirect: '/category/index',
    component: Layout,
    children: [{
      path: 'index',
      component: resolve => require(['@/views/Category/index.vue'], resolve),
      name: 'category',
      meta: { title: '分类列表', icon: 'el-icon-tickets', noCache: true }
    }],
    meta: { title: '分类管理', icon: 'el-icon-document-copy', noCache: true }
  },
  {
    path: '/tag',
    redirect: '/tag/index',
    component: Layout,
    children: [{
      path: 'index',
      component: resolve => require(['@/views/Tag/index.vue'], resolve),
      name: 'tag',
      meta: { title: '标签列表', icon: 'el-icon-collection-tag', noCache: true }
    }],
    meta: { title: '标签管理', icon: 'el-icon-collection-tag', noCache: true }
  },
  {
    path: '/article',
    redirect: '/article/list',
    component: Layout,
    children: [{
      path: 'list',
      component: resolve => require(['@/views/Article/index.vue'], resolve),
      name: 'articleList',
      meta: { title: '文章列表', noCache: true }
    }, {
      path: 'edit',
      component: resolve => require(['@/views/Article/edit.vue'], resolve),
      name: 'articleAdd',
      meta: { title: '添加文章', noCache: true }
    }, {
      path: 'edit/:id',
      component: resolve => require(['@/views/Article/edit.vue'], resolve),
      name: 'articleEdit',
      props: true,
      meta: { title: '文章编辑', noCache: true, disabled: true }
    }],
    meta: { title: '文章管理', icon: 'el-icon-notebook-1', noCache: true }
  },
  {
    path: '/user',
    redirect: '/user/list',
    component: Layout,
    children: [{
      path: 'list',
      component: resolve => require(['@/views/User/index.vue'], resolve),
      name: 'userList',
      meta: { title: '用户列表', icon: 'el-icon-s-management', noCache: true }
    }],
    meta: { title: '用户管理', icon: 'el-icon-user', noCache: true }
  },
  {
    path: '/error',
    component: resolve => require(['@/views/Error/index.vue'], resolve),
    name: 'errorPage',
    meta: { title: '404页面', disabled: true }
  },
  {
    path: '*',
    component: resolve => require(['@/views/Error/index.vue'], resolve),
    name: 'errorPage',
    meta: { title: '404页面', disabled: true }
  }

]
store.dispatch('sidebar/createSidebar', contentRoutes)
//返回之前页面的时候保持定位
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { x: 0, y: 0 };
  }
};

const router = new Router({
  mode: 'history',
  // base: process.env.BASE_URL || '/',
  routes: contentRoutes,
  scrollBehavior
});
export default router
