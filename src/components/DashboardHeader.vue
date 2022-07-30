<template>
	<v-app-bar color="primary" prominent>
		<v-app-bar-nav-icon
			variant="text"
			@click.stop="drawer = !drawer"
		></v-app-bar-nav-icon>

		<v-toolbar-title>{{ title }}</v-toolbar-title>

		<v-spacer></v-spacer>

		<v-menu bottom left v-model="contextMenu">
			<template v-slot:activator="{ props }">
				<v-btn dark icon v-bind="props">
					<v-icon>mdi-dots-vertical</v-icon>
				</v-btn>
			</template>

			<ContextMenuDropdown />
		</v-menu>
	</v-app-bar>

	<NavigationDrawer v-model="drawer" />
</template>

<script setup>
import { ref, defineProps } from "vue";

import ContextMenuDropdown from "./DashboardContextMenuDropdown.vue";
import NavigationDrawer from "./DashboardNavigationDrawer.vue";

defineProps({
	title: String,
});

const drawer = ref(false);
const contextMenu = ref(false);
</script>
