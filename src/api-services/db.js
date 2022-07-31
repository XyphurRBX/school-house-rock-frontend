import axios from "axios";
import router from "../router";
import store from "../store";

axios.interceptors.response.use(
	(res) => {
		return res;
	},
	(err) => {
		if (err.response.status == 401) {
			store.dispatch("clearAuthState");
			router.push("login");
		}
		Promise.reject(err);
	}
);

function getTable(tableName, limit, offset, ascending, orderBy) {
	return axios.post("/api/main/table", {
		tableName: tableName,
		limit: limit,
		offset: offset,
		orderBy: orderBy,
		ascending: ascending,
	});
}

function getEntryCount(tableName) {
	return axios.post("/api/main/entrycount", {
		tableName: tableName,
	});
}

function deleteRow(tableName, rowIdentifiers) {
	return axios.delete("/api/main/row", {
		data: {
			tableName: tableName,
			rowIdentifiers: rowIdentifiers,
		},
	});
}

function createRow(tableName, values) {
	return axios.post("/api/main/row", {
		tableName: tableName,
		values: values,
	});
}

function modifyRow(tableName, rowIdentifiers, newValues) {
	return axios.patch("/api/main/row", {
		tableName: tableName,
		rowIdentifiers: rowIdentifiers,
		values: newValues,
	});
}

export { getTable, getEntryCount, deleteRow, createRow, modifyRow };
