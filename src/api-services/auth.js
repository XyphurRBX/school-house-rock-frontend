import Axios from "axios";

function signup(username, password) {
	return Axios.post("/signup", {
		username: username,
		password: password,
	});
}

export { signup };
