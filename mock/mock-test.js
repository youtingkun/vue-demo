module.exports = [
	{
		url: '/mock-test/basic',
		type: 'post',
		response: config => {
			return {
				code: 20000,
				message: 'success',
			};
		},
	},
];
