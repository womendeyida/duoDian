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
		num: []
	},
	mutations:{//修改数据的唯一途径
		// 主页里面的详情页面
		ADD_MONEY(state,item){
			console.log("123");
			state.obj = item;			
		},
		// 早市里面的详情页面
		ADD_GOODSLIST(state,item){  
			console.log("1789");
			state.obj1 = item;			
		},
		ADD_GOODS(state,item){
			// console.log("456");
			// state.objGoods.push(item);
			
			// //~~~~~~方法
			var flag = false;
			state.objGoods.map(function(newitem){

				if(newitem.data.name == item.data.name ){
					flag = true;
					newitem.count++;
					console.log(state.count);
					
				}
			});
			// if(state.flag == false){//如果不存在	
				if(flag == false) {
					
					Vue.set(item,'count',1);
					Vue.set(item,'singleFlag',true);
					state.objGoods.push(item);
					state.num.push(item.count);
				}	
					 
					
			// };
			console.log(state.objGoods);
			console.log(state.count)
			 
		},
		BIAN(item){
			console.log("oooo")
			item.singleFlag = !item.singleFlag;
			console.log(item.singleFlag)
		},
		// ADD_GOOD(state,item){
		// 	// //~~~~~~方法
		// 	var flag = false;
		// 	state.objGoods.map(function(newitem){

		// 		if(newitem.title == item.title ){
		// 			flag = true;
		// 			newitem.count++;
					
		// 			console.log(state.count);
		// 		}
		// 	});
		// 	// if(state.flag == false){//如果不存在	
		// 		if(flag == false) {
		// 			item.count = 1;
		// 			state.objGoods.push(item);
					
		// 		}	
		// }, 
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
		ADD_PRICE(state,item){	
			console.log('aaa');	
			
			state.money += item.data.promotionPrice;
					
		},
		CHANGE(state){
			var a = 0;
			state.objGoods.map(function(newitem){
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


