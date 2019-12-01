import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';
import Loading from 'vue-loading-overlay';

import store from './store';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import 'vue-loading-overlay/dist/vue-loading.css';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.use(VueAxios, axios);
Vue.use(Vuex);
Vue.component('Loading', Loading);
Vue.config.productionTip = false;

axios.interceptors.request.use(
  (config) => {
    store.dispatch('Loading', true);
    return config;
  },
  (err) => {
    store.dispatch('Loading', false);
    return Promise.reject(err);
  });
axios.interceptors.response.use(
  (config) => {
    store.dispatch('Loading', false);
    console.log(config)
    return config;
  },
  (err) => {
    store.dispatch('Loading', false);
    return Promise.reject(err);
  });
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
