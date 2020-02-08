import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './icons'
import '@/components/Button/index'
import '@/components/Line/index.ts'
import '@/components/Author/index.ts'
import '@/components/Loading/index.ts'
import '@/utils/https'
import '@/scss/default.scss'
import 'mavon-editor/dist/css/index.css'
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
