// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import  HomeXian from './home/home_xian'
import router from './router/index'
//导入vueX
import Vuex from 'vuex'
Vue.use(Vuex)

//引入重置样式表
import '../css/reset.css'

 
import axios from 'axios'
Vue.prototype.axios = axios
Vue.config.productionTip = false

Vue.prototype.allChoiceFlag = true;

//创建仓库(store)为了存放state mutations,actions
const store =new Vuex.Store({
	state:{//共享的数据
		obj:{},
		obj1:{},
		objGoods:[],
		// flag:false,
		data: {},
		money:0,
		
	},
	mutations:{//修改数据的唯一途径
		// 主页里面的详情页面
		ADD_MONEY(state,item){
			// console.log("123");
			state.obj = item;			
		},
		// 早市里面的详情页面
		ADD_GOODSLIST(state,item){  
			// console.log("1789");
			state.obj1 = item;			
		},
		//往购物车里面添加商品
		ADD_GOODS(state,item){
			// console.log("456");
			// state.objGoods.push(item);
			
			// //~~~~~~方法
			var flag = false;
			state.objGoods.map(function(newitem){

				if(newitem.data.name == item.data.name ){
					flag = true;
					newitem.count++;
					// console.log(state.count);
					
				}
			});
			// if(state.flag == false){//如果不存在	
				if(flag == false) {
					//item.count = 1;
					//上面的方法不能让购物车里面的count值改变，
					//但是对象的这个count属性确实变了，只是页面不变而已，
					//这是因为给对象添加属性的时候，对象是没有set和get方法的
					//所以得用Vue.set这个方法
					Vue.set(item,'count',1);
					//除了Vue.set这个方法外也可以用this.$vue()这个方法，
					//但是在这里不好使，因为这里的this不是指全局。
					//在局部里面可以用。
					Vue.set(item,'singleFlag',true);
					state.objGoods.push(item);
					
				}	
					 
					
			// };
			console.log(state.objGoods);
			// console.log(state.count)
			 
		},
		//点击购物车里面的减号的时候让item的count属性减一，
		//当为1的时候再点击就从数组中删除
		JIAN(state,item){
			state.objGoods.map(function(newitem,i){

				if(newitem.data.name == item.data.name){
					
					if(newitem.count == 1) {
						state.objGoods.splice(i, 1);
					} else {
						
						item.count--;
						
					}
					// item.count--;

					
				}
			})
		},
		//当点击加号的时候只需让item的count属性加一就行了
		JIA(state,item){
			item.count++;
		},
		// REDUCE_PRICE(state){	
		// 	console.log('aaa');	
		// 	const a = 0;
		// 	state.objGoods.map(function(newitem){
		// 		a += newitem.count*newitem.data.promotionPrice;
		// 	});			
		// },
		 
		//每当点击添加商品的加号的时候都会去执行这个方法，将商品的价格
		//加到一起
		ADD_PRICE(state,item){	
			console.log('aaa');	
			
			state.money += item.data.promotionPrice;
					
		},

		//每当点击加号、减号、全选、单选等按钮的时候都会去调用的方法，
		//重新计算总价格
		CHANGE(state){
			var a = 0;
			state.objGoods.map(function(newitem){
				//这里的判断一下，如果某个商品被取消了，
				//也就是前面的选中状态未选中的话则不去
				//计算未选中的那些商品的价格，也就是只计算singleFlag为
				//true的商品。
				if(newitem.singleFlag == true){
					a += newitem.count*newitem.data.promotionPrice;
				}
				// a += newitem.count*newitem.data.promotionPrice;
		 	});
		 	state.money = a;	

		}
		
		
		
	},
	actions:{//异步操作的事件
		//这个context就是$store
		addMoney(context,price){
			console.log(context);
			//异步更改state
			setTimeout(function(){

				context.commit("ADD_MONEY",price)
			},1000);
		},
  
		requestData(state){
			axios.get('../../static/quanQiu.json').then((res) => {
				console.log(res.data.data.pageModules);
				/*this.dataa = res.data.data.pageModules[1].dataList;
				this.datab = res.data.data.pageModules[2].dataList;
				this.datac = res.data.data.pageModules[3].dataList[0];
				this.datad = res.data.data.pageModules[5].dataList;
				console.log(res.data.data.pageModules[5].dataList)
				this.datae = res.data.data.pageModules[6].dataList[0];
				this.dataf = res.data.data.pageModules[7].dataList;
				this.datag = res.data.data.pageModules[8].dataList;
				this.datah = res.data.data.pageModules[9].dataList[0];
				this.datai = res.data.data.pageModules[10].dataList;*/	
				state.data = res;
			})
		}
	}, 
	getters:{//vuex中的计算属性
		getobj(state){
			return state.obj;
		},
		getobjGoods(state){
			return state.objGoods;
			// var num = 0;
			// objGoods.map(function(item){
			// 	if(item.flag == false) {
			// 		num++;
			// 	}
			// });
			// if(num == 0) {
			// 	allPrice.flag = true;
			// }
			// if(num == objGoods.length) {
			// 	choice.flag = false;
			// } else {
			// 	allPrice.flag = false;
			// }
		},

		getMoney(state){
			return '总价格为：'+state.money+'元';
		}
	}
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,store
})


