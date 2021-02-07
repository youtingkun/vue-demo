<template>
	<div>
		<div>
			<el-button @click="handleGeometry('BoxGeometry')">BoxGeometry </el-button>
			<el-button @click="handleGeometry('CylinderGeometry')">CylinderGeometry </el-button>
			<el-button @click="handleGeometry('ConeGeometry')">ConeGeometry </el-button>
			<el-button @click="handleGeometry('CircleGeometry')">CircleGeometry </el-button>
			<el-button @click="handleGeometry('DodecahedronGeometry')">DodecahedronGeometry </el-button>
			<el-button @click="handleGeometry('IcosahedronGeometry')">IcosahedronGeometry </el-button>
			<el-button @click="handleGeometry('LatheGeometry')">LatheGeometry </el-button>
			<el-button @click="handleGeometry('OctahedronGeometry')">OctahedronGeometry </el-button>
			<el-button @click="handleGeometry('PlaneGeometry')">PlaneGeometry </el-button>
			<el-button @click="handleGeometry('RingGeometry')">RingGeometry </el-button>
			<el-button @click="handleGeometry('SphereGeometry')">SphereGeometry </el-button>
			<el-button @click="handleGeometry('TetrahedronGeometry')">TetrahedronGeometry </el-button>
			<el-button @click="handleGeometry('TorusGeometry')">TorusGeometry </el-button>
			<el-button @click="handleGeometry('TorusKnotGeometry')">TorusKnotGeometry </el-button>
			<el-button @click="handleGeometry('ParametricGeometry')">ParametricGeometry </el-button>
			<el-button @click="handleGeometry('TubeGeometry')">TubeGeometry </el-button>
			<el-button @click="handleGeometry('ShapeGeometry')">ShapeGeometry </el-button>
			<el-button @click="handleGeometry('ExtrudeGeometry')">ExtrudeGeometry </el-button>
		</div>
		<div id="c"></div>
		<canvas id="cc"></canvas>
	</div>
</template>

<script>
import mainFcn from './geometry-demo.js';

export default {
	name: '',
	components: {},
	props: {},
	data() {
		return {
			geometryName: 'BoxGeometry',
		};
	},
	computed: {},
	watch: {},
	methods: {
		handleGeometry(name) {
			this.geometryName = name;
			mainFcn(name);
		},
	},
	created() {},
	mounted() {
		mainFcn(this.geometryName);
	},
	beforeCreate() {},
	beforeMount() {},
	beforeUpdate() {},
	updated() {},
	beforeDestroy() {},
	destroyed() {},
	activated() {},
};
</script>
<style lang="scss" scoped>
#c {
	width: 100%;
	height: 100%;
	display: block;
}
</style>
