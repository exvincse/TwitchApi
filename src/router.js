import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home'),
    },
    {
      path: '/game',
      component: () => import('./components/Totalgame'),
    },
    {
      path: '/selectgame',
      component: () => import('./components/Channel'),
    },
  ],
});
