import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import { Message } from 'element-ui';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
import { getToken } from '@/utils/auth';
import store from '@/store';

Vue.use(VueRouter);

const createRouter = () =>
	new VueRouter({
		// mode: 'history', // require service support
		scrollBehavior: () => ({ y: 0 }),
		routes: routes.constantRoutes,
	});
const router = createRouter();

function getPageTitle(pageTitle) {
	if (pageTitle) {
		return `${pageTitle}`;
	}
	return `默认title`;
}
const whiteList = ['/login'];
// router.beforeEach(async (to, from, next) => {
// 	NProgress.start();
// 	document.title = getPageTitle(to.meta.title);
// 	const hasToken = getToken();
// 	if (hasToken) {
// 		if (to.path === '/login') {
// 			next({ path: '/' });
// 			NProgress.done();
// 		} else {
// 			const hasRoles = store.state.user.roles && store.state.user.roles.length > 0;
// 			if (hasRoles) {
// 				next();
// 				NProgress.done();
// 			} else {
// 				try {
// 					const { roles } = await store.dispatch('user/getInfo');
// 					const generateRoutes = await store.dispatch('permission/generateRoutes', roles);
// 					// console.log(JSON.stringify(generateRoutes));
// 					router.addRoutes(generateRoutes);
// 					next({ ...to, replace: true });
// 					NProgress.done();
// 				} catch (error) {
// 					await store.dispatch('user/resetToken');
// 					Message.error(error || 'Has Error');
// 					next(`/login?redirect=${to.path}`);
// 					NProgress.done();
// 				}
// 			}
// 		}
// 	} else {
// 		if (whiteList.indexOf(to.path) !== -1) {
// 			next();
// 			NProgress.done();
// 		} else {
// 			next(`/login?redirect=${to.path}`);
// 			NProgress.done();
// 		}
// 	}
// });

export function resetRouter() {
	const newRouter = createRouter();
	router.matcher = newRouter.matcher; // reset router
}

export default router;
