import Vue from "vue"

import Vuex from "vuex"

import actions from "./actions"

import mutations from "./mutations"
Vue.use(Vuex)

const state = {
    
}
const getters = {
    
}


const store = new Vuex.Store({
    state,getters,mutations,actions
})

export default store