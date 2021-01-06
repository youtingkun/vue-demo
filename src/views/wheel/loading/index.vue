<template>
	<div>
		<div class="loading1"></div>
		<svg viewBox="0 0 50 50" class="loading-svg">
			<circle cx="25" cy="25" r="20" fill="none" class="path"></circle>
		</svg>
	</div>
</template>

<script>
export default {};
</script>

<style>
.loading1 {
	width: 50px; /* 先将loading区域变成正方形 */
	height: 50px;
	display: inline-block; /* 将loading区域变成行内元素，防止旋转的时候，100%宽度都在旋转 */
	border: 3px solid #f3f3f3; /* 设置四周边框大小，并将颜色设置为浅白色 */
	border-top: 3px solid red; /* 将上边框颜色设置为红色高亮，以便旋转的时候能够看到旋转的效果 */
	border-radius: 50%; /* 将边框和内容区域都变成圆形 */
	animation: loading-360 1s infinite linear;
}
@keyframes loading-360 {
	0% {
		transform: rotate(0deg); /* 动画起始的时候旋转了0度 */
	}
	100% {
		transform: rotate(360deg); /* 动画结束的时候旋转了360度 */
	}
}
.loading-svg {
	width: 60px;
	height: 60px;
}
.path {
	stroke: #409eff; /* 给画笔设置一个颜色 */
	stroke-width: 2; /* 设置线条的宽度 */
}
</style>
