import Vue from "vue"

import Vuex from "vuex"

import actions from "./actions"

import mutations from "./mutations"

import state from "./state"
Vue.use(Vuex)


const getters = {
    
}


const store = new Vuex.Store({
    state,getters,mutations,actions
})

export default store