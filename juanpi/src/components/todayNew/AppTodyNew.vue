<template>
  <div class="app-today-new">
    <img src="//jp.juancdn.com/jpwebapp/images/go_load_new.png?20161115" alt="">
    <div class="seachAndlist">
    <div class="search">
      <a href="#">搜索商品</a>
      <span class="iconfont icon-sousuo"></span>
    </div>
      <span class="iconfont icon-caidan"></span>
    </div>
  </div>
   
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'AppTodayNew',
  data () {
    return {
      
    }
  },
  computed:{
    ...mapState(['bottomMenu'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  .app-today-new {
    img {
      width: 100%;
      height: 0.56rem;
    }
    .seachAndlist {
      width: 100%;
      height: 0.38rem;
      padding: 0 0.3rem;
      display: flex;
      justify-content: space-around;
      background: #fff;
      .search {
        position: relative;
        height: 0.28rem;
        a {
          height: 0.25rem;
          margin-top: 0.1rem;
          line-height: 0.25rem;
          width: 3.15rem;
          color: #999;
          display: block;
          background: #f2f2f2;
          padding-left: 0.31rem;
          
        }
        span {
          position: absolute;
          left: 0;
          top: 0.03rem;
          font-size: 0.15rem;
          width: 0.15rem;
          height: 0.15rem;
        }
      }
      span {
        margin-top: 0.13rem;
        padding-left: 0.1rem;
      }
    }
  }
</style>
