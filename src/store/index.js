import Vue from 'vue';
import Vuex from 'vuex';
import addressStore from './addressStore';
import app from './app';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		addressStore,
		app,
	},
});
