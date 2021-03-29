<template>
	<div>
		<div>{{ count }}obj:{{ obj.a }}</div>
		<form @submit.prevent="submit" class="vld-parent" ref="formContainer">
			<!-- your form inputs goes here-->
			<label><input type="checkbox" v-model="fullPage" />Full page?</label>
			<button type="submit">Login</button>
			<el-button @click="changeLang">切换语言</el-button>
			{{ $t('hello') }}
		</form>
		<div>原数据：{{ aesData }}加密后的数据：{{ encryptData }}解密后的数据：{{ decryptData }}</div>
		<el-button @click="encryptDataF">加密数据</el-button>
		<el-button @click="testNpmPackage">testMyNpm</el-button>
		<lang-select></lang-select>
	</div>
</template>

<script>
import crypto from '@/utils/crypto';
import npmDemo from 'ytk-utils';
import moment from 'moment';
export default {
	data() {
		return {
			fullPage: false,
			aesData: { a: 1, b: 2 },
			encryptData: '',
			decryptData: '',
			count: 0,
			obj: {},
		};
	},
	beforeCreate() {},
	beforeDestroy() {},
	mounted() {
		let _this = this;
		requestAnimationFrame(function () {
			_this.count++;
		});
		console.log(
			this.overdueDay(
				moment('2021-03-28T23:46:17.000+0000').valueOf(),
				moment('2021-03-29T04:35:07.000+0000').valueOf(),
				2,
			),
		);
	},
	methods: {
		overdueDay(shouldBackTime, lastBackTime, status) {
			let lastTime,
				firstTime = shouldBackTime;
			if (lastBackTime && (status === 6 || status === 22 || status === 8)) {
				lastTime = lastBackTime;
				console.log('已还');
			} else {
				console.log('未还');
				lastTime = new Date().getTime();
			}

			const lastDay = this.timeToDay(lastTime);
			const firstDay = this.timeToDay(firstTime);
			debugger;
			return this.timeToDay(lastTime) - this.timeToDay(firstTime);
		},

		timeToDay(time) {
			return parseInt(time / (24 * 60 * 60 * 1000));
		},
		testNpmPackage() {
			const my = new npmDemo();
			my.f1();
		},
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
