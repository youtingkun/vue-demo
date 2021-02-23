<template>
	<!-- 参考链接https://juejin.cn/post/6908502083075325959#heading-31 -->
	<div class="home">
		<!-- 顶部tool -->
		<Toolbar></Toolbar>
		<!-- 主体 -->
		<main>
			<!-- 左侧组件 -->
			<section class="left">
				<ComponentList />
			</section>
			<!-- 中间画布 -->
			<section class="center">
				<div class="content" @drop="handleDrop" @dragover="handleDragOver" @click="deselectCurComponent">
					<Editor />
				</div>
			</section>
			<!-- 右侧属性 -->
			<section class="right">
				<el-tabs v-model="activeName">
					<el-tab-pane label="属性" name="attr">
						<AttrList v-if="curComponent" />
						<p v-else class="placeholder">请选择组件</p>
					</el-tab-pane>
					<el-tab-pane label="动画" name="animation">
						<AnimationList v-if="curComponent" />
						<p v-else class="placeholder">请选择组件</p>
					</el-tab-pane>
					<el-tab-pane label="事件" name="events">
						<EventList v-if="curComponent" />
						<p v-else class="placeholder">请选择组件</p>
					</el-tab-pane>
				</el-tabs>
			</section>
		</main>
	</div>
</template>

<script>
import ComponentList from './components/ComponentList'; // 左侧列表组件
import componentList from './custom-component/component-list'; // 左侧列表数据
import Editor from './components/Editor/index';
import { deepCopy } from './utils/utils';
import generateID from './utils/generateID';
import Toolbar from './components/Toolbar'; // 顶部工具组件
import AttrList from './components/AttrList'; // 右侧属性列表
import AnimationList from './components/AnimationList'; // 右侧动画列表
import EventList from './components/EventList'; // 右侧事件列表
export default {
	name: '',
	components: { ComponentList, Editor, Toolbar, AttrList, AnimationList, EventList },
	props: {},
	data() {
		return {
			activeName: 'attr',
		};
	},
	computed: {
		curComponent: {
			get() {
				return this.$store.state.dragDemo.curComponent;
			},
		},
	},
	watch: {},
	methods: {
		handleDrop(e) {
			console.log('handleDrop事件');
			e.preventDefault();
			e.stopPropagation();
			const component = deepCopy(componentList[e.dataTransfer.getData('index')]);
			component.style.top = e.offsetY;
			component.style.left = e.offsetX;
			component.id = generateID();
			this.$store.commit('dragDemo/addComponent', { component });
			this.$store.commit('dragDemo/recordSnapshot');
		},
		handleDragOver(e) {
			console.log('handleDragOver事件');
			e.preventDefault();
			e.dataTransfer.dropEffect = 'copy';
		},
		deselectCurComponent() {
			console.log('deselectCurComponent事件');
			this.$store.commit('dragDemo/setCurComponent', { component: null, index: null });
			this.$store.commit('dragDemo/hideContexeMenu');
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
@import url('./styles/animate.css');
@import url('./styles/reset.css');
.home {
	height: 100vh;
	background: #fff;

	main {
		height: calc(100% - 64px);
		position: relative;

		.left {
			position: absolute;
			height: 100%;
			width: 200px;
			left: 0;
			top: 0;
			padding-top: 10px;
		}

		.right {
			position: absolute;
			height: 100%;
			width: 262px;
			right: 0;
			top: 0;
		}

		.center {
			margin-left: 200px;
			margin-right: 262px;
			background: #f5f5f5;
			height: 100%;
			overflow: auto;
			padding: 20px;

			.content {
				height: 100%;
				overflow: auto;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}

	.placeholder {
		text-align: center;
		color: #333;
	}
}
</style>
