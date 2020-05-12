import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import home from './modules/home'

Vue.use(Vuex)

const vuexPersisted = new createPersistedState({
	storage: {
		getItem: key => uni.getStorageSync(key),
		setItem: (key, value) => uni.setStorageSync(key, value),
		removeItem: key => uni.clearStorageSync(key)
	}
})

const store = new Vuex.Store({
	modules: {
		home
	},
	plugins: [vuexPersisted]
})

export default store
