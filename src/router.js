//default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


//Pages

import ModalAuth from '@/pages/ModalAuth'
import ModalType from '@/pages/ModalType'
import ModalValid from '@/pages/ModalValid'

// Routering
export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/form-examples",
            name: "Examples form",
            component: ModalType
        },
        {
            path: "/form-valid",
            name: "Form with password validation",
            component: ModalValid
        },
        {
            path: "/form-login-auth",
            name: "Form with login and auth",
            component: ModalAuth
        }
    ]
})