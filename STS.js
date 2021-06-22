/*
 * @Date: 2021-06-19 17:52:49
 */
const Core = require('@alicloud/pop-core');

//构建一个阿里云客户端, 用于发起请求。
//构建阿里云客户端时，需要设置AccessKey ID和AccessKey Secret。
var client = new Core({
	accessKeyId: 'LTAI5tKosXtkAUgL2KtZ5etq',
	accessKeySecret: 'E2kP6Wjz099qxVXJKyUtBmVPaLhTBg',
	endpoint: 'https://sts.aliyuncs.com',
	apiVersion: '2015-04-01',
});

//设置参数。
var params = {
	RegionId: 'cn-hangzhou',
	RoleArn: 'acs:ram::1356999832472170:role/ramosstest',
	RoleSessionName: 'RamOssTest',
};

var requestOption = {
	method: 'POST',
};

//发起请求，并得到响应。
client.request('AssumeRole', params, requestOption).then(
	result => {
		console.log(JSON.stringify(result));
	},
	ex => {
		console.log(ex);
	},
);
