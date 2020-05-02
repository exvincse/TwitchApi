import axios from "axios";

export default {
	namespaced: true,
	state: {
		total: 0,
		channel: []
	},
	actions: {
		async getdata(context, { lange, name, startdata = 0 }) {
			const api = `${process.env.VUE_APP_APIPATH}/kraken/streams/?broadcaster_language=${lange}&game=${name}&offset=${startdata}`;
			const res = await axios.get(api, {
				headers: {
					Accept: "application/vnd.twitchtv.v5+json",
					"Client-ID": `${process.env.VUE_APP_CUSTOMPATH}`
				}
			});
			context.commit("CHANNEL", res);
		}
	},
	mutations: {
		CHANNEL(state, payload) {
			state.total = payload.data["_total"];
			state.channel = payload.data.streams;
		}
	},
	getters: {
		channeldata(state) {
			return state.channel;
		}
	}
};
