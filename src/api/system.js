import request from '@/utils/request';

const getRoleList = data => {
	return request({
		url: '/system/role/list',
		method: 'post',
		data,
	});
};

const getRoleTree = data => {
	return request({
		url: '/system/role/tree',
		method: 'post',
		data,
	});
};

export default { getRoleList, getRoleTree };
