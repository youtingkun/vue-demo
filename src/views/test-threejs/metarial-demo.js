import {
	AdditiveBlending,
	CustomBlending,
	MultiplyBlending,
	NormalBlending,
	NoBlending,
	SubtractiveBlending,
	AddEquation,
	ReverseSubtractEquation,
	SubtractEquation,
	AddOperation,
	MixOperation,
	MultiplyOperation,
	AmbientLight,
	Color,
	CubeTextureLoader,
	CubeRefractionMapping,
	DoubleSide,
	FrontSide,
	BackSide,
	DstAlphaFactor,
	DstColorFactor,
	OneFactor,
	OneMinusDstAlphaFactor,
	OneMinusDstColorFactor,
	OneMinusSrcAlphaFactor,
	OneMinusSrcColorFactor,
	SrcAlphaFactor,
	SrcAlphaSaturateFactor,
	SrcColorFactor,
	ZeroFactor,
	Float32BufferAttribute,
	Fog,
	LineBasicMaterial,
	Mesh,
	MeshBasicMaterial,
	MeshDepthMaterial,
	MeshLambertMaterial,
	MeshMatcapMaterial,
	MeshNormalMaterial,
	MeshPhongMaterial,
	MeshPhysicalMaterial,
	MeshStandardMaterial,
	MeshToonMaterial,
	NearestFilter,
	PerspectiveCamera,
	PointLight,
	RepeatWrapping,
	RGBFormat,
	Scene,
	TextureLoader,
	TorusKnotGeometry,
	BufferGeometry,
	BufferAttribute,
	WebGLRenderer,
} from 'three';

