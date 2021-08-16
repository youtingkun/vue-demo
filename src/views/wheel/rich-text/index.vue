<template>
	<div class="home">
		<h3>wangEditor with vue</h3>
		<div id="demo1"></div>
		<button type="button" class="btn" @click="getEditorData">获取当前内容</button>
		<h3>内容预览</h3>
		<textarea name="" id="" cols="170" rows="20" readonly v-model="editorData"></textarea>
		<div id="show"></div>
	</div>
</template>

<script>
// 引入 wangEditor
import wangEditor from 'wangeditor';
import OSS from 'ali-oss';

export default {
	data() {
		return {
			editor: null,
			editorData: '',
		};
	},
	mounted() {
		const editor = new wangEditor(`#demo1`);

		// 配置 onchange 回调函数，将数据同步到 vue 中
		editor.config.onchange = newHtml => {
			this.editorData = newHtml;
			document.getElementById('show').innerHTML = newHtml;
		};
		// 具体值需要去阿里云控制台获取
		let client = new OSS({
			// // region以杭州为例（oss-cn-hangzhou），其他region按实际情况填写。
			region: 'oss-cn-shanghai',
			// 从STS服务获取的临时访问密钥（AccessKey ID和AccessKey Secret）。
			accessKeyId: 'STS.NTbbrunJQLLVK4LztuhD4FToY',
			accessKeySecret: '77afMWu4a55n1gvoWd18gmcdb9MVAjTJqdsd5P9XHujY',
			// 填写Bucket名称。
			bucket: 'aliyun-wb-dd0l47k19m',
			// 从STS服务获取的安全令牌（SecurityToken）。
			stsToken:
				'CAIS8wF1q6Ft5B2yfSjIr5fXKcjBg5Vw+469SRL9nnQgZMsYqZHEuzz2IH5MeHNoAusXt/ozlW5W7/gZlqNJQppiXlf4YNBstka1FYV9JNivgde8yJBZor/HcDHhJnyW9cvWZPqDP7G5U/yxalfCuzZuyL/hD1uLVECkNpv74vwOLK5gPG+CYCFBGc1dKyZ7tcYeLgGxD/u2NQPwiWeiZygB+CgE0Dgit/Xuk53HsEaB1gSlktV4/dqhfsKWCOB3J4p6XtuP2+h7S7HMyiY46WIRqv8q1vQfomae4I3MXQcIvU6cUfDd99p0NxN0fbQqmVLKY2JRSZcagAFzqkHtNkw2KnGym+rZCti9f/u3iHIa/wxSAB128MlYV3OMhtqakAlK9rgYf1fDVkfH5uWwp2HznF2SHAETeMnmYIPspcPdN/U/tWUN9WPFc9X5lpxOllWWY7F8mrfiCr3A/qEIpru5YFUqry2emNcjt/NxSlXUnM5JviOUnMIWYg==',
		});

		editor.config.customUploadImg = function (resultFiles, insertImgFn) {
			// resultFiles 是 input 中选中的文件列表
			// insertImgFn 是获取图片 url 后，插入到编辑器的方法
			client
				.put('image.jpg', resultFiles[0])
				.then(function (res) {
					// 上传图片，返回结果，将图片插入到编辑器中
					console.log(res);
					insertImgFn(res.url);
				})
				.catch(function (err) {
					console.log(err);
				});
		};
		// 创建编辑器
		editor.create();

		this.editor = editor;
	},

	methods: {
		getEditorData() {
			// 通过代码获取编辑器内容
			let data = this.editor.txt.html();
			alert(data);
		},
	},
	beforeDestroy() {
		// 调用销毁 API 对当前编辑器实例进行销毁
		this.editor.destroy();
		this.editor = null;
	},
};
</script>

<style lang="scss">
.home {
	width: 1200px;
	margin: auto;
	position: relative;
	.btn {
		position: absolute;
		right: 0;
		top: 0;
		padding: 5px 10px;
		cursor: pointer;
	}
	h3 {
		margin: 30px 0 15px;
	}
}
</style>
