<template>
	<div>
		<el-image style="width: 100px; height: 100px" :src="image" :preview-src-list="srcList"> </el-image>
		<el-button type="primary" icon="el-icon-upload" @click="imagecropperShow = true"> Change Avatar </el-button>
		<image-cropper
			v-show="imagecropperShow"
			:key="imagecropperKey"
			:width="300"
			:height="300"
			:noCircle="true"
			url="https://httpbin.org/post"
			lang-type="en"
			@close="close"
			@crop-upload-success="cropSuccess"
		/>
	</div>
</template>

<script>
import ImageCropper from '@/components/ImageCropper';

export default {
	name: 'AvatarUploadDemo',
	components: { ImageCropper },
	data() {
		return {
			imagecropperShow: false,
			imagecropperKey: 0,
			srcList: ['https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191'],
			image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191',
		};
	},
	methods: {
		cropSuccess(resData) {
			this.imagecropperShow = false;
			this.imagecropperKey = this.imagecropperKey + 1;
			this.image = resData.files.avatar;
		},
		close() {
			this.imagecropperShow = false;
		},
	},
};
</script>

<style scoped></style>
