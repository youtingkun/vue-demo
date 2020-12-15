import Vue from 'vue';
import Vuex from 'vuex';
import addressStore from './modules/addressStore';
import app from './modules/app';
import user from './modules/user';
import permission from './modules/permission';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		addressStore,
		app,
		user,
		permission,
	},
});
