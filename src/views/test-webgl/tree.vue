<template>
	<div>
		<!-- 给canvas直接设置宽高是为了用于内部的坐标计算，而style的宽高决定最后画布显示的大小 -->
		<canvas id="one" width="512" height="256" style="width: 512px; height: 256px"></canvas>
		<canvas id="tree" width="512" height="512" style="width: 512px; height: 512px"></canvas>
		<canvas id="shape" width="512" height="512" style="width: 512px; height: 512px"></canvas>
	</div>
</template>

<script>
import rough from 'roughjs/bundled/rough.esm.js';
import Vector2D from './js/utils.js';

export default {
	name: '',
	data() {
		return {};
	},
	mounted() {
		this.drawRelateve();
		// this.drawAbsolute();
		this.drawTree();
	},
	methods: {
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
