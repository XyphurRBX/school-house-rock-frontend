<template>
	<v-app-bar>
		<v-app-bar-title>School House Rock</v-app-bar-title>
		<v-spacer></v-spacer>
		<v-btn
			variant="elevated"
			color="primary"
			class="mx-4"
			@click="navigateToSignUp"
			>Sign Up</v-btn
		>
		<v-btn
			variant="elevated"
			color="secondary"
			class="mx-4"
			@click="navigateToLogin"
			>Login</v-btn
		>
	</v-app-bar>
</template>

<script setup>
import router from "../router";

function navigateToLogin() {
	router.push("login");
}

function navigateToSignUp() {
	router.push("signup");
}
</script>
