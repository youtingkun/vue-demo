<template>
	<el-dropdown trigger="click" class="international" @command="handleSetLanguage">
		<span class="el-dropdown-link"> 选择语言<i class="el-icon-arrow-down el-icon--right"></i> </span>
		<el-dropdown-menu slot="dropdown">
			<el-dropdown-item :disabled="language === 'zh'" command="zh"> 中文 </el-dropdown-item>
			<el-dropdown-item :disabled="language === 'en'" command="en"> English </el-dropdown-item>
		</el-dropdown-menu>
	</el-dropdown>
</template>

<script>
export default {
	name: 'LangSelect',
	computed: {
		language() {
			return this.$store.state.app.language;
		},
	},
	methods: {
		handleSetLanguage(lang) {
			this.$i18n.locale = lang;
			this.$store.dispatch('app/setLanguage', lang);
			this.$message({
				message: 'Switch Language Success',
				type: 'success',
			});
		},
	},
};
</script>
