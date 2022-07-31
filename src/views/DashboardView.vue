<template>
	<DashboardHeader title="School House Rock" />

	<body>
		<v-main>
			<div class="centered-input font-weight-black text-uppercase">
				School House Rock
			</div>
		</v-main>
	</body>
	<v-container
		fluid
		fill-height
		class="schoolpicture"
		style="max-height: 100vh"
	>
		<v-layout justify-center align-center column pa-5> </v-layout>
	</v-container>
</template>

<script setup>
import DashboardHeader from "../components/DashboardHeader.vue";
</script>

<style scoped>
.schoolpicture {
	background: url("https://img.freepik.com/free-vector/high-school-concept-illustration_114360-8279.jpg?w=2000");
	width: 100%;
	height: 100%;
	max-height: 100%;
	margin: 0;
	padding: 0;
	background-size: 100% 100%;
	background-repeat: no-repeat;
}

.centered-input {
	text-align: center;
	font-size: 40px;
}

body {
	background-color: rgb(203, 233, 212);
}
</style>
