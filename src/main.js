import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';

import store from './store';
import App from './App.vue';
import router from './router';
import 'bootstrap';

Vue.use(VueAxios, axios);
Vue.use(Vuex);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
