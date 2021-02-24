<template>
	<div>
		<div>
			<el-button @click="handleMetarial('MeshBasicMaterial')">MeshBasicMaterial</el-button>
			<el-button @click="handleMetarial('MeshLambertMaterial')">MeshLambertMaterial</el-button>
			<el-button @click="handleMetarial('MeshMatcapMaterial')">MeshMatcapMaterial</el-button>
			<el-button @click="handleMetarial('MeshPhongMaterial')">MeshPhongMaterial</el-button>
			<el-button @click="handleMetarial('MeshToonMaterial')">MeshToonMaterial</el-button>
			<el-button @click="handleMetarial('MeshStandardMaterial')">MeshStandardMaterial</el-button>
			<el-button @click="handleMetarial('MeshPhysicalMaterial')">MeshPhysicalMaterial</el-button>
			<el-button @click="handleMetarial('MeshDepthMaterial')">MeshDepthMaterial</el-button>
			<el-button @click="handleMetarial('MeshNormalMaterial')">MeshNormalMaterial</el-button>
			<el-button @click="handleMetarial('LineBasicMaterial')">LineBasicMaterial</el-button>
		</div>
		<canvas id="cc"></canvas>
	</div>
</template>

<script>
import mainFcn from './metarial-demo.js';
export default {
	name: '',
	data() {
		return {
			metarialName: 'MeshBasicMaterial',
		};
	},
	mounted() {
		mainFcn(this.metarialName);
	},
	methods: {
		handleMetarial(name) {
			this.metarialName = name;
			mainFcn(name);
		},
	},
};
</script>

<style scoped>
#cc {
	width: 100%;
	height: 100%;
	display: block;
}
</style>
