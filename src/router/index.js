import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "../store";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/dashboard",
		name: "dashboard",
		component: () => import("../views/DashboardView.vue"),
	},
	{
		path: "/login",
		name: "login",
		component: () => import("../views/LoginView.vue"),
	},
	{
		path: "/signup",
		name: "signup",
		component: () => import("../views/SignupView.vue"),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

// handle auth navigation guard
router.beforeEach(async (to) => {
	const isAuthenticated = store.getters.loginState;
	if (
		!isAuthenticated &&
		to.name !== "login" &&
		to.name !== "signup" &&
		to.name !== "home"
	) {
		return { name: "login" };
	} else if (
		isAuthenticated &&
		(to.name === "login" || to.name === "signup" || to.name === "home")
	) {
		return { name: "dashboard" };
	}
});

export default router;
