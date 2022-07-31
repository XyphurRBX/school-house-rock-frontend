<!-- eslint-disable vue/require-v-for-key -->
<template>
	<div justify-center align-center>
		<v-table density="compact">
			<thead>
				<tr>
					<th v-for="attr in attributes">
						<v-btn
							variant="text"
							:append-icon="orderByIcons[attr.name]"
							@click="onColumnTitleClicked(attr.name)"
							>{{ attr.name }}</v-btn
						>
					</th>
					<th>
						<v-btn
							size="x-small"
							icon="mdi-plus"
							color="success"
							@click="onCreateClicked"
						/>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(entry, index) in entries">
					<td v-for="attr in attributes">
						<div v-if="!editState[index]">
							{{ entry[attr.name] }}
						</div>
						<div v-if="editState[index]">
							<v-text-field
								density="compact"
								variant="plain"
								:label="attr.name"
								v-model="editValues[attr.name]"
							></v-text-field>
						</div>
					</td>
					<td>
						<v-btn
							v-if="!editState[index]"
							size="x-small"
							icon="mdi-pencil"
							color="secondary"
							@click="onEditClicked(index)"
						/>
						<v-btn
							v-if="editState[index]"
							size="x-small"
							icon="mdi-check"
							color="success"
							@click="onEditSubmit(index)"
						/>
					</td>
					<td>
						<v-btn
							v-if="!editState[index]"
							size="x-small"
							icon="mdi-delete"
							color="error"
							@click="onDelete(index)"
						/>
						<v-btn
							v-if="editState[index]"
							size="x-small"
							icon="mdi-close"
							color="grey"
							@click="cancelEdit(index)"
						/>
					</td>
				</tr>
			</tbody>
		</v-table>
		<v-pagination v-model="pageNum" :length="pageCount" :total-visible="7" />
	</div>

	<EntityEditorCreationDialog
		:visible="creationVisible"
		:dialogTitle="entityName"
		:attributes="attributes"
		@dialogClosed="creationVisible = false"
		@submit="onCreateSubmit"
	/>
</template>

<script setup>
import { ref, defineProps, toRefs, watch, unref } from "vue";
import {
	getTable,
	getEntryCount,
	deleteRow,
	createRow,
	modifyRow,
} from "../api-services/db";

import EntityEditorCreationDialog from "./EntityEditorCreationDialog.vue";

const PAGE_SIZE = 10;

const pageCount = ref(1);
const pageNum = ref(1);

const ascending = ref(true);
const orderBy = ref("");
const orderByIcons = ref({});

const attributes = ref([]);
const entries = ref([]);

const editState = ref([]);
const editValues = ref({});

const creationVisible = ref(false);

const props = defineProps({
	entityName: String,
});

const { entityName } = toRefs(props);

function getOffset() {
	return (pageNum.value - 1) * PAGE_SIZE;
}

async function getEntityData() {
	const offset = getOffset();
	getTable(
		entityName.value,
		PAGE_SIZE,
		offset,
		ascending.value,
		orderBy.value
	).then((response) => {
		attributes.value = response.data.fields;
		entries.value = response.data.rows;
		resetEditState();
	});

	getEntryCount(entityName.value).then((res) => {
		pageCount.value = Math.ceil(res.data / PAGE_SIZE);
	});
}

function onDelete(rowIndex) {
	const rowIdentifers = unref(entries.value)[rowIndex];
	deleteRow(entityName.value, rowIdentifers).then((x) => {
		if (!x.data) alert("Action prohibited due to constraints");

		getEntityData();
	});
}

function onCreateClicked() {
	creationVisible.value = true;
}

function onCreateSubmit(attributeValues) {
	createRow(entityName.value, attributeValues).then((x) => {
		if (!x.data) alert("Action prohibited due to constraints");

		getEntityData();
	});
}

function resetEditState() {
	const newEditState = [];
	for (let i = 0; i < entries.value.length; i++) {
		newEditState[i] = false;
	}
	editState.value = newEditState;
}

function onEditClicked(index) {
	resetEditState();
	editState.value[index] = true;

	const newEditValues = {};
	attributes.value.forEach((element) => {
		newEditValues[element.name] = entries.value[index][element.name];
	});
	editValues.value = newEditValues;
}

function onEditSubmit(rowIndex) {
	const rowIdentifers = unref(entries.value)[rowIndex];
	const newValues = unref(editValues);
	const tableName = unref(entityName);
	modifyRow(tableName, rowIdentifers, newValues).then((x) => {
		if (!x.data) alert("Action prohibited due to constraints");

		getEntityData();
	});
}

function cancelEdit(index) {
	editState.value[index] = false;
}

function onColumnTitleClicked(attributeName) {
	resetOrderByIcons();

	const oldOrderByValue = orderBy.value;
	if (attributeName != oldOrderByValue) {
		orderBy.value = attributeName;
		ascending.value = true;
	} else {
		ascending.value = !ascending.value;
	}
	setOrderByIcon(attributeName);
	getEntityData();
}

function resetOrderByIcons() {
	const newOrderByIcons = {};
	attributes.value.forEach((element) => {
		newOrderByIcons[element.name] = "";
	});
	orderByIcons.value = newOrderByIcons;
}

function setOrderByIcon(attributeName) {
	const isAscending = ascending.value;
	const icon = isAscending ? "mdi-chevron-up" : "mdi-chevron-down";
	orderByIcons.value[attributeName] = icon;
}

async function initialize() {
	getEntityData();
}

watch(pageNum, () => {
	getEntityData();
});

initialize();
</script>
