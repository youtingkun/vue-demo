import { asyncRoutes, constantRoutes } from '@/router/routes';

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
// 如果route里面有meta.roles，那么就必须匹配，否则就默认生成
function hasPermission(roles, route) {
	if (route.meta && route.meta.roles) {
		return roles.some(role => route.meta.roles.includes(role));
	} else {
		return true;
	}
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
// 这个算法子路由判断的时候需要父路由也有权限才会显示。只有子路由权限没有父路由权限，那么整个父路由下面的子路由都不会显示。
export function filterAsyncRoutes(routes, roles) {
	const res = [];

	routes.forEach(route => {
		const tmp = { ...route };
		if (hasPermission(roles, tmp)) {
			if (tmp.children) {
				tmp.children = filterAsyncRoutes(tmp.children, roles);
			}
			res.push(tmp);
		}
	});

	return res;
}

const state = {
	routes: [],
	addRoutes: [],
};

const mutations = {
	SET_ROUTES: (state, routes) => {
		state.addRoutes = routes;
		state.routes = constantRoutes.concat(routes);
	},
};

const actions = {
	generateRoutes({ commit }, roles) {
		return new Promise(resolve => {
			let accessedRoutes;
			if (roles.includes('admin')) {
				accessedRoutes = asyncRoutes || [];
			} else {
				accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
			}
			commit('SET_ROUTES', accessedRoutes);
			resolve(accessedRoutes);
		});
	},
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
};
