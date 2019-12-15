import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        search: ''
    },
    mutations: {
        change(state, search) {
            state.search = search
        }
    },
    getters: {
        search: state => state.search
    }
});

export const user = new Vuex.Store({
    state: {
        user: ''
    },
    mutations: {
        change(state, user) {
            state.user = user
        }
    },
    getters: {
        user: state => state.user
    }
});