import { GUI } from 'three/examples/jsm/libs/dat.gui.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const mainFcn = function (name) {
	const constants = {
		combine: {
			'THREE.MultiplyOperation': MultiplyOperation,
			'THREE.MixOperation': MixOperation,
			'THREE.AddOperation': AddOperation,
		},

		side: {
			'THREE.FrontSide': FrontSide,
			'THREE.BackSide': BackSide,
			'THREE.DoubleSide': DoubleSide,
		},

		blendingMode: {
			'THREE.NoBlending': NoBlending,
			'THREE.NormalBlending': NormalBlending,
			'THREE.AdditiveBlending': AdditiveBlending,
			'THREE.SubtractiveBlending': SubtractiveBlending,
			'THREE.MultiplyBlending': MultiplyBlending,
			'THREE.CustomBlending': CustomBlending,
		},

		equations: {
			'THREE.AddEquation': AddEquation,
			'THREE.SubtractEquation': SubtractEquation,
			'THREE.ReverseSubtractEquation': ReverseSubtractEquation,
		},

		destinationFactors: {
			'THREE.ZeroFactor': ZeroFactor,
			'THREE.OneFactor': OneFactor,
			'THREE.SrcColorFactor': SrcColorFactor,
			'THREE.OneMinusSrcColorFactor': OneMinusSrcColorFactor,
			'THREE.SrcAlphaFactor': SrcAlphaFactor,
			'THREE.OneMinusSrcAlphaFactor': OneMinusSrcAlphaFactor,
			'THREE.DstAlphaFactor': DstAlphaFactor,
			'THREE.OneMinusDstAlphaFactor': OneMinusDstAlphaFactor,
		},

		sourceFactors: {
			'THREE.DstColorFactor': DstColorFactor,
			'THREE.OneMinusDstColorFactor': OneMinusDstColorFactor,
			'THREE.SrcAlphaSaturateFactor': SrcAlphaSaturateFactor,
		},
	};

	function getObjectsKeys(obj) {
		const keys = [];

		for (const key in obj) {
			if (obj.hasOwnProperty(key)) {
				keys.push(key);
			}
		}

		return keys;
	}

	const textureLoader = new TextureLoader();
	const cubeTextureLoader = new CubeTextureLoader();

	const envMaps = (function () {
		const path = './textures/cube/SwedishRoyalCastle/';
		const format = '.jpg';
		const urls = [
			path + 'px' + format,
			path + 'nx' + format,
			path + 'py' + format,
			path + 'ny' + format,
			path + 'pz' + format,
			path + 'nz' + format,
		];

		const reflectionCube = cubeTextureLoader.load(urls);
		reflectionCube.format = RGBFormat;

		const refractionCube = cubeTextureLoader.load(urls);
		refractionCube.mapping = CubeRefractionMapping;
		refractionCube.format = RGBFormat;

		return {
			none: null,
			reflection: reflectionCube,
			refraction: refractionCube,
		};
	})();

	const diffuseMaps = (function () {
		const bricks = textureLoader.load('./textures/brick_diffuse.jpg');
		bricks.wrapS = RepeatWrapping;
		bricks.wrapT = RepeatWrapping;
		bricks.repeat.set(9, 1);

		return {
			none: null,
			bricks: bricks,
		};
	})();

	const roughnessMaps = (function () {
		const bricks = textureLoader.load('./textures/brick_roughness.jpg');
		bricks.wrapT = RepeatWrapping;
		bricks.wrapS = RepeatWrapping;
		bricks.repeat.set(9, 1);

		return {
			none: null,
			bricks: bricks,
		};
	})();

	const matcaps = (function () {
		return {
			none: null,
			porcelainWhite: textureLoader.load('./textures/matcaps/matcap-porcelain-white.jpg'),
		};
	})();

	const alphaMaps = (function () {
		const fibers = textureLoader.load('./textures/alphaMap.jpg');
		fibers.wrapT = RepeatWrapping;
		fibers.wrapS = RepeatWrapping;
		fibers.repeat.set(9, 1);

		return {
			none: null,
			fibers: fibers,
		};
	})();

	const gradientMaps = (function () {
		const threeTone = textureLoader.load('./textures/gradientMaps/threeTone.jpg');
		threeTone.minFilter = NearestFilter;
		threeTone.magFilter = NearestFilter;

		const fiveTone = textureLoader.load('./textures/gradientMaps/fiveTone.jpg');
		fiveTone.minFilter = NearestFilter;
		fiveTone.magFilter = NearestFilter;

		return {
			none: null,
			threeTone: threeTone,
			fiveTone: fiveTone,
		};
	})();

	const envMapKeys = getObjectsKeys(envMaps);
	const diffuseMapKeys = getObjectsKeys(diffuseMaps);
	const roughnessMapKeys = getObjectsKeys(roughnessMaps);
	const matcapKeys = getObjectsKeys(matcaps);
	const alphaMapKeys = getObjectsKeys(alphaMaps);
	const gradientMapKeys = getObjectsKeys(gradientMaps);

	function generateVertexColors(geometry) {
		console.log('geometry', geometry);
		const positionAttribute = geometry.attributes.position;

		const colors = [];
		const color = new Color();

		for (let i = 0, il = positionAttribute.count; i < il; i++) {
			color.setHSL((i / il) * Math.random(), 0.5, 0.5);
			colors.push(color.r, color.g, color.b);
		}

		geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
	}

	function handleColorChange(color) {
		return function (value) {
			if (typeof value === 'string') {
				value = value.replace('#', '0x');
			}

			color.setHex(value);
		};
	}

	function needsUpdate(material, geometry) {
		return function () {
			material.vertexColors = material.vertexColors;
			material.side = parseInt(material.side); //Ensure number
			material.needsUpdate = true;
			geometry.attributes.position.needsUpdate = true;
			geometry.attributes.normal.needsUpdate = true;
			geometry.attributes.color.needsUpdate = true;
		};
	}

	function updateCombine(material) {
		return function (combine) {
			material.combine = parseInt(combine);
			material.needsUpdate = true;
		};
	}

	function updateTexture(material, materialKey, textures) {
		return function (key) {
			material[materialKey] = textures[key];
			material.needsUpdate = true;
		};
	}

	function guiScene(gui, scene) {
		const folder = gui.addFolder('Scene');

		const data = {
			background: '#000000',
			'ambient light': ambientLight.color.getHex(),
		};

		folder.addColor(data, 'ambient light').onChange(handleColorChange(ambientLight.color));

		guiSceneFog(folder, scene);
	}

	function guiSceneFog(folder, scene) {
		const fogFolder = folder.addFolder('scene.fog');

		const fog = new Fog(0x3f7b9d, 0, 60);

		const data = {
			fog: {
				'THREE.Fog()': false,
				'scene.fog.color': fog.color.getHex(),
			},
		};

		fogFolder.add(data.fog, 'THREE.Fog()').onChange(function (useFog) {
			if (useFog) {
				scene.fog = fog;
			} else {
				scene.fog = null;
			}
		});

		fogFolder.addColor(data.fog, 'scene.fog.color').onChange(handleColorChange(fog.color));
	}

	function guiMaterial(gui, mesh, material, geometry) {
		const folder = gui.addFolder('THREE.Material');

		folder.add(material, 'transparent');
		folder.add(material, 'opacity', 0, 1).step(0.01);
		// folder.add( material, 'blending', constants.blendingMode );
		// folder.add( material, 'blendSrc', constants.destinationFactors );
		// folder.add( material, 'blendDst', constants.destinationFactors );
		// folder.add( material, 'blendEquation', constants.equations );
		folder.add(material, 'depthTest');
		folder.add(material, 'depthWrite');
		// folder.add( material, 'polygonOffset' );
		// folder.add( material, 'polygonOffsetFactor' );
		// folder.add( material, 'polygonOffsetUnits' );
		folder.add(material, 'alphaTest', 0, 1).step(0.01).onChange(needsUpdate(material, geometry));
		folder.add(material, 'visible');
		folder.add(material, 'side', constants.side).onChange(needsUpdate(material, geometry));
	}

	function guiMeshBasicMaterial(gui, mesh, material, geometry) {
		const data = {
			color: material.color.getHex(),
			envMaps: envMapKeys[0],
			map: diffuseMapKeys[0],
			alphaMap: alphaMapKeys[0],
		};

		const folder = gui.addFolder('THREE.MeshBasicMaterial');

		folder.addColor(data, 'color').onChange(handleColorChange(material.color));
		folder.add(material, 'wireframe');
		folder.add(material, 'wireframeLinewidth', 0, 10);
		folder.add(material, 'vertexColors').onChange(needsUpdate(material, geometry));
		folder.add(material, 'fog');

		folder.add(data, 'envMaps', envMapKeys).onChange(updateTexture(material, 'envMap', envMaps));
		folder.add(data, 'map', diffuseMapKeys).onChange(updateTexture(material, 'map', diffuseMaps));
		folder.add(data, 'alphaMap', alphaMapKeys).onChange(updateTexture(material, 'alphaMap', alphaMaps));
		folder.add(material, 'combine', constants.combine).onChange(updateCombine(material));
		folder.add(material, 'reflectivity', 0, 1);
		folder.add(material, 'refractionRatio', 0, 1);
	}

	function guiMeshDepthMaterial(gui, mesh, material) {
		const data = {
			alphaMap: alphaMapKeys[0],
		};

		const folder = gui.addFolder('THREE.MeshDepthMaterial');

		folder.add(material, 'wireframe');
		folder.add(material, 'wireframeLinewidth', 0, 10);

		folder.add(data, 'alphaMap', alphaMapKeys).onChange(updateTexture(material, 'alphaMap', alphaMaps));
	}

	function guiMeshNormalMaterial(gui, mesh, material, geometry) {
		const folder = gui.addFolder('THREE.MeshNormalMaterial');

		folder.add(material, 'flatShading').onChange(needsUpdate(material, geometry));
		folder.add(material, 'wireframe');
		folder.add(material, 'wireframeLinewidth', 0, 10);
	}

	function guiLineBasicMaterial(gui, mesh, material, geometry) {
		const data = {
			color: material.color.getHex(),
		};

		const folder = gui.addFolder('THREE.LineBasicMaterial');

		folder.addColor(data, 'color').onChange(handleColorChange(material.color));
		folder.add(material, 'linewidth', 0, 10);
		folder.add(material, 'linecap', ['butt', 'round', 'square']);
		folder.add(material, 'linejoin', ['round', 'bevel', 'miter']);
		folder.add(material, 'vertexColors').onChange(needsUpdate(material, geometry));
		folder.add(material, 'fog');
	}

	function guiMeshLambertMaterial(gui, mesh, material, geometry) {
		const data = {
			color: material.color.getHex(),
			emissive: material.emissive.getHex(),
			envMaps: envMapKeys[0],
			map: diffuseMapKeys[0],
			alphaMap: alphaMapKeys[0],
		};

		const folder = gui.addFolder('THREE.MeshLambertMaterial');

		folder.addColor(data, 'color').onChange(handleColorChange(material.color));
		folder.addColor(data, 'emissive').onChange(handleColorChange(material.emissive));

		folder.add(material, 'wireframe');
		folder.add(material, 'wireframeLinewidth', 0, 10);
		folder.add(material, 'vertexColors').onChange(needsUpdate(material, geometry));
		folder.add(material, 'fog');

		folder.add(data, 'envMaps', envMapKeys).onChange(updateTexture(material, 'envMap', envMaps));
		folder.add(data, 'map', diffuseMapKeys).onChange(updateTexture(material, 'map', diffuseMaps));
		folder.add(data, 'alphaMap', alphaMapKeys).onChange(updateTexture(material, 'alphaMap', alphaMaps));
		folder.add(material, 'combine', constants.combine).onChange(updateCombine(material));
		folder.add(material, 'reflectivity', 0, 1);
		folder.add(material, 'refractionRatio', 0, 1);
	}

	function guiMeshMatcapMaterial(gui, mesh, material) {
		const data = {
			color: material.color.getHex(),
			matcap: matcapKeys[1],
			alphaMap: alphaMapKeys[0],
		};

		const folder = gui.addFolder('THREE.MeshMatcapMaterial');

		folder.addColor(data, 'color').onChange(handleColorChange(material.color));
		folder.add(data, 'matcap', matcapKeys).onChange(updateTexture(material, 'matcap', matcaps));
		folder.add(data, 'alphaMap', alphaMapKeys).onChange(updateTexture(material, 'alphaMap', alphaMaps));
	}

	function guiMeshPhongMaterial(gui, mesh, material, geometry) {
		const data = {
			color: material.color.getHex(),
			emissive: material.emissive.getHex(),
			specular: material.specular.getHex(),
			envMaps: envMapKeys[0],
			map: diffuseMapKeys[0],
			alphaMap: alphaMapKeys[0],
		};

		const folder = gui.addFolder('THREE.MeshPhongMaterial');

		folder.addColor(data, 'color').onChange(handleColorChange(material.color));
		folder.addColor(data, 'emissive').onChange(handleColorChange(material.emissive));
		folder.addColor(data, 'specular').onChange(handleColorChange(material.specular));

		folder.add(material, 'shininess', 0, 100);
		folder.add(material, 'flatShading').onChange(needsUpdate(material, geometry));
		folder.add(material, 'wireframe');
		folder.add(material, 'wireframeLinewidth', 0, 10);
		folder.add(material, 'vertexColors').onChange(needsUpdate(material, geometry));
		folder.add(material, 'fog');
		folder.add(data, 'envMaps', envMapKeys).onChange(updateTexture(material, 'envMap', envMaps));
		folder.add(data, 'map', diffuseMapKeys).onChange(updateTexture(material, 'map', diffuseMaps));
		folder.add(data, 'alphaMap', alphaMapKeys).onChange(updateTexture(material, 'alphaMap', alphaMaps));
		folder.add(material, 'combine', constants.combine).onChange(updateCombine(material));
		folder.add(material, 'reflectivity', 0, 1);
		folder.add(material, 'refractionRatio', 0, 1);
	}

	function guiMeshToonMaterial(gui, mesh, material) {
		const data = {
			color: material.color.getHex(),
			map: diffuseMapKeys[0],
			gradientMap: gradientMapKeys[1],
			alphaMap: alphaMapKeys[0],
		};

		const folder = gui.addFolder('THREE.MeshToonMaterial');

		folder.addColor(data, 'color').onChange(handleColorChange(material.color));

		folder.add(data, 'map', diffuseMapKeys).onChange(updateTexture(material, 'map', diffuseMaps));
		folder.add(data, 'gradientMap', gradientMapKeys).onChange(updateTexture(material, 'gradientMap', gradientMaps));
		folder.add(data, 'alphaMap', alphaMapKeys).onChange(updateTexture(material, 'alphaMap', alphaMaps));
	}

	function guiMeshStandardMaterial(gui, mesh, material, geometry) {
		const data = {
			color: material.color.getHex(),
			emissive: material.emissive.getHex(),
			envMaps: envMapKeys[0],
			map: diffuseMapKeys[0],
			roughnessMap: roughnessMapKeys[0],
			alphaMap: alphaMapKeys[0],
		};

		const folder = gui.addFolder('THREE.MeshStandardMaterial');

		folder.addColor(data, 'color').onChange(handleColorChange(material.color));
		folder.addColor(data, 'emissive').onChange(handleColorChange(material.emissive));

		folder.add(material, 'roughness', 0, 1);
		folder.add(material, 'metalness', 0, 1);
		folder.add(material, 'flatShading').onChange(needsUpdate(material, geometry));
		folder.add(material, 'wireframe');
		folder.add(material, 'wireframeLinewidth', 0, 10);
		folder.add(material, 'vertexColors').onChange(needsUpdate(material, geometry));
		folder.add(material, 'fog');
		folder.add(data, 'envMaps', envMapKeys).onChange(updateTexture(material, 'envMap', envMaps));
		folder.add(data, 'map', diffuseMapKeys).onChange(updateTexture(material, 'map', diffuseMaps));
		folder
			.add(data, 'roughnessMap', roughnessMapKeys)
			.onChange(updateTexture(material, 'roughnessMap', roughnessMaps));
		folder.add(data, 'alphaMap', alphaMapKeys).onChange(updateTexture(material, 'alphaMap', alphaMaps));

		// TODO metalnessMap
	}

	function guiMeshPhysicalMaterial(gui, mesh, material, geometry) {
		const data = {
			color: material.color.getHex(),
			emissive: material.emissive.getHex(),
			envMaps: envMapKeys[0],
			map: diffuseMapKeys[0],
			roughnessMap: roughnessMapKeys[0],
			alphaMap: alphaMapKeys[0],
		};

		const folder = gui.addFolder('THREE.MeshPhysicalMaterial');

		folder.addColor(data, 'color').onChange(handleColorChange(material.color));
		folder.addColor(data, 'emissive').onChange(handleColorChange(material.emissive));

		folder.add(material, 'roughness', 0, 1);
		folder.add(material, 'metalness', 0, 1);
		folder.add(material, 'reflectivity', 0, 1);
		folder.add(material, 'clearcoat', 0, 1).step(0.01);
		folder.add(material, 'clearcoatRoughness', 0, 1).step(0.01);
		folder.add(material, 'flatShading').onChange(needsUpdate(material, geometry));
		folder.add(material, 'wireframe');
		folder.add(material, 'wireframeLinewidth', 0, 10);
		folder.add(material, 'vertexColors').onChange(needsUpdate(material, geometry));
		folder.add(material, 'fog');
		folder.add(data, 'envMaps', envMapKeys).onChange(updateTexture(material, 'envMap', envMaps));
		folder.add(data, 'map', diffuseMapKeys).onChange(updateTexture(material, 'map', diffuseMaps));
		folder
			.add(data, 'roughnessMap', roughnessMapKeys)
			.onChange(updateTexture(material, 'roughnessMap', roughnessMaps));
		folder.add(data, 'alphaMap', alphaMapKeys).onChange(updateTexture(material, 'alphaMap', alphaMaps));

		// TODO metalnessMap
	}

	function chooseFromHash(gui, mesh, geometry, materialName) {
		// const selectedMaterial = window.location.hash.substring(1) || 'MeshBasicMaterial';
		const selectedMaterial = materialName;
		let material;

		switch (selectedMaterial) {
			case 'MeshBasicMaterial':
				material = new MeshBasicMaterial({ color: 0x2194ce });
				guiMaterial(gui, mesh, material, geometry);
				guiMeshBasicMaterial(gui, mesh, material, geometry);

				return material;

				break;

			case 'MeshLambertMaterial':
				material = new MeshLambertMaterial({ color: 0x2194ce });
				guiMaterial(gui, mesh, material, geometry);
				guiMeshLambertMaterial(gui, mesh, material, geometry);

				return material;

				break;

			case 'MeshMatcapMaterial':
				material = new MeshMatcapMaterial({ matcap: matcaps.porcelainWhite });
				guiMaterial(gui, mesh, material, geometry);
				guiMeshMatcapMaterial(gui, mesh, material, geometry);

				return material;

				break;

			case 'MeshPhongMaterial':
				material = new MeshPhongMaterial({ color: 0x2194ce });
				guiMaterial(gui, mesh, material, geometry);
				guiMeshPhongMaterial(gui, mesh, material, geometry);

				return material;

				break;

			case 'MeshToonMaterial':
				material = new MeshToonMaterial({ color: 0x2194ce, gradientMap: gradientMaps.threeTone });
				guiMaterial(gui, mesh, material, geometry);
				guiMeshToonMaterial(gui, mesh, material, geometry);

				// only use a single point light

				lights[0].visible = false;
				lights[2].visible = false;

				return material;

				break;

			case 'MeshStandardMaterial':
				material = new MeshStandardMaterial({ color: 0x2194ce });
				guiMaterial(gui, mesh, material, geometry);
				guiMeshStandardMaterial(gui, mesh, material, geometry);

				return material;

				break;

			case 'MeshPhysicalMaterial':
				material = new MeshPhysicalMaterial({ color: 0x2194ce });
				guiMaterial(gui, mesh, material, geometry);
				guiMeshPhysicalMaterial(gui, mesh, material, geometry);

				return material;

				break;

			case 'MeshDepthMaterial':
				material = new MeshDepthMaterial();
				guiMaterial(gui, mesh, material, geometry);
				guiMeshDepthMaterial(gui, mesh, material, geometry);

				return material;

				break;

			case 'MeshNormalMaterial':
				material = new MeshNormalMaterial();
				guiMaterial(gui, mesh, material, geometry);
				guiMeshNormalMaterial(gui, mesh, material, geometry);

				return material;

				break;

			case 'LineBasicMaterial':
				material = new LineBasicMaterial({ color: 0x2194ce });
				guiMaterial(gui, mesh, material, geometry);
				guiLineBasicMaterial(gui, mesh, material, geometry);

				return material;

				break;
		}
	}

	// gui辅助工具
	const gui = new GUI();

	// 场景
	const scene = new Scene();
	scene.background = new Color(0x444444);

	//摄像头
	const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 10, 50);
	camera.position.z = 30;

	// 获取画布画布
	const canvas = document.querySelector('#cc');
	const renderer = new WebGLRenderer({ canvas });
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);

	//自由控制视角
	const orbit = new OrbitControls(camera, renderer.domElement);
	orbit.enableZoom = false;

	//光线
	const ambientLight = new AmbientLight(0x000000);
	scene.add(ambientLight);

	const lights = [];
	lights[0] = new PointLight(0xffffff, 1, 0);
	lights[1] = new PointLight(0xffffff, 1, 0);
	lights[2] = new PointLight(0xffffff, 1, 0);

	lights[0].position.set(0, 200, 0);
	lights[1].position.set(100, 200, 100);
	lights[2].position.set(-100, -200, -100);

	scene.add(lights[0]);
	scene.add(lights[1]);
	scene.add(lights[2]);

	guiScene(gui, scene, camera);

	// // 几何体
	// let geometry = new TorusKnotGeometry(10, 3, 100, 16);
	// geometry = geometry.toNonIndexed();
	// generateVertexColors(geometry);

	let geometry = new TorusKnotGeometry(10, 3, 100, 16);

	// let geometry = new BufferGeometry();
	// geometry = geometry.toNonIndexed();
	// generateVertexColors(geometry);

	const mesh = new Mesh(geometry);
	mesh.material = chooseFromHash(gui, mesh, geometry, name);

	scene.add(mesh);

	let prevFog = false;

	function render() {
		requestAnimationFrame(render);

		mesh.rotation.x += 0.005;
		mesh.rotation.y += 0.005;

		if (prevFog !== scene.fog) {
			mesh.material.needsUpdate = true;
			prevFog = scene.fog;
		}

		renderer.render(scene, camera);
	}
	requestAnimationFrame(render);

	window.addEventListener(
		'resize',
		function () {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();

			renderer.setSize(window.innerWidth, window.innerHeight);
		},
		false,
	);
};

export default mainFcn;
