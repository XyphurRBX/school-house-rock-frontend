import Axios from "axios";

function signup(username, password) {
	return Axios.post("/signup", {
		username: username,
		password: password,
	});
}

function login(username, password) {
	return Axios.post("/authenticate", {
		username: username,
		password: password,
	});
}

export { signup, login };
