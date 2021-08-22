import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: '',
        loggedIn: false,
        akses: '',
    },
    mutations: {
        setHeaderToken() {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
        },
        removeHeaderToken() {
            delete axios.defaults.headers.common['Authorization']
        },
        setLoggedIn(state){
            state.loggedIn = localStorage.getItem('loggedIn')
        },
        setAkses(state, data) {
            state.akses = data
        },
        // cobaAja(state, data) {
        //     state.token = data
        // },

        // cekAja(state) {
        //     state.token
        // }
    }
})

export default store