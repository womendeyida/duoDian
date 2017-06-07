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

//创建仓库(store)为了存放state mutations,actions
const store =new Vuex.Store({
	state:{//共享的数据
		obj:{},
		objGoods:[],
		// flag:false,
		data: {}
	},
	mutations:{//修改数据的唯一途径
		ADD_MONEY(state,item){
			console.log("123");
			state.obj = item;			
		},
		ADD_GOODS(state,item){
			// console.log("456");
			// state.objGoods.push(item);
			
			// //~~~~~~方法
			var flag = false;
			state.objGoods.map(function(newitem){

				if(newitem.data.name == item.data.name){
					flag = true;
					newitem.count++;
					
					console.log(state.count);
				}
			});
			// if(state.flag == false){//如果不存在	
				if(flag == false) {
					item.count = 1;
					state.objGoods.push(item);
					
				}	
					
					
			// };
			console.log(state.objGoods);
			console.log(state.count)
			 
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

		}
	}
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App, HomeXian },
  router,store
})


