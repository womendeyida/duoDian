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
//定义路由规则
const routes = [
	{path:'', component:Home,children:[
		{path:'',component:Homea}]},
	{path:'/home', component:Home,children:[
		{path:'',component:Homea},
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
	{path:'/cart', component:Cart},
	{path:'/goodDetil', name: "goodDetil",component:GoodDetil}
]

// //创建路由对1象
// const router = new VueRouter({
// 	routes
// })

//导出创建好的router对象
export default new VueRouter({
	routes
})