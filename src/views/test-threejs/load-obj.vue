<template>
	<canvas id="c"></canvas>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
export default {
	name: '',
	components: {},
	props: {},
	data() {
		return {};
	},
	computed: {},
	watch: {},
	methods: {},
	created() {},
	mounted() {
		function main() {
			const canvas = document.querySelector('#c');
			const renderer = new THREE.WebGLRenderer({ canvas });

			const fov = 45;
			const aspect = 2; // the canvas default
			const near = 0.1;
			const far = 100;
			const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
			camera.position.set(0, 10, 20);

			const controls = new OrbitControls(camera, canvas);
			controls.target.set(0, 5, 0);
			controls.update();

			const scene = new THREE.Scene();
			scene.background = new THREE.Color('black');

			{
				const planeSize = 40;

				const loader = new THREE.TextureLoader();
				const texture = loader.load('https://threejsfundamentals.org/threejs/resources/images/checker.png');
				texture.wrapS = THREE.RepeatWrapping;
				texture.wrapT = THREE.RepeatWrapping;
				texture.magFilter = THREE.NearestFilter;
				const repeats = planeSize / 2;
				texture.repeat.set(repeats, repeats);

				const planeGeo = new THREE.PlaneBufferGeometry(planeSize, planeSize);
				const planeMat = new THREE.MeshPhongMaterial({
					map: texture,
					side: THREE.DoubleSide,
				});
				const mesh = new THREE.Mesh(planeGeo, planeMat);
				mesh.rotation.x = Math.PI * -0.5;
				scene.add(mesh);
			}

			{
				const skyColor = 0xb1e1ff; // light blue
				const groundColor = 0xb97a20; // brownish orange
				const intensity = 1;
				const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
				scene.add(light);
			}

			{
				const color = 0xffffff;
				const intensity = 1;
				const light = new THREE.DirectionalLight(color, intensity);
				light.position.set(5, 10, 2);
				scene.add(light);
				scene.add(light.target);
			}

			const objects = [];
			const sunOrbit = new THREE.Object3D();
			{
				const mtlLoader = new MTLLoader();
				mtlLoader.load(
					'https://threejsfundamentals.org/threejs/resources/models/windmill/windmill.mtl',
					mtl => {
						console.log('mtl', mtl);
						const objLoader = new OBJLoader();
						objLoader.setMaterials(mtl);
						objLoader.load(
							'https://threejsfundamentals.org/threejs/resources/models/windmill/windmill.obj',
							root => {
								scene.add(root);
							},
						);
					},
				);
			}

			function resizeRendererToDisplaySize(renderer) {
				const canvas = renderer.domElement;
				const width = canvas.clientWidth;
				const height = canvas.clientHeight;
				const needResize = canvas.width !== width || canvas.height !== height;
				if (needResize) {
					renderer.setSize(width, height, false);
				}
				return needResize;
			}

			function render(time) {
				if (resizeRendererToDisplaySize(renderer)) {
					const canvas = renderer.domElement;
					camera.aspect = canvas.clientWidth / canvas.clientHeight;
					camera.updateProjectionMatrix();
				}
				time *= 0.0003;
				objects.forEach(obj => {
					obj.rotation.y = time;
				});

				renderer.render(scene, camera);

				requestAnimationFrame(render);
			}

			requestAnimationFrame(render);
		}

		main();
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
html,
body {
	margin: 0;
	height: 100%;
}
#c {
	width: 100%;
	height: 100%;
	display: block;
}
</style>
