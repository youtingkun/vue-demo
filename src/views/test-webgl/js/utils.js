// 异步加载图片
export function loadImage(src) {
	const img = new Image();
	img.crossOrigin = 'anonymous';
	return new Promise(resolve => {
		img.onload = () => {
			resolve(img);
		};
		img.src = src;
	});
}

const imageDataContext = new WeakMap();
// 获得图片的 imageData 数据
export function getImageData(img, rect = [0, 0, img.width, img.height]) {
	let context;
	if (imageDataContext.has(img)) context = imageDataContext.get(img);
	else {
		const canvas = new OffscreenCanvas(img.width, img.height);
		context = canvas.getContext('2d');
		context.drawImage(img, 0, 0);
		imageDataContext.set(img, context);
	}
	return context.getImageData(...rect);
}

// 循环遍历 imageData 数据
export function traverse(imageData, pass) {
	const { width, height, data } = imageData;
	for (let i = 0; i < width * height * 4; i += 4) {
		const [r, g, b, a] = pass({
			r: data[i] / 255,
			g: data[i + 1] / 255,
			b: data[i + 2] / 255,
			a: data[i + 3] / 255,
			index: i,
			width,
			height,
			x: ((i / 4) % width) / width,
			y: Math.floor(i / 4 / width) / height,
		});
		data.set(
			[r, g, b, a].map(v => Math.round(v * 255)),
			i,
		);
	}
	return imageData;
}

// 画圆的方程
export function arc(x0, y0, radius, startAng = 0, endAng = Math.PI * 2) {
	// 定义要画的线段个数，线段越多圆越平滑。
	const TAU_SEGMENTS = 60;
	// 定义要画的默认角度
	const TAU = Math.PI * 2;
	// 计算真正要画的角度
	const ang = Math.min(TAU, endAng - startAng);
	// 初始化起点
	const ret = ang === TAU ? [] : [[x0, y0]];
	// s计算真正要画的线段数
	const segments = Math.round((TAU_SEGMENTS * ang) / TAU);
	for (let i = 0; i <= segments; i++) {
		const x = x0 + radius * Math.cos(startAng + (ang * i) / segments);
		const y = y0 + radius * Math.sin(startAng + (ang * i) / segments);
		ret.push([x, y]);
	}
	// 返回点数组
	return ret;
}

// 画椭圆的方程
export function ellipse(x0, y0, radiusX, radiusY, startAng = 0, endAng = Math.PI * 2) {
	const TAU_SEGMENTS = 60;
	const TAU = Math.PI * 2;
	const ang = Math.min(TAU, endAng - startAng);
	const ret = ang === TAU ? [] : [[x0, y0]];
	const segments = Math.round((TAU_SEGMENTS * ang) / TAU);
	for (let i = 0; i <= segments; i++) {
		const x = x0 + radiusX * Math.cos(startAng + (ang * i) / segments);
		const y = y0 + radiusY * Math.sin(startAng + (ang * i) / segments);
		ret.push([x, y]);
	}
	return ret;
}

// 抛物线方程
export function parabola(x0, y0, p, min, max) {
	const LINE_SEGMENTS = 60;
	const ret = [];
	for (let i = 0; i <= LINE_SEGMENTS; i++) {
		const s = i / 60;
		const t = min * (1 - s) + max * s;
		const x = x0 + 2 * p * t ** 2;
		const y = y0 + 2 * p * t;
		ret.push([x, y]);
	}
	return ret;
}

// 根据点来绘制图形
export function draw(points, context, { strokeStyle = 'black', fillStyle = null, close = false } = {}) {
	context.strokeStyle = strokeStyle;
	context.beginPath();
	context.moveTo(...points[0]);
	for (let i = 1; i < points.length; i++) {
		context.lineTo(...points[i]);
	}
	if (close) context.closePath();
	if (fillStyle) {
		context.fillStyle = fillStyle;
		context.fill();
	}
	context.stroke();
}

// 通用的曲线方程
export function parametric(xFunc, yFunc) {
	return function (start, end, seg = 100, ...args) {
		const points = [];
		for (let i = 0; i <= seg; i++) {
			const p = i / seg;
			const t = start * (1 - p) + end * p;
			const x = xFunc(t, ...args); // 计算参数方程组的x
			const y = yFunc(t, ...args); // 计算参数方程组的y
			points.push([x, y]);
		}
		return {
			draw: draw.bind(null, points),
			// points,
		};
	};
}
