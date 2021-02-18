import Vue from 'vue';
import Vuex from 'vuex';
import addressStore from './modules/addressStore';
import app from './modules/app';
import user from './modules/user';
import permission from './modules/permission';
import tagsView from './modules/tagsView';
import dragDemo from './modules/drag-demo';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		addressStore,
		app,
		user,
		permission,
		tagsView,
		dragDemo,
	},
});
