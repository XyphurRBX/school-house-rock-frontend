<template>
	<DashboardHeader title="Students" />

	<input
		id="searchName"
		type="text"
		v-model="input"
		placeholder="Search by first name..."
	/>
	<button @click="findStudent">Submit</button>

	<EntityEditor entityName="student" />
</template>

<script setup>
import DashboardHeader from "../components/DashboardHeader.vue";
import EntityEditor from "../components/EntityEditor.vue";
import { getRows } from "../api-services/db";

function findStudent() {
	const name = document.getElementById("searchName").value;
	getRows(name).then(() => {
		//getEntityData();
	});

	console.log("-->" + document.getElementById("searchName").value);
}
</script>

<style>
input {
	display: block;
	width: 350px;
	padding: 5px 45px;
	font-size: 16px;
	border: none;
	border-radius: 5px;
}
</style>
