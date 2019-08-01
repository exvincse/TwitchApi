import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    Hotgmae: [],
    isLoading: false,
  },
  actions: {
    gethotgame(context) {
      context.commit('LOADING', true);
      const limit = 20;
      const api = `${process.env.VUE_APP_APIPATH}/kraken/games/top/?client_id=${process.env.VUE_APP_CUSTOMPATH}&limit=${limit}`;
      axios.get(api).then((response) => {
        if (response.status === 200) {
          context.commit('HOTGAME', response.data.top);
          context.commit('LOADING', false);
        }
      });
    },
    Loading(context, payload) {
      context.commit('LOADING', payload);
    },
  },
  mutations: {
    HOTGAME(state, payload) {
      state.Hotgmae = payload;
    },
    LOADING(state, payload) {
      state.isLoading = payload;
    },
  },
});
