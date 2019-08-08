import axios from 'axios';

export default {
		namespaced: true,
    state: {
			total: 0,
			channel: [],
    },
    actions:{
			getdata(context, { lange, name, startdata = 0 }) {
					context.dispatch('Loading', true, { root: true });
					return new Promise((resolve) => {
						const api = `${process.env.VUE_APP_APIPATH}/kraken/streams/?client_id=${process.env.VUE_APP_CUSTOMPATH}&language=${lange}&game=${name}&offset=${startdata}`;
						axios.get(api).then((response) => {
							context.commit('CHANNEL', response);
							context.dispatch('Loading', false, { root: true });
							resolve();
						});
					})
				}
    },
    mutations:{
			CHANNEL(state, payload) {
				state.total = payload.data._total;
				state.channel = payload.data.streams;
			}
		},
		getters:{
			channeldata (state) {
				return state.channel;
			}
		}
}