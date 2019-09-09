import axios from 'axios';

export default {
  namespaced: true,
  state: {
    total: 0,
    totalgame: [],
  },
  actions: {
    getdata(context, startdata = 0) {
      context.dispatch('Loading', true, { root: true });
      return new Promise((resolve) => {
        const api = `${process.env.VUE_APP_APIPATH}/kraken/games/top?offset=${startdata}`;
        axios.get(api, {
          headers: {
            Accept: 'application/vnd.twitchtv.v5+json',
            'Client-ID': `${process.env.VUE_APP_CUSTOMPATH}`,
          },
        }).then((response) => {
          context.commit('GAME', response);
          resolve();
          context.dispatch('Loading', false, { root: true });
        });
      });
    },
  },
  mutations: {
    GAME(state, payload) {
      const ary = payload.data.top;
      ary.forEach((item) => {
        item.game.box.template = item.game.box.template.replace('{width}', '200').replace('{height}', '250');
      });
      state.totalgame = ary;
      state.total = payload.data['_total'];
    },
  },
  getters: {
    ganmedata(state) {
      return state.totalgame;
    },
  },
};
