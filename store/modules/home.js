const home  = {
    state: {
        name: '123'
    },
    getters: {
        name: state => state.name
    },
    actions: {
        CHANGE_NAME({commit}, data) {
            setTimeout(() => {
                commit('CHANGE_NAME', data)
            }, 1000);
        }
    },
    mutations: {
        CHANGE_NAME(state, data) {
            const {name} = data
            state.name = name
        }
    },
    namespaced: true
}

export default home