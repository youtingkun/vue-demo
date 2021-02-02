<template>
	<div id="canvas-frame"></div>
</template>

<script>
import * as THREE from 'three';
export default {
	name: '',
	data() {
		return {};
	},
	mounted() {
		var renderer, width, height;
		function initThree() {
			width = document.getElementById('canvas-frame').clientWidth;
			height = document.getElementById('canvas-frame').clientHeight;
			renderer = new THREE.WebGLRenderer({
				antialias: true,
			});
			renderer.setSize(width, height);
			document.getElementById('canvas-frame').appendChild(renderer.domElement);
			renderer.setClearColor(0xffffff, 1.0);
		}

		var camera;
		function initCamera() {
			camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
			camera.position.x = 600;
			camera.position.y = 0;
			camera.position.z = 600;
			camera.up.x = 0;
			camera.up.y = 1;
			camera.up.z = 0;
			camera.lookAt(0, 0, 0);
		}

		var scene;
		function initScene() {
			scene = new THREE.Scene();
		}

		var light;
		function initLight() {
			light = new THREE.AmbientLight(0xff0000);
			light.position.set(100, 100, 200);
			scene.add(light);
		}

		var cube;
		function initObject() {
			var geometry = new THREE.CubeGeometry(200, 100, 50, 4, 4);
			var material = new THREE.MeshLambertMaterial({ color: 0xffffff });
			var mesh = new THREE.Mesh(geometry, material);
			mesh.position.set(new THREE.Vector3(0, 0, 0));
			scene.add(mesh);
		}

		function threeStart() {
			initThree();
			initCamera();
			initScene();
			initLight();
			initObject();
			renderer.clear();
			renderer.render(scene, camera);
		}
		threeStart();
	},
};
</script>

<style scoped>
#canvas-frame {
	border: none;
	cursor: pointer;
	width: 100%;
	height: 600px;
	background-color: #eee;
}
</style>
