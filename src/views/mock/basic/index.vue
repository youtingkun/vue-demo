<template>
	<div class="">
		basic<el-button @click="handleBasic">获取数据</el-button>
		<el-table :data="basicList">
			<el-table-column
				prop="booleanTest"
				label="布尔值"
				:formatter="row => JSON.stringify(row.booleanTest)"
			></el-table-column>
			<el-table-column prop="natural" label="自然数"></el-table-column>
			<el-table-column prop="integer" label="整数"></el-table-column>
			<el-table-column prop="float" label="浮点数"></el-table-column>
			<el-table-column prop="character" label="随机单个字符"></el-table-column>
			<el-table-column prop="string" label="随机单个字符串"></el-table-column>
			<el-table-column
				prop="range"
				label="长度为10的数组"
				:formatter="row => JSON.stringify(row.range)"
			></el-table-column>
		</el-table>
		date
		<el-table :data="basicList">
			<el-table-column prop="date" label="日期"></el-table-column>
			<el-table-column prop="time" label="时间"></el-table-column>
			<el-table-column prop="datetime" label="日期-时间"></el-table-column>
			<el-table-column prop="now" label="现在的日期-时间"></el-table-column>
		</el-table>
		image
		<el-table :data="basicList">
			<el-table-column prop="image" label="图片链接"></el-table-column>
			<!-- <el-table-column prop="dataImage" label="base64图片"></el-table-column> -->
		</el-table>
		color
		<el-table :data="basicList">
			<el-table-column prop="color" label="color颜色">
				<template v-slot="{ row }">
					<span>{{ row.color }}</span>
					<div :style="{ 'background-color': row.color }" class="color-box"></div>
				</template>
			</el-table-column>
			<el-table-column prop="hex" label="hex颜色">
				<template v-slot="{ row }">
					<span>{{ row.hex }}</span>
					<div :style="{ 'background-color': row.hex }" class="color-box"></div>
				</template>
			</el-table-column>
			<el-table-column prop="rgb" label="rgb颜色">
				<template v-slot="{ row }">
					<span>{{ row.rgb }}</span>
					<div :style="{ 'background-color': row.rgb }" class="color-box"></div>
				</template>
			</el-table-column>
			<el-table-column prop="rgba" label="rgba颜色">
				<template v-slot="{ row }">
					<span>{{ row.rgba }}</span>
					<div :style="{ 'background-color': row.rgba }" class="color-box"></div>
				</template>
			</el-table-column>
			<el-table-column prop="hsl" label="hsl颜色">
				<template v-slot="{ row }">
					<span>{{ row.hsl }}</span>
					<!-- 这里mock的数据有问题，后面两项应该是%号，而生成的的是数字 -->
					<div :style="{ 'background-color': 'hsl(120, 100%, 50%)' }" class="color-box"></div>
				</template>
			</el-table-column>
		</el-table>
		text
		<el-table :data="basicList">
			<el-table-column prop="paragraph" label="英文段落"></el-table-column>
			<el-table-column prop="cparagraph" label="中文段落"></el-table-column>
			<el-table-column prop="sentence" label="英文句子"></el-table-column>
			<el-table-column prop="csentence" label="中文句子"></el-table-column>
			<el-table-column prop="word" label="英文单词"></el-table-column>
			<el-table-column prop="cword" label="中文单词"></el-table-column>
			<el-table-column prop="title" label="英文标题"></el-table-column>
			<el-table-column prop="ctitle" label="中文标题"></el-table-column>
		</el-table>
		name
		<el-table :data="basicList">
			<el-table-column prop="name" label="英文名"></el-table-column>
			<el-table-column prop="cname" label="中文名"></el-table-column>
		</el-table>
		web
		<el-table :data="basicList">
			<el-table-column prop="url" label="url"></el-table-column>
			<el-table-column prop="email" label="email"></el-table-column>
			<el-table-column prop="ip" label="ip"></el-table-column>
		</el-table>
		Address
		<el-table :data="basicList">
			<el-table-column prop="region" label="region"></el-table-column>
			<el-table-column prop="province" label="province"></el-table-column>
			<el-table-column prop="city" label="city"></el-table-column>
			<el-table-column prop="county" label="county"></el-table-column>
			<el-table-column prop="zip" label="邮编"></el-table-column>
		</el-table>
		Miscellaneous
		<el-table :data="basicList">
			<el-table-column prop="guid" label="guid"></el-table-column>
			<el-table-column prop="id" label="id"></el-table-column>
			<el-table-column prop="increment" label="自增整数"></el-table-column>
		</el-table>
		正则
		<el-table :data="basicList">
			<el-table-column prop="mobile" label="电话"></el-table-column>
		</el-table>
	</div>
</template>

<script>
import { mockBasic } from '@/api/mock-test';
export default {
	name: '',
	components: {},
	props: {},
	data() {
		return {
			basicList: [],
		};
	},
	computed: {},
	watch: {},
	methods: {
		handleBasic() {
			mockBasic({ a: 1 }).then(res => {
				this.basicList = res.data.list;
				console.log(res);
			});
		},
		getListData() {
			this.handleBasic();
		},
	},
	created() {
		this.getListData();
	},
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
.color-box {
	width: 10px;
	height: 10px;
}
//@import url(); 引入公共css类
</style>
