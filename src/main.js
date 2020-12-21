import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import YTKVueComponents from 'ytk-vue-components';
import 'ytk-vue-components/lib/ytk-vue-components.css';
import router from './router';
import store from './store';
import '@/icons';
import VueI18n from 'vue-i18n';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import '@/styles/index.scss'; // global css
import drectives from './directive';

Vue.use(drectives);
Vue.use(Loading);
Vue.use(VueI18n);

const i18n = new VueI18n({
	locale: 'en', // 语言标识
	messages: {
		en: {
			hello: 'hello world',
			name: '{0} name',
		},
		cn: {
			hello: '你好世界',
			name: '{0} 名字',
		},
	},
});

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(YTKVueComponents);

new Vue({
	i18n,
	router,
	store,
	render: h => h(App),
}).$mount('#app');
