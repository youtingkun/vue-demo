<template>
	<form @submit.prevent="submit" class="vld-parent" ref="formContainer">
		<!-- your form inputs goes here-->
		<label><input type="checkbox" v-model="fullPage" />Full page?</label>
		<button type="submit">Login</button>
		<el-button @click="changeLang">切换语言</el-button>
		{{ $t('hello') }}
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
		changeLang() {
			this.$i18n.locale = this.$i18n.locale === 'zh' ? 'en' : 'zh';
		},
	},
};
</script>
