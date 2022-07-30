<template>
	<v-btn color="success" @click="onClick">{{ text }}</v-btn>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
	text: String,
});

const emit = defineEmits(["click"]);

function onClick() {
	emit("click");
}
</script>
