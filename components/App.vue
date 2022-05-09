<template>
	<b-container class="mt-3">

		<b-alert show :variant="`${task.done ? 'success' : 'danger'}`">
			<h5 class="text-monospace text-dark text-center">{{ task.content }}</h5>
		</b-alert>
		<div class="text-right">
			<b-button class="text-white mr-2"  variant="warning" @click="toggleDone">{{ task.done ? 'Undo' : 'Done' }}</b-button>

			<b-button  variant="danger" @click="removeTask" class="delete">Delete</b-button>
		</div>
	</b-container>
</template>

<script>
export default {
	props: ['task'],
	methods: {
		toggleDone() {
			this.$store.commit('TOGGLE_TASK', this.task);

		},
		removeTask() {
			this.$store.commit('REMOVE_TASK', this.task);
		}
	}
}
</script>