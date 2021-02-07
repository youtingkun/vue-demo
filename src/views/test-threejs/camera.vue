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
			// 选取canvas元素
			const canvas = document.querySelector('#c');
			const view1Elem = document.querySelector('#view1');
			const view2Elem = document.querySelector('#view2');
			const renderer = new THREE.WebGLRenderer({ canvas });

			// 初始化相机1
			const fov = 45;
			const aspect = 2; // the canvas default
			const near = 5;
			const far = 100;
			const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
			camera.position.set(0, 10, 20);

			// 添加CameraHelper，用于显示camera的边框线，这里的边框线只是设置的视图1相机的边框线
			const cameraHelper = new THREE.CameraHelper(camera);

			// 添加gui参数控制，这里的参数控制也是只控制的视图1的，视图2相机没有被控制
			class MinMaxGUIHelper {
				constructor(obj, minProp, maxProp, minDif) {
					this.obj = obj;
					this.minProp = minProp;
					this.maxProp = maxProp;
					this.minDif = minDif;
				}
				get min() {
					return this.obj[this.minProp];
				}
				set min(v) {
					this.obj[this.minProp] = v;
					this.obj[this.maxProp] = Math.max(this.obj[this.maxProp], v + this.minDif);
				}
				get max() {
					return this.obj[this.maxProp];
				}
				set max(v) {
					this.obj[this.maxProp] = v;
					this.min = this.min; // this will call the min setter
				}
			}
			const gui = new GUI();
			gui.add(camera, 'fov', 1, 180);
			const minMaxGUIHelper = new MinMaxGUIHelper(camera, 'near', 'far', 0.1);
			gui.add(minMaxGUIHelper, 'min', 0.1, 50, 0.1).name('near');
			gui.add(minMaxGUIHelper, 'max', 0.1, 50, 0.1).name('far');

			// 使视图1可以被控制
			const controls = new OrbitControls(camera, view1Elem);
			controls.target.set(0, 5, 0);
			controls.update();

			// 第初始化相机2，注意此处是设置的整个场景2的相机，我们所看到的相机网格其实是在视图1当中设置的，因为我们视图2的相机更远更大，所以能看到。
			const camera2 = new THREE.PerspectiveCamera(
				60, // fov
				2, // aspect
				0.1, // near
				500, // far
			);
			camera2.position.set(40, 10, 30);
			camera2.lookAt(0, 5, 0);

			// 使视图2可以被控制
			const controls2 = new OrbitControls(camera2, view2Elem);
			controls2.target.set(0, 5, 0);
			controls2.update();

			// 添加场景
			const scene = new THREE.Scene();
			scene.background = new THREE.Color('black');
			scene.add(cameraHelper);

			// 添加棋盘网格
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
			// 添加正方体到场景当中
			{
				const cubeSize = 4;
				const cubeGeo = new THREE.BoxBufferGeometry(cubeSize, cubeSize, cubeSize);
				const cubeMat = new THREE.MeshPhongMaterial({ color: '#8AC' });
				const mesh = new THREE.Mesh(cubeGeo, cubeMat);
				mesh.position.set(cubeSize + 1, cubeSize / 2, 0);
				scene.add(mesh);
			}
			// 添加球体到场景当中
			{
				const sphereRadius = 3;
				const sphereWidthDivisions = 32;
				const sphereHeightDivisions = 16;
				const sphereGeo = new THREE.SphereBufferGeometry(sphereRadius, sphereWidthDivisions, sphereHeightDivisions);
				const sphereMat = new THREE.MeshPhongMaterial({ color: '#CA8' });
				const mesh = new THREE.Mesh(sphereGeo, sphereMat);
				mesh.position.set(-sphereRadius - 1, sphereRadius + 2, 0);
				scene.add(mesh);
			}
			// 添加方向光到场景当中
			{
				const color = 0xffffff;
				const intensity = 1;
				const light = new THREE.DirectionalLight(color, intensity);
				light.position.set(0, 10, 0);
				light.target.position.set(-5, 0, 0);
				scene.add(light);
				scene.add(light.target);
			}

			// 当渲染窗口变换的时候，重新渲染
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

			// 计算长宽比和视图与canvas重叠部分的位置
			function setScissorForElement(elem) {
				const canvasRect = canvas.getBoundingClientRect();
				// console.log('canvasRect', canvasRect);
				const elemRect = elem.getBoundingClientRect();
				// console.log('elemRect', elemRect);

				// compute a canvas relative rectangle
				const right = Math.min(elemRect.right, canvasRect.right) - canvasRect.left;
				const left = Math.max(0, elemRect.left - canvasRect.left);
				const bottom = Math.min(elemRect.bottom, canvasRect.bottom) - canvasRect.top;
				const top = Math.max(0, elemRect.top - canvasRect.top);

				const width = Math.min(canvasRect.width, right - left);
				const height = Math.min(canvasRect.height, bottom - top);

				// setup the scissor to only render to that part of the canvas
				const positiveYUpBottom = canvasRect.height - bottom;
				// 剪切绘制的视图区域
				renderer.setScissor(left, positiveYUpBottom, width, height);
				// 绘制视图区域的大小
				renderer.setViewport(left, positiveYUpBottom, width, height);

				// return the aspect
				return width / height;
			}

			function render() {
				resizeRendererToDisplaySize(renderer);

				// turn on the scissor
				renderer.setScissorTest(true);

				// render the original view
				{
					const aspect = setScissorForElement(view1Elem);

					// adjust the camera for this aspect
					camera.aspect = aspect;
					camera.updateProjectionMatrix();
					cameraHelper.update();

					// don't draw the camera helper in the original view
					cameraHelper.visible = false;

					scene.background.set(0x000000);

					// render
					renderer.render(scene, camera);
				}

				// render from the 2nd camera
				{
					const aspect = setScissorForElement(view2Elem);

					// adjust the camera for this aspect
					camera2.aspect = aspect;
					camera2.updateProjectionMatrix();

					// draw the camera helper in the 2nd view
					// 让视图1的相机边框线在视图2当中显示
					cameraHelper.visible = true;

					scene.background.set(0x000040);

					renderer.render(scene, camera2);
				}

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
