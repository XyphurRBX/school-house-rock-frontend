<template>
	<DashboardHeader title="Jobs" />

	<br />
	<input
		id="searchName"
		type="text"
		v-model="input"
		placeholder="Search by job name..."
	/>
	<button
		class="submitButton"
		@click="
			showFilter = !showFilter;
			findJobs();
		"
	>
		{{ showFilter ? "Clear" : "Submit" }}
	</button>

	<div v-show="!showFilter">
		<EntityEditor entityName="job" />
	</div>

	<div v-show="showFilter">
		<div justify-center align-center>
			<v-table density="compact">
				<thead>
					<th v-for="attr in attributes" :key="attr.id">
						<v-btn variant="text">
							{{ attr.name }}
						</v-btn>
					</th>
				</thead>
				<tbody>
					<tr v-for="entry in entries" :key="entry.id">
						<td v-for="attr in attributes" :key="attr.id">
							<p>{{ entry[attr.name] }}</p>
						</td>
					</tr>
				</tbody>
			</v-table>
		</div>
	</div>
</template>

<script setup>
import DashboardHeader from "../components/DashboardHeader.vue";
import EntityEditor from "../components/EntityEditor.vue";

import { ref } from "vue";
import { getRows } from "../api-services/db";

var showFilter = ref(false);

const attributes = ref([]);
const entries = ref([]);

function findJobs() {
	var name = document.getElementById("searchName").value;
	const rowIdentifers = { job_name: name };
	const tableName = "job";
	getRows(tableName, rowIdentifers).then((response) => {
		if (!response.data) alert("Name not Found");
		attributes.value = response.data.fields;
		entries.value = response.data.rows;
	});
}
</script>

<style>
input {
	display: block;
	width: 350px;
	margin: 20px;
	padding: 5px 45px;
	font-size: 16px;
	border: none;
	border-radius: 5px;
}

.submitButton {
	margin-top: 8px;
	margin-bottom: 20px;
	margin-left: 35px;
	width: 6%;
	height: 5%;
	border: 2px solid black;
}
</style>
