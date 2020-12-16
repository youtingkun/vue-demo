<template>
	<div>
		表单页面展示组件
		<searchTableListPage>
			<template #search>1</template>
			<template #action>2</template>
			<template #table>3</template>
			<template #pagination>4</template>
		</searchTableListPage>
	</div>
</template>

<script>
import searchTableListPage from '@/components/search-table-list-page';
export default {
	name: '',
	components: { searchTableListPage },
	data() {
		return {};
	},
};
</script>

<style scoped></style>
