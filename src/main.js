import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import ytkVueComponents from '@youtingkun/vue-element-components';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store';
import '@/icons';
import VueI18n from 'vue-i18n';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import '@/styles/index.scss'; // global css
import drectives from './directive';
import api from './api/index.js';
import '@/components/index';
import '@/views/wheel/drag-demo/custom-component/index'; //注册画布的组件

import i18n from './lang';
// import VThrottle from 'v-throttle';

// Vue.use(VThrottle);

Vue.use(drectives);
Vue.use(Loading);
Vue.use(ElementUI, {
	i18n: (key, value) => i18n.t(key, value),
});
Vue.use(ytkVueComponents);
Vue.config.productionTip = false;
Vue.prototype.$api = api;

new Vue({
	i18n,
	router,
	store,
	render: h => h(App),
}).$mount('#app');
