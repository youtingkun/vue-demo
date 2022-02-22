<template>
	<canvas id="c"></canvas>
</template>

<script>
import * as THREE from 'three';
import * as dat from 'dat.gui';
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
			const gui = new dat.GUI();

			// 配置相机
			const fov = 40;
			const aspect = 2; // the canvas default
			const near = 0.1;
			const far = 1000;
			const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
			camera.position.set(30, 20, 30);
			camera.lookAt(0, 0, 0);

			// 新建场景
			const scene = new THREE.Scene();
			const axesHelper = new THREE.AxesHelper(150);
			// 插入到场景中
			scene.add(axesHelper);

			const controls = new OrbitControls(camera, canvas);
			controls.target.set(0, 1, 0);
			controls.update();

			// 配置光源
			{
				const color = 0xffffff;
				const intensity = 3;
				const light = new THREE.PointLight(color, intensity);
				scene.add(light);
			}
			// 后面需要变例这个对象数组，来控制旋转
			const objects = [];

			const radius = 1;
			const widthSegments = 6;
			const heightSegments = 6;
			const sphereGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

			// 创建一个太阳系统的基类
			const sunOrbit = new THREE.Object3D();
			scene.add(sunOrbit);

			// 创建一个太阳
			const sunMaterial = new THREE.MeshPhongMaterial({ emissive: 0xffff00 });
			const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
			// 把太阳放大5倍
			sunMesh.scale.set(5, 5, 5);
			sunOrbit.add(sunMesh);

			// 创建一个地球系统
			const earthOrbit = new THREE.Object3D();
			// 把地球系统移动到x轴的10位置
			earthOrbit.position.x = 10;
			sunOrbit.add(earthOrbit);

			// 创建一个地球
			const earthMaterial = new THREE.MeshPhongMaterial({ color: 0x2233ff, emissive: 0x112244 });
			const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
			earthOrbit.add(earthMesh);

			// 创建一个月亮系统的基类
			const moonOrbit = new THREE.Object3D();
			moonOrbit.position.x = 2;
			earthOrbit.add(moonOrbit);
			// 创建一个月亮
			const moonMaterial = new THREE.MeshPhongMaterial({ color: 0x888888, emissive: 0x222222 });
			const moonMesh = new THREE.Mesh(sphereGeometry, moonMaterial);
			moonMesh.scale.set(0.5, 0.5, 0.5);
			moonOrbit.add(moonMesh);

			// 把两个系统公转和三个球体添加到数组中，控制他们的自转和公转
			objects.push(sunOrbit);
			objects.push(sunMesh);
			objects.push(earthOrbit);
			objects.push(earthMesh);
			objects.push(moonMesh);
			console.log('objects', objects);

			// 打开/关闭轴和网格的可见性
			// dat.GUI 要求一个返回类型为bool型的属性
			// 来创建一个复选框，所以我们为 `visible`属性
			// 绑定了一个setter 和 getter。 从而让dat.GUI
			// 去操作该属性.
			class AxisGridHelper {
				constructor(node, units = 10) {
					const axes = new THREE.AxesHelper();
					axes.material.depthTest = false;
					axes.renderOrder = 2; // 在网格渲染之后再渲染
					node.add(axes);

					const grid = new THREE.GridHelper(units, units);
					grid.material.depthTest = false;
					grid.renderOrder = 1;
					node.add(grid);

					this.grid = grid;
					this.axes = axes;
					this.visible = false;
				}
				get visible() {
					return this._visible;
				}
				set visible(v) {
					this._visible = v;
					this.grid.visible = v;
					this.axes.visible = v;
				}
			}

			function makeAxisGrid(node, label, units) {
				const helper = new AxisGridHelper(node, units);
				gui.add(helper, 'visible').name(label);
			}

			makeAxisGrid(sunOrbit, 'sunOrbit', 25);
			makeAxisGrid(sunMesh, 'sunMesh');
			makeAxisGrid(earthOrbit, 'earthOrbit');
			makeAxisGrid(earthMesh, 'earthMesh');
			makeAxisGrid(moonOrbit, 'moonOrbit');
			makeAxisGrid(moonMesh, 'moonMesh');

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
			let previousTime = performance.now();
			function render(time) {
				// console.log('diffTime', time - previousTime);
				previousTime = time;
				time *= 0.0003;

				if (resizeRendererToDisplaySize(renderer)) {
					const canvas = renderer.domElement;
					camera.aspect = canvas.clientWidth / canvas.clientHeight;
					camera.updateProjectionMatrix();
				}

				objects.forEach(obj => {
					if (obj.type === 'Object3D') {
						obj.rotation.y = time;
					} else {
						obj.rotation.y = time * 2;
					}
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
