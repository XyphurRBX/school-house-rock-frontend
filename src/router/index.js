import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import DashboardView from "../views/DashboardView.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import ClassesView from "../views/ClassesView.vue";
import EmployeesView from "../views/EmployeesView.vue";
import EnrollmentView from "../views/EnrollmentView.vue";
import JobsView from "../views/JobsView.vue";
import StudentsView from "../views/StudentsView.vue";
import TeachersViews from "../views/TeachersView.vue";

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
		component: DashboardView,
	},
	{
		path: "/login",
		name: "login",
		component: LoginView,
	},
	{
		path: "/signup",
		name: "signup",
		component: SignupView,
	},
	{
		path: "/classes",
		name: "classes",
		component: ClassesView,
	},
	{
		path: "/employees",
		name: "employees",
		component: EmployeesView,
	},
	{
		path: "/enrollment",
		name: "enrollment",
		component: EnrollmentView,
	},
	{
		path: "/jobs",
		name: "jobs",
		component: JobsView,
	},
	{
		path: "/students",
		name: "students",
		component: StudentsView,
	},
	{
		path: "/teachers",
		name: "teachers",
		component: TeachersViews,
	},
];

const router = createRouter({
	history: createWebHistory(),
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
