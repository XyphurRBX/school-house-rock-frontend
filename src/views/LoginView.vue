<template>
	<PreAuthHeader />
	<v-main>
		<AuthWindow color="secondary" title="Login" @submit="onSubmit" />

		<v-alert
			class="mx-4"
			v-model="loginSuccess"
			variant="tonal"
			closable
			type="success"
			>Successfully logged in!</v-alert
		>
		<v-alert
			class="mx-4"
			v-model="loginFailure"
			variant="tonal"
			closable
			type="error"
			>Login failed.</v-alert
		>
	</v-main>
</template>

<script setup>
import { ref } from "vue";
import PreAuthHeader from "../components/PreAuthHeader.vue";
import AuthWindow from "../components/AuthWindow.vue";
import store from "../store";
import router from "../router";
import { login } from "../api-services/auth";

const loginSuccess = ref(false);
const loginFailure = ref(false);

function onSubmit(username, password) {
	console.log("submitting", username, password);

	login(username, password)
		.then((res) => {
			if (res.status == 200) {
				loginSuccess.value = true;
				store.dispatch("loginState", true);
				store.dispatch("usernameState", username);
				router.push("dashboard");
			} else {
				loginFailure.value = true;
			}
		})
		.catch(() => {
			loginFailure.value = true;
		});
}
</script>
