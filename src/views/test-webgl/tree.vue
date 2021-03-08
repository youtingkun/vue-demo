<template>
	<div>
		<!-- 给canvas直接设置宽高是为了用于内部的坐标计算，而style的宽高决定最后画布显示的大小 -->
		<canvas id="paper" width="512" height="256" style="width: 512px; height: 256px"></canvas>
		<canvas id="one" width="512" height="256" style="width: 512px; height: 256px"></canvas>
		<canvas id="tree" width="512" height="512" style="width: 512px; height: 512px"></canvas>
		<canvas id="replay" width="512" height="512" style="width: 512px; height: 512px"></canvas>
	</div>
</template>

<script>
import rough from 'roughjs/bundled/rough.esm.js';
import Vector2D from './js/Vector2D.js';
import GlRenderer from 'gl-renderer';
import { loadImage, getImageData, traverse } from './js/utils.js';
export default {
	name: '',
	data() {
		return {};
	},
	mounted() {
		this.drawRelateve();
		// this.drawAbsolute();
		this.drawTree();
		this.drawReplay();
		this.drawPaper();
	},
	methods: {
		async drawPaper() {
			const canvas = document.getElementById('paper');
			const context = canvas.getContext('2d');
			const img = await loadImage('https://p2.ssl.qhimg.com/d/inn/4b7e384c55dc/girl1.jpg');
			const { width, height } = img; // 将图片绘制到 canvas
			canvas.width = width;
			canvas.height = height;
			context.drawImage(img, 0, 0);
			const imageData = getImageData(img);
			traverse(imageData, ({ r, g, b, a }) => {
				// 对每个像素进行灰度化处理
				const v = 0.2126 * r + 0.7152 * g + 0.0722 * b;
				return [v, v, v, a];
			});
			// 更新canvas内容
			canvas.width = imageData.width;
			canvas.height = imageData.height;
			context.putImageData(imageData, 0, 0);
		},

		drawReplay() {
			const vertex = `
      attribute vec2 a_vertexPosition;
      attribute vec2 uv;
      varying vec2 vUv;
      void main() {
        gl_PointSize = 1.0;
        vUv = uv;
        gl_Position = vec4(a_vertexPosition, 1, 1);
      }
    `;

			const fragment = `
      #ifdef GL_ES
      precision highp float;
      #endif
      varying vec2 vUv;
      uniform vec2 center;
      uniform float scale;
      uniform int iterations;

      vec3 palette(float t, vec3 c1, vec3 c2, vec3 c3, vec3 c4) {
        float x = 1.0 / 3.0;
        if (t < x) return mix(c1, c2, t/x);
        else if (t < 2.0 * x) return mix(c2, c3, (t - x)/x);
        else if (t < 3.0 * x) return mix(c3, c4, (t - 2.0*x)/x);
        return c4;
      }
      vec2 f(vec2 z, vec2 c) {
        return mat2(z, -z.y, z.x) * z + c;
      }
      void main() {
          vec2 uv = vUv;
          vec2 c = center + 4.0 * (uv - vec2(0.5)) / scale;
          vec2 z = vec2(0.0);
          bool escaped = false;
          int j;
          for (int i = 0; i < 65536; i++) {
            if(i > iterations) break;
            j = i;
            z = f(z, c);
            if (length(z) > 2.0) {
              escaped = true;
              break;
            }
          }
          // gl_FragColor.rgb = escaped ? vec3(1.0) : vec3(0.0);
          gl_FragColor.rgb = escaped ? max(1.0, log(scale)) * palette(float(j)/ float(iterations), vec3(0.02, 0.02, 0.03), vec3(0.1, 0.2, 0.3), vec3(0.0, 0.3, 0.2), vec3(0.0, 0.5, 0.8))
             : vec3(0.0);
          gl_FragColor.a = 1.0;
      }
    `;

			const canvas = document.querySelector('#replay');
			const renderer = new GlRenderer(canvas);

			// load fragment shader and createProgram
			const program = renderer.compileSync(fragment, vertex);
			renderer.useProgram(program);

			// renderer.uniforms.center = [0, 0];
			// renderer.uniforms.scale = 1;
			// renderer.uniforms.iterations = 255;

			renderer.uniforms.center = [0.367, 0.303];
			renderer.uniforms.scale = 1;
			renderer.uniforms.iterations = 256;

			renderer.setMeshData([
				{
					positions: [
						[-1, -1],
						[-1, 1],
						[1, 1],
						[1, -1],
					],
					attributes: {
						uv: [
							[0, 0],
							[0, 1],
							[1, 1],
							[1, 0],
						],
					},
					cells: [
						[0, 1, 2],
						[2, 0, 3],
					],
				},
			]);

			renderer.render();

			function update() {
				const factor = Math.max(0.1, Math.log(renderer.uniforms.scale));
				renderer.uniforms.scale = (renderer.uniforms.scale += factor) % 10000;
				renderer.uniforms.iterations = factor * 500;
				requestAnimationFrame(update);
			}
			setTimeout(update, 1000);
		},
		drawShape() {
			const canvas = document.querySelector('#tree');
			const ctx = canvas.getContext('2d');
			draw(regularShape(60, 128, -64, 6));
		},
		regularShape(edges = 3, x, y, step) {
			const ret = [];
			const delta = Math.PI * (1 - (edges - 2) / edges);
			let p = new Vector2D(x, y);
			const dir = new Vector2D(step, 0);
			ret.push(p);
			for (let i = 0; i < edges; i++) {
				p = p.copy().add(dir.rotate(delta));
				ret.push(p);
			}
			return ret;
		},
		drawTree() {
			const canvas = document.querySelector('#tree');
			const ctx = canvas.getContext('2d');

			ctx.translate(0, canvas.height);
			ctx.scale(1, -1);
			ctx.lineCap = 'round';
			const v0 = new Vector2D(256, 0);
			this.drawBranch(ctx, v0, 50, 10, 1, 3);
		},
		drawBranch(context, v0, length, thickness, dir, bias) {
			const v = new Vector2D().rotate(dir).scale(length);
			const v1 = v0.copy().add(v);
			context.lineWidth = thickness;
			context.beginPath();
			context.moveTo(...v0);
			context.lineTo(...v1);
			context.stroke();
			if (thickness > 2) {
				const left = Math.PI / 4 + 0.5 * (dir + 0.2) + bias * (Math.random() - 0.5);
				this.drawBranch(context, v1, length * 0.9, thickness * 0.8, left, bias * 0.9);
				const right = Math.PI / 4 + 0.5 * (dir - 0.2) + bias * (Math.random() - 0.5);
				this.drawBranch(context, v1, length * 0.9, thickness * 0.8, right, bias * 0.9);
			}
			if (thickness < 5 && Math.random() < 0.3) {
				context.save();
				context.strokeStyle = '#c72c35';
				const th = Math.random() * 6 + 3;
				context.lineWidth = th;
				context.beginPath();
				context.moveTo(...v1);
				context.lineTo(v1.x, v1.y - 2);
				context.stroke();
				context.restore();
			}
		},
		drawAbsolute() {
			const rc = rough.canvas(document.querySelector('canvas'));
			const hillOpts = { roughness: 2.8, strokeWidth: 2, fill: 'blue' };
			rc.path('M76 256L176 156L276 256', hillOpts);
			rc.path('M236 256L336 156L436 256', hillOpts);

			rc.circle(256, 106, 105, {
				stroke: 'red',
				strokeWidth: 4,
				fill: 'rgba(255, 255, 0, 0.4)',
				fillStyle: 'solid',
			});
		},
		drawRelateve() {
			const rc = rough.canvas(document.querySelector('#one'));
			const ctx = rc.ctx;
			ctx.translate(256, 256);
			ctx.scale(1, -1);
			const hillOpts = { roughness: 2.8, strokeWidth: 2, fill: 'blue' };
			// (-180,0) (-80,100) (20,0)
			rc.path('M-180 0L-80 100L20 0', hillOpts);
			// (-20,0) (80 100) (180,0)
			rc.path('M-20 0L80 100L180 0', hillOpts);
			// 线条颜色，线条宽度，填充颜色，填充方式
			rc.circle(0, 150, 105, {
				stroke: 'red',
				strokeWidth: 4,
				fill: 'rgba(255,255, 0, 0.4)',
				fillStyle: 'solid',
			});
		},
	},
};
</script>

<style scoped></style>
