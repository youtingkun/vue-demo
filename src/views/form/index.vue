<template>
	<div>
		<el-form label-width="150px">
			<el-form-item label="input输入框必填">
				<el-input v-model="ruleForm.required"></el-input>
			</el-form-item>
			<el-form-item label="限制输入格式">
				<el-input v-model="ruleForm.phones" @input="changeCode"></el-input>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
	name: '',
	data() {
		return {
			ruleForm: {
				required: '',
				phones: '',
			},
		};
	},
	methods: {
		changeCode() {
			this.ruleForm.phones = this.ruleForm.phones.replace(/[^\d.]/g, '');
		},
	},
};
</script>

<style scoped></style>
