import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./views/Indexmodel'),
      children: [
        {
          path: '',
          component: () => import('./views/Home'),
        },
        {
          path: '/master',
          component: () => import('./components/Livemaster'),
        },
        {
          path: '/game',
          component: () => import('./components/Totalgame'),
        },
        {
          path: '/game/selectgame',
          component: () => import('./components/Channel'),
        },
      ],
    },
  ],
});
