<template>
	<PreAuthHeader />
	<AuthWindow color="primary" title="Sign Up" @submit="onSubmit" />
</template>

<script setup>
import PreAuthHeader from "../components/PreAuthHeader.vue";
import AuthWindow from "../components/AuthWindow.vue";

import { signup } from "../api-services/auth";

function onSubmit(username, password) {
	signup(username, password).then((res) => {
		console.log(res);
	});
}
</script>
