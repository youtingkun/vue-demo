<template>
	<canvas id="c"></canvas>
</template>

<script>
import * as THREE from 'three';
import { GUI } from 'three/examples/jsm/libs/dat.gui.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js';
export default {
	name: '',
	data() {
		return {};
	},
	mounted() {
		function main() {
			const canvas = document.querySelector('#c');
			const renderer = new THREE.WebGLRenderer({ canvas });
			RectAreaLightUniformsLib.init();

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
			const axesHelper = new THREE.AxesHelper(150);
			scene.add(axesHelper);
			scene.background = new THREE.Color('black');

			// 添加网格
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
				const planeMat = new THREE.MeshStandardMaterial({
					map: texture,
					side: THREE.DoubleSide,
				});
				const mesh = new THREE.Mesh(planeGeo, planeMat);
				mesh.rotation.x = Math.PI * -0.5;
				scene.add(mesh);
			}
			// 添加正方体
			{
				const cubeSize = 4;
				const cubeGeo = new THREE.BoxBufferGeometry(cubeSize, cubeSize, cubeSize);
				const cubeMat = new THREE.MeshStandardMaterial({ color: '#CA8' });
				const mesh = new THREE.Mesh(cubeGeo, cubeMat);
				mesh.position.set(cubeSize + 1, cubeSize / 2, 0);
				scene.add(mesh);
			}
			// 添加球体
			{
				const sphereRadius = 3;
				const sphereWidthDivisions = 32;
				const sphereHeightDivisions = 16;
				const sphereGeo = new THREE.SphereBufferGeometry(
					sphereRadius,
					sphereWidthDivisions,
					sphereHeightDivisions,
				);
				const sphereMat = new THREE.MeshStandardMaterial({ color: '#CA8' });
				const mesh = new THREE.Mesh(sphereGeo, sphereMat);
				mesh.position.set(-sphereRadius - 1, sphereRadius + 2, 0);
				scene.add(mesh);
			}

			class ColorGUIHelper {
				constructor(object, prop) {
					this.object = object;
					this.prop = prop;
				}
				get value() {
					return `#${this.object[this.prop].getHexString()}`;
				}
				set value(hexString) {
					this.object[this.prop].set(hexString);
				}
			}

			// 环境光
			// const color = 0xff0000;
			// const intensity = 1;
			// const light = new THREE.AmbientLight(color, intensity);
			// scene.add(light);
			// const gui = new GUI();
			// gui.addColor(new ColorGUIHelper(light, 'color'), 'value').name('color');
			// gui.add(light, 'intensity', 0, 2, 0.01);
			// 场景光
			// const skyColor = 0xb1e1ff; // light blue
			// const groundColor = 0xb97a20; // brownish orange
			// const intensity = 1;
			// const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
			// scene.add(light);
			// const gui = new GUI();
			// gui.addColor(new ColorGUIHelper(light, 'color'), 'value').name('skyColor');
			// gui.addColor(new ColorGUIHelper(light, 'groundColor'), 'value').name('groundColor');
			// gui.add(light, 'intensity', 0, 2, 0.01);
			// 方向光
			// function makeXYZGUI(gui, vector3, name, onChangeFn) {
			// 	const folder = gui.addFolder(name);
			// 	folder.add(vector3, 'x', -100, 100).onChange(onChangeFn);
			// 	folder.add(vector3, 'y', 0, 100).onChange(onChangeFn);
			// 	folder.add(vector3, 'z', -100, 100).onChange(onChangeFn);
			// 	folder.open();
			// }
			// {
			// 	const color = 0xffffff;
			// 	const intensity = 1;
			// 	const light = new THREE.DirectionalLight(color, intensity);
			// 	// light.position.set(0, 10, 0);
			// 	light.target.position.set(-5, 0, 0);
			// 	scene.add(light);
			// 	scene.add(light.target);
			// 	const helper = new THREE.DirectionalLightHelper(light);
			// 	scene.add(helper);
			// 	function updateLight() {
			// 		light.target.updateMatrixWorld();
			// 		helper.update();
			// 	}
			// 	updateLight();
			// 	const gui = new GUI();
			// 	gui.addColor(new ColorGUIHelper(light, 'color'), 'value').name('color');
			// 	gui.add(light, 'intensity', 0, 2, 0.01);
			// 	makeXYZGUI(gui, light.position, 'position', updateLight);
			// 	makeXYZGUI(gui, light.target.position, 'target', updateLight);
			// }
			// 点光源
			// function makeXYZGUI(gui, vector3, name, onChangeFn) {
			// 	const folder = gui.addFolder(name);
			// 	folder.add(vector3, 'x', -10, 10).onChange(onChangeFn);
			// 	folder.add(vector3, 'y', 0, 10).onChange(onChangeFn);
			// 	folder.add(vector3, 'z', -10, 10).onChange(onChangeFn);
			// 	folder.open();
			// }
			// {
			// 	const color = 0xffffff;
			// 	const intensity = 1;
			// 	const light = new THREE.PointLight(color, intensity);
			// 	light.position.set(0, 10, 0);
			// 	scene.add(light);
			// 	const helper = new THREE.PointLightHelper(light);
			// 	scene.add(helper);
			// 	function updateLight() {
			// 		helper.update();
			// 	}
			// 	const gui = new GUI();
			// 	gui.addColor(new ColorGUIHelper(light, 'color'), 'value').name('color');
			// 	gui.add(light, 'intensity', 0, 2, 0.01);
			// 	gui.add(light, 'distance', 0, 40).onChange(updateLight);
			// 	makeXYZGUI(gui, light.position, 'position');
			// }
			// 聚光灯
			// class DegRadHelper {
			// 	constructor(obj, prop) {
			// 		this.obj = obj;
			// 		this.prop = prop;
			// 	}
			// 	get value() {
			// 		return THREE.MathUtils.radToDeg(this.obj[this.prop]);
			// 	}
			// 	set value(v) {
			// 		this.obj[this.prop] = THREE.MathUtils.degToRad(v);
			// 	}
			// }
			// function makeXYZGUI(gui, vector3, name, onChangeFn) {
			// 	const folder = gui.addFolder(name);
			// 	folder.add(vector3, 'x', -10, 10).onChange(onChangeFn);
			// 	folder.add(vector3, 'y', 0, 10).onChange(onChangeFn);
			// 	folder.add(vector3, 'z', -10, 10).onChange(onChangeFn);
			// 	folder.open();
			// }
			// {
			// 	const color = 0xffffff;
			// 	const intensity = 1;
			// 	const light = new THREE.SpotLight(color, intensity);
			// 	light.position.set(0, 10, 0);
			// 	light.target.position.set(-5, 0, 0);
			// 	scene.add(light);
			// 	scene.add(light.target);
			// 	const helper = new THREE.SpotLightHelper(light);
			// 	scene.add(helper);
			// 	function updateLight() {
			// 		light.target.updateMatrixWorld();
			// 		helper.update();
			// 	}
			// 	updateLight();
			// 	const gui = new GUI();
			// 	gui.addColor(new ColorGUIHelper(light, 'color'), 'value').name('color');
			// 	gui.add(light, 'intensity', 0, 2, 0.01);
			// 	gui.add(light, 'distance', 0, 40).onChange(updateLight);
			// 	gui.add(new DegRadHelper(light, 'angle'), 'value', 0, 90).name('angle').onChange(updateLight);
			// 	gui.add(light, 'penumbra', 0, 1, 0.01);
			// 	makeXYZGUI(gui, light.position, 'position', updateLight);
			// 	makeXYZGUI(gui, light.target.position, 'target', updateLight);
			// }

			// 矩形区域光
			class DegRadHelper {
				constructor(obj, prop) {
					this.obj = obj;
					this.prop = prop;
				}
				get value() {
					return THREE.MathUtils.radToDeg(this.obj[this.prop]);
				}
				set value(v) {
					this.obj[this.prop] = THREE.MathUtils.degToRad(v);
				}
			}
			function makeXYZGUI(gui, vector3, name, onChangeFn) {
				const folder = gui.addFolder(name);
				folder.add(vector3, 'x', -10, 10).onChange(onChangeFn);
				folder.add(vector3, 'y', 0, 10).onChange(onChangeFn);
				folder.add(vector3, 'z', -10, 10).onChange(onChangeFn);
				folder.open();
			}
			{
				const color = 0xffffff;
				const intensity = 5;
				const width = 12;
				const height = 4;
				const light = new THREE.RectAreaLight(color, intensity, width, height);
				light.position.set(0, 10, 0);
				light.rotation.x = THREE.MathUtils.degToRad(-90);
				scene.add(light);

				const helper = new RectAreaLightHelper(light);
				light.add(helper);

				function updateLight() {
					helper.update();
				}

				const gui = new GUI();
				gui.addColor(new ColorGUIHelper(light, 'color'), 'value').name('color');
				gui.add(light, 'intensity', 0, 10, 0.01);
				gui.add(light, 'width', 0, 20).onChange(updateLight);
				gui.add(light, 'height', 0, 20).onChange(updateLight);
				gui.add(new DegRadHelper(light.rotation, 'x'), 'value', -180, 180)
					.name('x rotation')
					.onChange(updateLight);
				gui.add(new DegRadHelper(light.rotation, 'y'), 'value', -180, 180)
					.name('y rotation')
					.onChange(updateLight);
				gui.add(new DegRadHelper(light.rotation, 'z'), 'value', -180, 180)
					.name('z rotation')
					.onChange(updateLight);

				makeXYZGUI(gui, light.position, 'position', updateLight);
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

			function render() {
				if (resizeRendererToDisplaySize(renderer)) {
					const canvas = renderer.domElement;
					camera.aspect = canvas.clientWidth / canvas.clientHeight;
					camera.updateProjectionMatrix();
				}

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
