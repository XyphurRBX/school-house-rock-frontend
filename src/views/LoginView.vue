<template>
	<PreAuthHeader />
	<AuthWindow color="secondary" title="Login" @submit="onSubmit" />
</template>

<script setup>
import PreAuthHeader from "../components/PreAuthHeader.vue";
import AuthWindow from "../components/AuthWindow.vue";

function onSubmit(username, password) {
	console.log("submitting", username, password);
}
</script>
