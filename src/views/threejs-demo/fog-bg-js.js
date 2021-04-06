import * as THREE from 'three';
const drawMain = function (canvas) {
	var smokeParticles,
		smokeGeo,
		smokeMaterial,
		smokeTexture,
		light,
		camera,
		scene,
		renderer,
		geometry,
		material,
		mesh,
		cubeSineDriver,
		delta,
		textGeo;

	init();
	animate();

	function init() {
		renderer = new THREE.WebGLRenderer({ canvas });
		renderer.setSize(window.innerWidth, window.innerHeight);

		scene = new THREE.Scene();

		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
		camera.position.z = 1000;
		scene.add(camera);

		geometry = new THREE.CubeGeometry(200, 200, 200);
		material = new THREE.MeshLambertMaterial({ color: 0xaa6666, wireframe: false });
		mesh = new THREE.Mesh(geometry, material);
		//scene.add( mesh );
		cubeSineDriver = 0;

		textGeo = new THREE.PlaneGeometry(300, 300);

		light = new THREE.DirectionalLight(0xffffff, 0.5);
		light.position.set(-1, 0, 1);
		scene.add(light);

		smokeTexture = THREE.ImageUtils.getDataURL('./img/Smoke-Element.png');
		smokeMaterial = new THREE.MeshLambertMaterial({ color: 0x00dddd, map: smokeTexture, transparent: true });
		smokeGeo = new THREE.PlaneGeometry(300, 300);
		smokeParticles = [];

		for (var p = 0; p < 150; p++) {
			var particle = new THREE.Mesh(smokeGeo, smokeMaterial);
			particle.position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 100);
			particle.rotation.z = Math.random() * 360;
			scene.add(particle);
			smokeParticles.push(particle);
		}
	}

	function animate() {
		// note: three.js includes requestAnimationFrame shim
		delta = new THREE.Clock().getDelta();
		requestAnimationFrame(animate);
		evolveSmoke();
		render();
	}

	function evolveSmoke() {
		var sp = smokeParticles.length;
		while (sp--) {
			smokeParticles[sp].rotation.z += delta * 0.2;
		}
	}

	function render() {
		mesh.rotation.x += 0.005;
		mesh.rotation.y += 0.01;
		cubeSineDriver += 0.01;
		mesh.position.z = 100 + Math.sin(cubeSineDriver) * 500;
		renderer.render(scene, camera);
	}
};

export default drawMain;
