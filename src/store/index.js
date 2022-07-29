import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

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
	plugins: [createPersistedState()],
});
