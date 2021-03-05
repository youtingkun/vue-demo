<template>
	<el-dialog :visible="showSelfDialog" :title="dialogType === 'add' ? '添加地址' : '编辑地址'" @close="handleCancel">
		<el-form label-width="130px" :model="data" :rules="rules" ref="ruleForm">
			<el-form-item label="收货人:" prop="name">
				<el-input v-model="data.name" placeholder="请填写收货人姓名"></el-input>
			</el-form-item>
			<el-form-item label="手机号码:" prop="phone"
				><el-input v-model="data.phone" placeholder="请填写手机号码"></el-input
			></el-form-item>
			<el-form-item label="区域信息:" prop="city">
				<el-cascader size="large" :options="options" v-model="data.city" @change="handleChange"> </el-cascader>
			</el-form-item>
			<el-form-item label="详细地址:" prop="address">
				<el-input v-model="data.address" placeholder="请输入街道门牌信息"></el-input>
			</el-form-item>
			<el-form-item label="邮政编码:" prop="post">
				<el-input v-model="data.post" placeholder="请填写邮政编码"></el-input>
			</el-form-item>
		</el-form>
		<span slot="footer" class="dialog-ffoter">
			<el-button @click="handleCancel">取消</el-button>
			<el-button @click="handleSubmit" type="primary">确定</el-button>
		</span>
	</el-dialog>
</template>

<script>
import _cloneDeep from 'lodash/cloneDeep';
import { regionDataPlus } from 'element-china-area-data';

export default {
	name: '',
	components: {},
	props: {
		dialogType: {
			type: String,
		},
		showDialog: {
			type: Boolean,
			default: false,
		},
		addressItem: {
			type: Object,
			default: function () {
				return {};
			},
		},
	},
	data() {
		const phoneRules = (rule, value, callback) => {
			if (!value) {
				callback(new Error('请填写手机号'));
			} else {
				const reg = /^1[3|4|5|6|7|8][0-9]\d{8}$/;
				if (reg.test(value)) {
					callback();
				} else {
					return callback(new Error('请输入正确的电话'));
				}
			}
		};
		const postRules = (rule, value, callback) => {
			if (!value) {
				callback();
			} else {
				const reg = /^\d{6}$/;
				if (reg.test(value)) {
					callback();
				} else {
					return callback(new Error('请输入正确的邮编'));
				}
			}
		};
		return {
			options: regionDataPlus,
			selectedOptions: [],
			data: {},
			showSelfDialog: false,
			rules: {
				name: [{ required: true, message: '请填写收货人姓名', trigger: 'blur' }],
				phone: [
					{ required: true, message: '请填写手机号码', trigger: 'blur' },
					{ validator: phoneRules, trigger: 'blur' },
				],
				city: [{ required: true, message: '请填写区域信息', trigger: 'blur' }],
				address: [{ required: true, message: '请输入街道门牌信息', trigger: 'blur' }],
				post: [{ validator: postRules, trigger: 'blur' }],
			},
		};
	},
	computed: {},
	watch: {
		showDialog(newVal) {
			this.showSelfDialog = newVal;
		},
		addressItem: {
			immediate: true,
			handler: function (val) {
				this.data = _cloneDeep(val);
			},
			deep: true,
		},
	},
	methods: {
		handleChange(val) {
			console.log(val);
		},
		handleCancel() {
			this.$emit('cancel');
		},
		handleSubmit() {
			this.$refs.ruleForm.validate(valid => {
				if (valid) {
					this.$emit('submit', this.data);
				} else {
					console.log('表单验证未通过');
				}
			});
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
<style scoped></style>
