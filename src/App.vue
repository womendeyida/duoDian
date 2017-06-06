<template>
  <div id="app">
    <!-- <cart></cart> -->
    <div id="tabber">
      <router-link to="/home">首页</router-link>
      <router-link to="/fenlei">分类</router-link> 
      <router-link to="/vip">会员</router-link>
      <router-link to="/cart">购物车</router-link>
      <router-link to="/mine">我的</router-link>
       
    </div>
      <router-view></router-view> 
    
  </div>
</template>

<script>
// import Cart from './cart/cart'
  // import GoodDetail from './components/goodDetil'

export default {
  name: 'app',
  components: {
    // Cart
  }
}
</script>

<style type="text/css">
    #tabber{
      width: 100%;
      height: 1.25rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 16px;
      background: yellow;
      position: fixed;
      bottom: 0;
      left: 0;
    }
    #tabber div{
      width: 20%;
      text-align: center;
    }
    
</style>
