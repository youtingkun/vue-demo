<template>
	<div>
		<el-form label-width="150px" :model="ruleForm" ref="ruleForm">
			<el-form-item label="input输入框必填">
				<el-input v-model="ruleForm.required"></el-input>
			</el-form-item>
			<el-form-item label="限制输入格式为数字和点号">
				<el-input v-model="ruleForm.phones" @input="changeCode"></el-input>
			</el-form-item>
			<el-form-item label="email" :rules="validateEmail('123')" prop="email">
				<el-input v-model="ruleForm.email"></el-input>
			</el-form-item>
			<el-form-item label="cardId" :rules="validateCardId('需要传入的参数')" prop="cardId">
				<el-input v-model="ruleForm.cardId"></el-input>
			</el-form-item>
			<el-button @click="submitForm('ruleForm')">立即创建</el-button>
		</el-form>
	</div>
</template>

<script>
import ytkUtils from 'ytk-utils';

export default {
	name: 'formPage',
	data() {
		return {
			ruleForm: {
				required: '',
				phones: '',
				email: '',
				cardId: '',
			},
			rules: {
				email: [{ required: true, trigger: 'blur' }],
			},
		};
	},
	created() {
		console.log(ytkUtils.RegExpRule);
	},
	methods: {
		changeCode() {
			this.ruleForm.phones = this.ruleForm.phones.replace(/[^\d.]/g, '');
		},
		// 采用动态传参的验证方式，验证依赖于其他变量。
		validateEmail(arg) {
			const check = (rule, value, callback) => {
				if (!ytkUtils.RegExpRule.isEmail(value)) {
					callback(new Error('邮箱格式不正确'));
				} else {
					callback();
				}
			};
			return { validator: check, required: true, trigger: 'blur' };
		},
		validateCardId(arg) {
			console.log(arg);
			const check = (rule, value, callback) => {
				if (!ytkUtils.RegExpRule.isCardID(value)) {
					callback(new Error('身份证格式不正确'));
				} else {
					callback();
				}
			};
			return { validator: check, required: true, trigger: 'blur' };
		},
		submitForm() {
			this.$refs['ruleForm'].validate(value => {
				console.log(value);
			});
		},
	},
};
</script>

<style scoped></style>
