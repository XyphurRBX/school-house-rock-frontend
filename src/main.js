import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createVuetify } from "vuetify";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { loadFonts } from "./plugins/webfontloader";
import Axios from "axios";

const vuetify = createVuetify({
	components,
	directives,
});

loadFonts();

Axios.defaults.baseURL = import.meta.env.VITE_API_ENDPOINT;
Axios.defaults.withCredentials = true;

const app = createApp(App);
app.use(router);
app.use(store);
app.use(vuetify);
app.mount("#app");
