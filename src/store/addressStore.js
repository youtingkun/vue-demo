export default {
	namespaced: true,
	state: {
		addressList: [
			{ id: '1', name: '张三', phone: '18580745503', city: ['110000', '110100', '110101'], address: '某某小区', post: '400805' },
			{
				id: '2',
				name: '张四',
				phone: '18580745503',
				city: ['110000', '110100', '110101'],
				address: '某某小区',
				post: '400805',
			},
			{ id: '3', name: '张五', phone: '18580745503', city: ['110000', '110100', '110101'], address: '某某小区', post: '400805' },
		],
	},
	actions: {},
	mutations: {
		del(state, addressObj) {
			const addressList = state.addressList;
			const resIndex = addressList.findIndex(el => el.name === addressObj.name);
			state.addressList.splice(resIndex, 1);
		},
		edit(state, addressObj) {
			const addressList = state.addressList;
			const resIndex = addressList.findIndex(el => el.name === addressObj.name);
			state.addressList.splice(resIndex, 1, addressObj);
		},
		add(state, addressObj) {
			state.addressList.push(addressObj);
		},
	},
};
