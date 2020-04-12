import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router/client';
import store from './store';
import Socket from 'vue-socket.io'

import './assets/css/common.less';
import './assets/font/iconfont.css';

Vue.config.productionTip = false;

Vue.use(new Socket({
  debug: true,
  connection: 'http://localhost:3000'
}))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
