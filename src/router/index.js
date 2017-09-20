import Vue from 'vue'
// 引入vueRouter并安装
import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
//可以让Vuerouter在任何组件中使用
//其中的工具提供为全局
Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)
//引入组件
import Home from '../home/home'
import Good from '../home/good'
import HomeXian from '../home/home_xian'
import Homea from '../home/homea'
import Homeb from '../home/homeb'
import Cart from '../cart/cart'
import Fenlei from '../fenlei/fenlei'
import Fenleia from '../fenlei/fenleia'
import Fenleib from '../fenlei/fenleib'
import Mine from '../mine/mine'
import AllList from '../mine/allList'
import Vip from '../vip/vip'
import GoodDetil from '../components/goodDetil'

import Huiyuan from '../components/huiyuan'
import GoodDetill from '../components/goodDetail1'

import GoodDetil2 from '../components/goodDetil2'

//定义路由规则
//重定向问题：路由 redirect:'home'

const routes = [
	{path:'', redirect:'/home/homea' },
	// {path:'', component:Home,children:[
	// 	{path:'',component:Homea}]},
	{path:'/home', component:Home,children:[
		{path:'',redirect:'/home/homea'},
		{path:'homea',component:Homea},
		{path:'homeb',component:Homeb}
	]},
	{path:'/home_xian', component:HomeXian},
	{path:'/fenlei', component:Fenlei,children:[
		{path:'',component:Fenleia},
		{path:'fenleia',component:Fenleia},
		{path:'fenleib',component:Fenleib}
	]},
	{path:'/good', component:Good},
	{path:'/vip', component:Vip},
	{path:'/mine', component:Mine},
	{path:'/fenlei', component:Fenlei},
	{path:'/allList', component:AllList},
	{path:'/cart',name:"cart",component:Cart},
	{path:'/goodDetil', name: "goodDetil",component:GoodDetil},
	{path:'/huiyuan',name:"huiyuan",component:Huiyuan},
	{path:'/goodDetail1',name:"goodDetail1",component:GoodDetill},
	{path:'/goodDetil', name: "goodDetil",component:GoodDetil},
	{path:'/goodDetil2', name: "goodDetil2",component:GoodDetil2}

]

// //创建路由对1象
// const router = new VueRouter({
// 	routes
// })

//导出创建好的router对象
export default new VueRouter({
  mode: 'history',
	routes
})
