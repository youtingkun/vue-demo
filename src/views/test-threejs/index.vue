<template>
	<div class="test"></div>
</template>
<script>
import * as THREE from 'three';
export default {
	mounted() {
		this.init();
	},
	methods: {
		init() {
			// 声明一个场景
			var scene = new THREE.Scene();
			// 声明一个相机
			var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
			camera.position.z = 5;
			// 声明一个渲染器
			var renderer = new THREE.WebGLRenderer();
			renderer.setSize(window.innerWidth, window.innerHeight);
			let divEl = document.querySelector('div.test');
			divEl.appendChild(renderer.domElement);
			// 添加一个物体到场景中
			var geometry = new THREE.CubeGeometry(1, 1, 1);
			var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
			var cube = new THREE.Mesh(geometry, material);
			scene.add(cube);
			// 实时渲染
			function render() {
				requestAnimationFrame(render);
				cube.rotation.x += 0.1;
				cube.rotation.y += 0.1;
				renderer.render(scene, camera);
			}
			render();
		},
	},
};
</script>

<style>
canvas {
	width: 100%;
	height: 100%;
}
</style>
