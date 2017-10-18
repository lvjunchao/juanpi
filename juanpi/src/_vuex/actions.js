

import axios from 'axios'

const actions = {
    getBottomList({commit}) {
        axios({
            method:'get',
            url:'http://localhost:3000/juanpi/index/getMenu?select=1_1'
           
        }).then((res)=>{
            console.log(res.data);
            commit('changeBottomBar',res.data.menu_list)
        })
    }
}

export default actions