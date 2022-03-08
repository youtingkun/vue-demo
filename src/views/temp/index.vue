<template>
	<div>
		{{ temporal }}
		<ytk-button></ytk-button>
		<el-button @click="downloadByUrl('https://oss-aliyun.youtingkun.com/Stanbicbank.csv')">下载</el-button>
	</div>
</template>

<script>
import crypto from '@/utils/crypto';
import { getQueryString } from '@youtingkun/utils';

import { Game, GameObject, resource, RESOURCE_TYPE } from '@eva/eva.js';
import { RendererSystem } from '@eva/plugin-renderer';
import { Img, ImgSystem } from '@eva/plugin-renderer-img';
import { JSEncrypt } from 'jsencrypt';
import qs from 'qs';
import moment from 'moment';
import { Temporal } from '@js-temporal/polyfill';

export default {
	data() {
		return {
			temporal: '',
			fullPage: false,
			aesData: { a: 1, b: 2 },
			encryptData: '',
			decryptData: '',
			count: 0,
			obj: {},
			a: this.$t('hello'),
		};
	},
	beforeCreate() {},
	beforeDestroy() {},
	mounted() {
		this.temporal = new Temporal.ZonedDateTime(0n, 'Asia/Shanghai', 'chinese');
		let q = getQueryString();
		// console.log(q);
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
		this.evaRender();
		let jse = new JSEncrypt();
		jse.setPublicKey(
			'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCRXYFYTGI9uVipfl9P5loLAWLRIQPpSznBc1ACIpCO/ptKYLXjzunWz2TyCj5OV1yjs9pEIcyOnxs6ESplsUOsEakf6wDgox6sU3A51mQmQlm6ALxtfguurZGOJ0Ksg/gL1q97YWTSMsH9R1slDV95nvMKsQAd4Yd/6i+2/ihaxQIDAQAB',
		);
		let passowrd = jse.decrypt(
			'KlTybo0Kpax/PMUhz5jkxlXu45VrYRr4mqo11jwiluE=.897b24ff5bfd0270b97818059a9a33d9dbd598890faf3d8178c8541d1ff26ba6',
		);
		console.log('passowrd', passowrd);
		this.decodeParam();
	},
	methods: {
		decodeParam() {
			const searchUrl = window.location.search.split('?')[1] || window.location.hash.split('?')[1] || '';
			let b = { name: 'you ting kun', sex: '1' };
			console.log(qs.parse(searchUrl), searchUrl);
			console.log(qs.stringify(b));
		},
		downloadByUrl(url) {
			let fileName = url.substring(url.lastIndexOf('/') + 1, url.length);
			let link = document.createElement('a');
			link.style.display = 'none';
			link.download = fileName;
			link.href = url;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		},
		evaRender() {
			resource.addResource([
				{
					name: 'imageName',
					type: RESOURCE_TYPE.IMAGE,
					src: {
						image: {
							type: 'png',
							url: 'https://gw.alicdn.com/tfs/TB1DNzoOvb2gK0jSZK9XXaEgFXa-658-1152.webp',
						},
					},
					preload: true,
				},
			]);

			const game = new Game({
				systems: [
					new RendererSystem({
						canvas: document.querySelector('#canvas'),
						width: 750,
						height: 1000,
					}),
					new ImgSystem(),
				],
			});

			const image = new GameObject('image', {
				size: { width: 750, height: 1319 },
				origin: { x: 0, y: 0 },
				position: {
					x: 0,
					y: -319,
				},
				anchor: {
					x: 0,
					y: 0,
				},
			});

			image.addComponent(
				new Img({
					resource: 'imageName',
				}),
			);

			game.scene.addChild(image);
		},
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
			return this.timeToDay(lastTime) - this.timeToDay(firstTime);
		},

		timeToDay(time) {
			return parseInt(time / (24 * 60 * 60 * 1000));
		},
		testNpmPackage() {
			const my = getQueryString('a');
			console.log(getQueryString);
			console.log(my);
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
			console.log(this.$t('hello'));
		},
	},
};
</script>

<style scoped>
.box {
	background-color: aquamarine;
}
.z-demo {
	z-index: -1;
	justify-content: space-between;
}
</style>
