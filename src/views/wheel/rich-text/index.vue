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
			// 阿里云主账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM账号进行API访问或日常运维，请登录RAM控制台创建RAM账号。
			accessKeyId: 'STS.NUvoss2wVssfsJ4R55FnxCStT',
			accessKeySecret: 'BorpA7pFCipDDx8RZyxAp5PHTXj5ZeY9rPjqeZoV7bmV',
			bucket: 'aliyun-wb-dd0l47k19m',
		});

		editor.config.customUploadImg = function (resultFiles, insertImgFn) {
			// resultFiles 是 input 中选中的文件列表
			// insertImgFn 是获取图片 url 后，插入到编辑器的方法
			client
				.put('image', resultFiles[0])
				.then(function (res) {
					// 上传图片，返回结果，将图片插入到编辑器中
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
