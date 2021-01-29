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
		this.init();
	},
	methods: {
		init() {
			var renderer;
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
				camera.position.x = 0;
				camera.position.y = 1000;
				camera.position.z = 0;
				camera.up.x = 0;
				camera.up.y = 0;
				camera.up.z = 1;
				camera.lookAt({
					x: 0,
					y: 0,
					z: 0,
				});
			}

			var scene;
			function initScene() {
				scene = new THREE.Scene();
			}

			var light;
			function initLight() {
				light = new THREE.DirectionalLight(0xff0000, 1.0, 0);
				light.position.set(100, 100, 200);
				scene.add(light);
			}

			var cube;
			function initObject() {
				var geometry = new THREE.Geometry();
				var material = new THREE.LineBasicMaterial({ vertexColors: true });
				var color1 = new THREE.Color(0x444444),
					color2 = new THREE.Color(0xff0000);

				// 线的材质可以由2点的颜色决定
				var p1 = new THREE.Vector3(-100, 0, 100);
				var p2 = new THREE.Vector3(100, 0, -100);
				geometry.vertices.push(p1);
				geometry.vertices.push(p2);
				geometry.colors.push(color1, color2);

				var line = new THREE.Line(geometry, material, THREE.LinePieces);
				scene.add(line);
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
		},
	},
};
</script>

<style scoped>
div#canvas-frame {
	border: none;
	cursor: pointer;
	width: 100%;
	height: 600px;
	background-color: #eee;
}
</style>
