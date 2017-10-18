<template>
  <div class="app-bottom-nav">
  
    <footer>
      <router-link to="today" :class='{checkedColor:isChecked=="today"}' @click.native.prevent='isChecked="today"'><span  class="iconfont icon-shouye1"></span>今日上新</router-link>
      <router-link to="best" :class='{checkedColor:isChecked=="best"}' @click.native.prevent='isChecked="best"'><span class="iconfont icon-icon-test"></span>卷皮选优</router-link>
      <router-link to="global" :class='{checkedColor:isChecked=="global"}'  @click.native.prevent='isChecked="global"'><span class="iconfont icon-quanqiugou" ></span>全球购</router-link>
      <router-link to="buycar" :class='{checkedColor:isChecked=="buycar"}' @click.native.prevent='isChecked="buycar"'><span class="iconfont icon-gouwuche"></span>购物车</router-link>
      <router-link to="mine" :class='{checkedColor:isChecked=="mine"}' @click.native.prevent='isChecked="mine"'><span class="iconfont icon-wode"></span>我的卷皮</router-link>
    
    </footer>

  </div>
</template>

<script>
import {mapActions,mapState} from "vuex"
export default {
  name: 'AppBottomNav',
  data () {
    return {
      isChecked:'today'
    }
  },
  computed: {
    ...mapState(['bottomMenu'])
  },
  methods:{
    ...mapActions(['getBottomList'])
  },
  mounted() {
    this.getBottomList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  .app-bottom-nav {
    width: 100%;
    height: 0.49rem;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid #eee;
    footer {
      height: 100%;
      width: 100%;
      font-size: 12px;
      display: flex;
      a {
        width: 20%;
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        align-items: center;
        color: rgba(0,0,0,.4);
        span {
          display: block;
          font-size: 0.24rem;
        }
      }
      .checkedColor {
        color: #FF464E;
      }
    }
  }
  
</style>
