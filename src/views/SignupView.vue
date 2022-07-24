<template>
	<PreAuthHeader />
	<AuthWindow color="primary" title="Sign Up" @submit="onSubmit" />

	<v-alert
		class="mx-4"
		v-model="signupSuccess"
		variant="tonal"
		closable
		type="success"
		>Successfully signed up!</v-alert
	>
	<v-alert
		class="mx-4"
		v-model="signupFailure"
		variant="tonal"
		closable
		type="error"
		>Sign up failed.</v-alert
	>
</template>

<script setup>
import { ref } from "vue";
import PreAuthHeader from "../components/PreAuthHeader.vue";
import AuthWindow from "../components/AuthWindow.vue";

import { signup } from "../api-services/auth";

const signupSuccess = ref(false);
const signupFailure = ref(false);

function onSubmit(username, password) {
	signup(username, password)
		.then((res) => {
			if (res.status == 200) {
				signupSuccess.value = true;
			} else {
				signupFailure.value = true;
			}
		})
		.catch(() => {
			signupFailure.value = true;
		});
}
</script>
