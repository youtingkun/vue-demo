<template>
	<div class="">
		<!-- 直接改变css的属性 -->
		<div @click="handleFontSize('24px')" :style="styleVal">默认字体24号</div>
		<div @click="handleFontSize('32px')" :style="styleVal">字体32号</div>

		<!-- 使用--表示的css变量 -->
		<div :style="colorStyle">
			<div @click="handleColor('#ff0000')" class="color-val">默认红色</div>
			<div @click="handleColor('#00ff00')" class="color-val">绿色</div>
		</div>
	</div>
</template>

<script>
export default {
	name: '',
	components: {},
	props: {},
	data() {
		return {
			styleVal: {
				'font-size': '24px',
			},
			colorStyle: {
				'--color': '#ff0000',
			},
		};
	},
	computed: {},
	watch: {},
	methods: {
		handleFontSize(val) {
			this.styleVal['font-size'] = val;
		},
		handleColor(val) {
			this.colorStyle['--color'] = val;
		},
	},
	created() {},
	mounted() {},
	beforeCreate() {},
	beforeMount() {},
	beforeUpdate() {},
	updated() {},
	beforeDestroy() {},
	destroyed() {},
	activated() {},
};
</script>
<style lang="scss" scoped>
// --开头的为css变量
// $开头的为sass变量
// ?开头的为less变量
.color-val {
	color: var(--color);
}
</style>
