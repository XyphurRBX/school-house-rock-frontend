import Axios from "axios";

function getSignupEnabledStatus() {
	return Axios.get("/config/signupenabled");
}

export { getSignupEnabledStatus };
