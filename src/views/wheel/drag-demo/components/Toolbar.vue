<template>
	<div>
		<div class="toolbar">
			<el-button @click="undo">后退</el-button>
			<el-button @click="redo">前进</el-button>
			<label for="input" class="insert">插入图片</label>
			<input type="file" @change="handleFileChange" id="input" hidden />
			<el-button @click="preview" style="margin-left: 10px">预览</el-button>
			<el-button @click="save">保存</el-button>
			<el-button @click="clearCanvas">清空画布</el-button>
			<div class="canvas-config">
				<span>画布大小</span>
				<input v-model="canvasStyleData.width" />
				<span>*</span>
				<input v-model="canvasStyleData.height" />
			</div>
		</div>

		<!-- 预览 -->
		<Preview v-model="isShowPreview" @change="handlePreviewChange" />
	</div>
</template>

<script>
import generateID from '../utils/generateID';
import toast from '../utils/toast';
// import { mapState } from 'vuex';
import Preview from '../components/Editor/Preview';

export default {
	components: { Preview },
	data() {
		return {
			isShowPreview: false,
		};
	},
	// computed: mapState(['componentData', 'canvasStyleData']),
	computed: {
		componentData: {
			get() {
				return this.$store.state.dragDemo.componentData;
			},
		},
		canvasStyleData: {
			get() {
				return this.$store.state.dragDemo.canvasStyleData;
			},
		},
	},
	mounted() {},
	methods: {
		undo() {
			this.$store.commit('dragDemo/undo');
		},

		redo() {
			this.$store.commit('dragDemo/redo');
		},

		handleFileChange(e) {
			const file = e.target.files[0];
			if (!file.type.includes('image')) {
				toast('只能插入图片');
				return;
			}

			const reader = new FileReader();
			reader.onload = res => {
				const fileResult = res.target.result;
				const img = new Image();
				img.onload = () => {
					this.$store.commit('dragDemo/addComponent', {
						component: {
							id: generateID(),
							component: 'Picture',
							label: '图片',
							icon: '',
							propValue: fileResult,
							animations: [],
							events: [],
							style: {
								top: 0,
								left: 0,
								width: img.width,
								height: img.height,
								rotate: '',
							},
						},
					});

					this.$store.commit('dragDemo/recordSnapshot');
				};

				img.src = fileResult;
			};

			reader.readAsDataURL(file);
		},

		preview() {
			this.isShowPreview = true;
			this.$store.commit('dragDemo/setEditMode', 'read');
		},

		save() {
			localStorage.setItem('canvasData', JSON.stringify(this.componentData));
			localStorage.setItem('canvasStyle', JSON.stringify(this.canvasStyleData));
			this.$message.success('保存成功');
		},

		clearCanvas() {
			this.$store.commit('dragDemo/setComponentData', []);
		},

		handlePreviewChange() {
			this.$store.commit('dragDemo/setEditMode', 'edit');
		},
	},
};
</script>

<style lang="scss" scoped>
.toolbar {
	height: 64px;
	line-height: 64px;
	background: #fff;
	border-bottom: 1px solid #ddd;

	.canvas-config {
		display: inline-block;
		margin-left: 10px;
		font-size: 14px;
		color: #606266;

		input {
			width: 50px;
			margin-left: 10px;
			outline: none;
			padding: 0 5px;
			border: 1px solid #ddd;
			color: #606266;
		}

		span {
			margin-left: 10px;
		}
	}

	.insert {
		display: inline-block;
		line-height: 1;
		white-space: nowrap;
		cursor: pointer;
		background: #fff;
		border: 1px solid #dcdfe6;
		color: #606266;
		-webkit-appearance: none;
		text-align: center;
		box-sizing: border-box;
		outline: 0;
		margin: 0;
		transition: 0.1s;
		font-weight: 500;
		padding: 9px 15px;
		font-size: 12px;
		border-radius: 3px;
		margin-left: 10px;

		&:active {
			color: #3a8ee6;
			border-color: #3a8ee6;
			outline: 0;
		}

		&:hover {
			background-color: #ecf5ff;
			color: #3a8ee6;
		}
	}
}
</style>
