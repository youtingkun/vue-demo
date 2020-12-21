<template>
	<form @submit.prevent="submit" class="vld-parent" ref="formContainer">
		<!-- your form inputs goes here-->
		<label><input type="checkbox" v-model="fullPage" />Full page?</label>
		<button type="submit">Login</button>
	</form>
</template>

<script>
export default {
	data() {
		return {
			fullPage: false,
		};
	},
	methods: {
		submit() {
			let loader = this.$loading.show({
				// Optional parameters
				container: this.fullPage ? null : this.$refs.formContainer,
				canCancel: true,
				onCancel: this.onCancel,
			});
			// simulate AJAX
			setTimeout(() => {
				loader.hide();
			}, 5000);
		},
		onCancel() {
			console.log('User cancelled the loader.');
		},
	},
};
</script>
