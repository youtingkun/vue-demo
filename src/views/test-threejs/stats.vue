<template>
	<div id="canvas-frame"></div>
</template>

<script>
import * as THREE from 'three';
import Stats from 'stats.js';
export default {
	name: '',
	data() {
		return {};
	},
	mounted() {
		var renderer, width, height;
		var stats;
		function initThree() {
			width = document.getElementById('canvas-frame').clientWidth;
			height = document.getElementById('canvas-frame').clientHeight;
			renderer = new THREE.WebGLRenderer({
				antialias: true,
			});
			renderer.setSize(width, height);
			document.getElementById('canvas-frame').appendChild(renderer.domElement);
			renderer.setClearColor(0xffffff, 1.0);

			stats = new Stats();
			stats.domElement.style.position = 'absolute';
			stats.domElement.style.left = '0px';
			stats.domElement.style.top = '0px';
			document.getElementById('canvas-frame').appendChild(stats.domElement);
		}

		var camera;
		function initCamera() {
			camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
			camera.position.x = 0;
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
			light = new THREE.PointLight(0x00ff00);
			light.position.set(0, 0, 300);
			scene.add(light);
		}

		var mesh;
		function initObject() {
			mesh = new THREE.Mesh();
			var geometry = new THREE.CylinderGeometry(100, 150, 400);
			var material = new THREE.MeshLambertMaterial({ color: 0xffff00 });
			mesh.geometry = geometry;
			mesh.material = material;
			mesh.position.set(new THREE.Vector3(0, 0, 0));
			scene.add(mesh);
		}

		function threeStart() {
			initThree();
			initCamera();
			initScene();
			initLight();
			initObject();
			animation();
		}
		function animation() {
			//renderer.clear();
			//camera.position.x =camera.position.x +1;
			mesh.position.x -= 1;
			renderer.render(scene, camera);
			requestAnimationFrame(animation);
			stats.update();
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
