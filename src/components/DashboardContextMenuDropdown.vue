<template>
	<v-card>
		<v-list>
			<v-list-item>
				<v-list-item-avatar>
					<img
						src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
						width="50"
						height="50"
					/>
				</v-list-item-avatar>

				<v-list-item-content>
					<v-list-item-title>{{ username }}</v-list-item-title>
					<v-list-item-subtitle>Admin</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
		</v-list>

		<v-divider></v-divider>

		<v-card-actions>
			<v-spacer></v-spacer>

			<v-btn block color="error" text @click="logout"> Logout </v-btn>
		</v-card-actions>
	</v-card>
</template>

<script setup>
import router from "../router";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const username = computed(() => store.state.usernameState);

function logout() {
	store.dispatch("clearAuthState");
	router.push("login");
}
</script>
