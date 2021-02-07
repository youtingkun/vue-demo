<template>
	<div>
		<canvas id="c"></canvas>
		<div class="split">
			<div id="view1" tabindex="1"></div>
			<div id="view2" tabindex="2"></div>
		</div>
	</div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
export default {
	name: '',
	data() {
		return {};
	},
	mounted() {
		function main() {
			const canvas = document.querySelector('#c');
			const renderer = new THREE.WebGLRenderer({ canvas });
			const view1Elem = document.querySelector('#view1');

			const fov = 40;
			const aspect = 2; // the canvas default
			const near = 0.1;
			const far = 1000;
			const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
			camera.position.set(0, 50, 0);
			camera.up.set(0, 0, 1);
			camera.lookAt(0, 0, 0);

			const controls = new OrbitControls(camera, view1Elem);
			controls.target.set(0, 5, 0);
			controls.update();

			const scene = new THREE.Scene();

			const geometry = new THREE.BoxGeometry(1, 1, 1);
			const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
			const cube = new THREE.Mesh(geometry, material);
			scene.add(cube);

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

			function render() {
				if (resizeRendererToDisplaySize(renderer)) {
					const canvas = renderer.domElement;
					camera.aspect = canvas.clientWidth / canvas.clientHeight;
					camera.updateProjectionMatrix();
				}
				controls.update();
				renderer.render(scene, camera);

				requestAnimationFrame(render);
			}

			requestAnimationFrame(render);
		}
		main();
	},
};
</script>

<style scoped>
#c {
	width: 100%;
	height: 100%;
	display: block;
}
.split {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
}
.split > div {
	width: 100%;
	height: 100%;
}
</style>
