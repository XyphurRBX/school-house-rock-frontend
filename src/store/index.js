import { createStore } from "vuex";

export default createStore({
	state: {
		loginState: false,
	},
	mutations: {
		LOGINSTATE(state, loginState) {
			state.loginState = loginState;
		},
	},
	actions: {
		loginState(context, value) {
			context.commit("LOGINSTATE", value);
		},
	},
	getters: {
		loginState(state) {
			return state.loginState;
		},
	},
});
