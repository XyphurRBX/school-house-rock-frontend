import Axios from "axios";

function getTable(tableName, limit, offset, orderBy, ascending) {
	return Axios.get("/api/main/table", {
		tableName: tableName,
		limit: limit,
		offset: offset,
		orderBy: orderBy,
		ascending: ascending,
	});
}

function getEntryCount(tableName) {
	return Axios.get("/api/main/entrycount", {
		tableName: tableName,
	});
}

function deleteRow(tableName, rowIdentifiers) {
	return Axios.delete("/api/main/row", {
		tableName: tableName,
		rowIdentifiers: rowIdentifiers,
	});
}

function createRow(tableName, values) {
	return Axios.post("/api/main/row", {
		tableName: tableName,
		values: values,
	});
}

function modifyRow(tableName, rowIdentifiers, newValues) {
	return Axios.patch("/api/main/row", {
		tableName: tableName,
		rowIdentifiers: rowIdentifiers,
		values: newValues,
	});
}

export { getTable, getEntryCount, deleteRow, createRow, modifyRow };
