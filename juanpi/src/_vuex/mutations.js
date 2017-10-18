import state from "./state"

const mutations = {
    changeBottomBar(state,bottomList) {
        state.bottomMenu = bottomList
    }
}

export default mutations