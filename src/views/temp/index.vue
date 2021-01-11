<template>
	<div>
		<form @submit.prevent="submit" class="vld-parent" ref="formContainer">
			<!-- your form inputs goes here-->
			<label><input type="checkbox" v-model="fullPage" />Full page?</label>
			<button type="submit">Login</button>
			<el-button @click="changeLang">切换语言</el-button>
			{{ $t('hello') }}
		</form>
		<div>原数据：{{ aesData }}加密后的数据：{{ encryptData }}解密后的数据：{{ decryptData }}</div>
		<el-button @click="encryptDataF">加密数据</el-button>
	</div>
</template>

<script>
import crypto from '@/utils/crypto';
export default {
	data() {
		return {
			fullPage: false,
			aesData: { a: 1, b: 2 },
			encryptData: '',
			decryptData: '',
		};
	},
	mounted() {},
	methods: {
		encryptDataF() {
			this.encryptData = crypto.encrypt(JSON.stringify(this.aesData));
			this.decryptData = crypto.decrypt(this.encryptData);
		},
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
