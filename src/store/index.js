import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
	state: {
		loginState: false,
		usernameState: "",
	},
	mutations: {
		LOGINSTATE(state, loginState) {
			state.loginState = loginState;
		},
		USERNAMESTATE(state, usernameState) {
			state.usernameState = usernameState;
		},
	},
	actions: {
		loginState(context, value) {
			context.commit("LOGINSTATE", value);
		},
		usernameState(context, value) {
			context.commit("USERNAMESTATE", value);
		},
		clearAuthState(context) {
			context.commit("LOGINSTATE", false);
			context.commit("USERNAMESTATE", "");
		},
	},
	getters: {
		loginState(state) {
			return state.loginState;
		},
		usernameState(state) {
			return state.usernameState;
		},
	},
	plugins: [createPersistedState()],
});
