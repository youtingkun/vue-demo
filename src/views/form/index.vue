<template>
	<div>
		<el-form label-width="150px">
			<el-form-item label="input输入框必填">
				<el-input v-model="ruleForm.required"></el-input>
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
			},
		};
	},
};
</script>

<style scoped></style>
