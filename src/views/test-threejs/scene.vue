<template>
	<canvas id="c"></canvas>
</template>

<script>
import * as THREE from 'three';
export default {
	name: '',
	data() {
		return {};
	},
	mounted() {
		function main() {
			const canvas = document.querySelector('#c');
			const renderer = new THREE.WebGLRenderer({ canvas });

			const fov = 40;
			const aspect = 2; // the canvas default
			const near = 0.1;
			const far = 1000;
			const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
			camera.position.set(0, 150, 0);
			camera.up.set(0, 0, 1);
			camera.lookAt(0, 0, 0);

			const scene = new THREE.Scene();

			{
				const color = 0xffffff;
				const intensity = 3;
				const light = new THREE.PointLight(color, intensity);
				scene.add(light);
			}

			const objects = [];

			const radius = 1;
			const widthSegments = 6;
			const heightSegments = 6;
			const sphereGeometry = new THREE.SphereBufferGeometry(radius, widthSegments, heightSegments);

			const sunMaterial = new THREE.MeshPhongMaterial({ emissive: 0xffff00 });
			const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
			sunMesh.scale.set(5, 5, 5);
			scene.add(sunMesh);
			objects.push(sunMesh);

			const earthMaterial = new THREE.MeshPhongMaterial({ color: 0x2233ff, emissive: 0x112244 });
			const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
			earthMesh.position.x = 10;
			sunMesh.add(earthMesh);
			objects.push(earthMesh);

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
				time *= 0.001;

				if (resizeRendererToDisplaySize(renderer)) {
					const canvas = renderer.domElement;
					camera.aspect = canvas.clientWidth / canvas.clientHeight;
					camera.updateProjectionMatrix();
				}

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
};
</script>

<style scoped>
#c {
	width: 100%;
	height: 100%;
	display: block;
}
</style>
