const has = {
	bind: function (el, binding, vnode) {
		// 获取页面按钮权限
		let btnPermission = binding.value;
		if (btnPermission) {
			// 如果指令传值，获取指令参数，根据指令参数和当前登录人按钮权限做比较。
			btnPermissionsArr = Array.of(binding.value);
		} else {
			// 否则获取路由中的参数，根据路由的btnPermissionsArr和当前登录人按钮权限做比较。
			btnPermissionsArr = vnode.context.$route.meta.btnPermissions;
		}
		if (!Vue.prototype.$_has(btnPermissionsArr)) {
			el.parentNode.removeChild(el);
		}
	},
};
export default has;
