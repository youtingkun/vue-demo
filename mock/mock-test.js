const Mock = require('mockjs');
const mock = Mock.mock;
module.exports = [
	{
		url: '/mock-test/basic',
		type: 'post',
		response: config => {
			let list = [];
			for (i = 1; i <= 2; i++) {
				list.push(
					mock({
						booleanTest: '@boolean',
						natural: '@natural(0,100)',
						integer: '@integer(-100,100)',
						float: '@float(-50,50,2,5)',
						character: '@character',
						string: '@string(3,10)',
						range: '@range(10)',
						date: '@date',
						time: '@time',
						datetime: '@datetime',
						now: '@now',
						image: '@image',
						// dataImage: '@dataImage(200x100)',
						color: '@color',
						hex: '@hex',
						rgb: '@rgb',
						rgba: '@rgba',
						hsl: '@hsl',
						paragraph: '@paragraph(1,2)',
						cparagraph: '@cparagraph(1,2)',
						sentence: '@sentence',
						csentence: '@csentence',
						word: '@word',
						cword: '@cword',
						title: '@title',
						ctitle: '@ctitle',
						name: '@name',
						cname: '@cname',
						url: '@url(http)',
						email: '@email',
						ip: '@ip',
						region: '@region',
						province: '@province',
						city: '@city',
						county: '@county',
						zip: '@zip',
						guid: '@guid',
						id: '@id',
						increment: '@increment',
						mobile: /^1[0-9]{10}$/,
					}),
				);
			}
			return {
				data: {
					list,
				},
				code: 20000,
				message: 'success',
			};
		},
	},
];
