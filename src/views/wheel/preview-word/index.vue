<template>
	<div>
		<!-- 谷歌有设置'X-Frame-Options'为'sameorigin'。所以这里是访问不到的。但是可以直接同链接访问 -->
		<iframe
			class="iframe-box"
			src="https://docs.google.com/viewer?url=https://qiniu.youtingkun.com/protocol.docx"
		></iframe>
		<!-- 微软没有做限制，所以可以访问 -->
		<iframe
			class="iframe-box"
			src="https://view.officeapps.live.com/op/view.aspx?src=https://qiniu.youtingkun.com/protocol.docx"
		></iframe>
	</div>
</template>

<script>
export default {
	name: '',
	components: {},
	props: {},
	data() {
		return {};
	},
	computed: {},
	watch: {},
	methods: {},
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
.iframe-box {
	height: 1080px;
	width: 100%;
}
</style>
