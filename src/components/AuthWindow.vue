<template>
	<v-card class="mx-4 my-10" style="max-width: 500px">
		<v-toolbar color="{{color}} accent-4" cards dark flat>
			<v-card-title class="text-h6 font-weight-regular">{{
				title
			}}</v-card-title>
		</v-toolbar>
		<v-form ref="authForm" v-model="form" class="pa-4 pt-6">
			<v-text-field
				v-model="username"
				:rules="[rules.length(3), rules.required]"
				filled
				color="{{color}}"
				label="Username"
				type="username"
			></v-text-field>
			<v-text-field
				v-model="password"
				:rules="[rules.password, rules.length(6), rules.required]"
				filled
				color="{{color}}"
				counter="6"
				label="Password"
				style="min-height: 96px"
				type="password"
			></v-text-field>
		</v-form>
		<v-divider></v-divider>
		<v-card-actions>
			<v-btn text @click="$refs.authForm.reset()"> Clear </v-btn>
			<v-spacer></v-spacer>
			<v-btn
				:disabled="!form"
				:loading="isLoading"
				class="white--text"
				color="{{color}} accent-4"
				depressed
				@click="onSubmit"
			>
				Submit
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

defineProps({
	title: String,
	color: String,
});

const emit = defineEmits(["submit"]);

const form = ref(false);
const isLoading = ref(false);
const username = ref("");
const password = ref("");

const rules = {
	length: (len) => (v) =>
		(v || "").length >= len || `Invalid character length, required ${len}`,
	password: (v) =>
		!!(v || "").match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
		"Password must contain an upper case letter, a numeric character, and a special character",
	required: (v) => !!v || "This field is required",
};

function onSubmit() {
	emit("submit", username.value, password.value);
}
</script>
