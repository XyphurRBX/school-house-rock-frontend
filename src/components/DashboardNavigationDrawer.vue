<template>
	<v-navigation-drawer bottom temporary>
		<v-list nav>
			<v-list-item
				v-for="item in navItems"
				:prepend-icon="item.icon"
				:title="item.title"
				:value="item.value"
				:key="item.value"
				@click="navigate(item.value)"
			></v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script setup>
import router from "../router";

function navigate(pageRoute) {
	router.push(pageRoute);
}

const navItems = [
	{
		title: "Home",
		value: "dashboard",
		icon: "mdi-home",
	},
	{
		title: "Employees",
		value: "employees",
		icon: "mdi-office-building",
	},
	{
		title: "Students",
		value: "students",
		icon: "mdi-account-school",
	},
	{
		title: "Classes",
		value: "classes",
		icon: "mdi-chair-school",
	},
	{
		title: "Teachers",
		value: "teachers",
		icon: "mdi-human-male-board",
	},
	{
		title: "Jobs",
		value: "jobs",
		icon: "mdi-hammer-screwdriver",
	},
	{
		title: "Enrollment",
		value: "enrollment",
		icon: "mdi-account-multiple",
	},
];
</script>
