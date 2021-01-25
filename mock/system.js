const Mock = require('mockjs');
const mock = Mock.mock;
module.exports = [
	{
		url: '/system/role/list',
		type: 'post',
		response: config => {
			let list = [];
			for (i = 1; i <= 2; i++) {
				list.push(
					mock({
						name: '@cname',
					}),
				);
			}
			return {
				code: 20000,
				message: 'success',
				data: {
					list,
				},
			};
		},
	},
	{
		url: '/system/role/tree',
		type: 'post',
		response: config => {
			let data = [
				{
					id: 1,
					label: '一级 2',
					children: [
						{
							id: 3,
							label: '二级 2-1',
							children: [
								{
									id: 4,
									label: '三级 3-1-1',
								},
								{
									id: 5,
									label: '三级 3-1-2',
								},
							],
						},
						{
							id: 2,
							label: '二级 2-2',
							children: [
								{
									id: 6,
									label: '三级 3-2-1',
								},
								{
									id: 7,
									label: '三级 3-2-2',
								},
							],
						},
					],
				},
			];

			return {
				code: 20000,
				message: 'success',
				data,
			};
		},
	},
];
