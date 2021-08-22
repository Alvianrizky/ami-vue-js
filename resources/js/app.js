require('./bootstrap');

import Vue from 'vue'
import router from './router'
import store from './store'
import VueCurrencyFilter from 'vue-currency-filter'
import VueSweetalert2 from 'vue-sweetalert2';
import DataTable from 'laravel-vue-datatable';
import LoadScript from 'vue-plugin-load-script';
// import Vue from 'vue'
import Vuetify from 'vuetify'
import Nl2br from 'vue-nl2br'
import colors from 'vuetify/lib/util/colors'
import 'boxicons';
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(LoadScript);
Vue.component('nl2br', Nl2br)

window.Vue = require('vue').default;


Vue.component('template-component', require('./components/Template.vue').default)

Vue.component('nav-admin', () => import('./components/NavAdmin.vue'))
Vue.component('nav-auditor', () => import('./components/NavAuditor.vue'))
Vue.component('nav-ketua', () => import('./components/NavKetua.vue'))

Vue.use(VueCurrencyFilter)
Vue.use(VueSweetalert2);
Vue.use(DataTable);


import 'sweetalert2/dist/sweetalert2.min.css'
import '../css/style.css'
import '../css/adminlte.css'
import '../css/adminlte.js'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.loadScript("../css/jquery.js")


Vue.use(VueCurrencyFilter, {
    symbol: 'Rp.',
    thousandsSeparator: '.',
    fractionCount: 0,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: true
})

const app = new Vue({
    el: '#app',
    data: {
        title: 'Laravel8'
    },
    router,
    store,
    vuetify: new Vuetify(),
    theme: {
        themes: {
            light: {
                primary: colors.purple,
                secondary: colors.grey.darken1,
                accent: colors.shades.black,
                error: colors.red.accent3,
                background: colors.indigo.lighten5, // Not automatically applied
            },
            dark: {
                primary: colors.blue.lighten3,
                background: colors.indigo.base, // If not using lighten/darken, use base to return hex
            },
        },
    },
});
