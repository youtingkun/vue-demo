const tokens = {
	admin: {
		token: 'admin-token',
	},
	editor: {
		token: 'editor-token',
	},
};

const users = {
	'admin-token': {
		roles: ['admin', 'form', 'address', 'table'],
		introduction: 'I am a super administrator',
		avatar: 'http://ww1.sinaimg.cn/large/8112eb67ly1glsb1fm0gpj208b04o745.jpg',
		name: 'Super Admin',
	},
	'editor-token': {
		roles: ['editor'],
		introduction: 'I am an editor',
		avatar: 'http://ww1.sinaimg.cn/large/8112eb67ly1glsb203bngj207w04xaa1.jpg',
		name: 'Normal Editor',
	},
};

module.exports = [
	// user login
	{
		url: '/vue-admin-template/user/login',
		type: 'post',
		response: config => {
			const { username } = config.body;
			const token = tokens[username];

			// mock error
			if (!token) {
				return {
					code: 60204,
					message: 'Account and password are incorrect.',
				};
			}

			return {
				code: 20000,
				data: token,
			};
		},
	},

	// get user info
	{
		url: '/vue-admin-template/user/info.*',
		type: 'get',
		response: config => {
			const { token } = config.query;
			const info = users[token];

			// mock error
			if (!info) {
				return {
					code: 50008,
					message: 'Login failed, unable to get user details.',
				};
			}

			return {
				code: 20000,
				data: info,
			};
		},
	},

	// user logout
	{
		url: '/vue-admin-template/user/logout',
		type: 'post',
		response: _ => {
			return {
				code: 20000,
				data: 'success',
			};
		},
	},
	{
		url: 'user/getBtnPermissionList',
		type: 'post',
		response: config => {
			return {
				code: 20000,
				message: 'success',
				data: {
					list: ['add', 'del', 'update'],
				},
			};
		},
	},
];
