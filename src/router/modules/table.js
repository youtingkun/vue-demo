import Layout from '@/layout';
const table = {
	path: '/table',
	component: Layout,
	meta: {
		title: '表格',
		icon: 'el-icon-share',
	},
	children: [
		{
			path: 'table-list-page-demo',
			component: () => import('@/views/table/table-list-page-demo'),
			name: 'table-list-page-demo',
			meta: {
				title: '表格列表页组件',
				icon: 'el-icon-share',
			},
		},
		{
			path: 'table-list-demo',
			component: () => import('@/views/table/table-list-demo'),
			name: 'table-list-demo',
			meta: {
				title: '表格列表组件',
				icon: 'el-icon-share',
			},
		},
	],
};

export default table;
