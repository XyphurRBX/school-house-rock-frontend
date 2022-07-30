<template>
	<div justify-center align-center>
		<v-table></v-table>
		<v-pagination v-model="pageNum" :length="pageCount" :total-visible="7" />
	</div>
</template>

<script setup>
import { ref, defineProps, toRefs } from "vue";
import { getTable } from "../api-services/db";

const PAGE_SIZE = 10;

const pageCount = ref(1);
const pageNum = ref(1);
const ascending = ref(true);
const orderBy = ref("");

const props = defineProps({
	entityName: String,
});

const { entityName } = toRefs(props);

function getOffset() {
	return (pageNum.value - 1) * PAGE_SIZE;
}

async function getEntityData() {
	const offset = getOffset();
	return await getTable(
		entityName.value,
		PAGE_SIZE,
		offset,
		ascending.value,
		orderBy.value
	);
}

/*
function getAttributes() {
	const entityData = getEntityData();
	const fields = entityData.fields;
}*/

async function initialize() {
	console.log(getEntityData());
}

initialize();
</script>
