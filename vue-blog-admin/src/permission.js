import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  if ((to.path === '/login' || to.path === '/error') && !store.getters.token) {
    NProgress.done()
    return next();
  }
  if (!store.getters.token) {
    NProgress.done()
    // return next(`/login?redirect=${to.path}`)
    return next(`/login`)
  }
  if (store.getters.username === '') {
    let result = await store.dispatch('user/getUserInfo');
    if (result.code != 0) {
      Message({
        message: result.message,
        type: "error"
      });
      NProgress.done()
      // return next(`/login?redirect=${to.path}`)
      return next(`/login`)
    }
  }
  NProgress.done()
  next()
})