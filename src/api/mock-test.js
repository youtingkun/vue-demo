import request from '@/utils/request';

export function mockBasic(data) {
	return request({
		url: '/mock-test/basic',
		method: 'post',
		data,
	});
}
