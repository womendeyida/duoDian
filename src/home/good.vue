<template>

	<div id="good">
		<p class="goodHeader">
			<img src="../assets/zao1.jpg" alt="" onclick="history.back()">
			<span>早市</span>
			<img src="../assets/zao2.png" alt="">
		</p>
		<img src="../assets/z.png" alt="" class="zaoImg">
		<img src="../assets/zao4.png" alt="" class="zaoImg4">
		<img src="../assets/zao3.png" alt="" class="zaoImg3">
		<div class="goodList">
			<ul class="goodListUl clear" >
				<li v-for="item in datah" class="goodListLi" >
					<img :src="item.img" alt="" class="goodListImg" @click="show1(item)">
					<p>{{ item.title }}</p>
					<p>{{ item.price }}</p>
					<p class="jia">+</p>
				</li>
			</ul>
		</div>
		<div class="kong"></div>
	</div>

</template>

<script>

	export default{
		name:"good",
		data(){
			return {
				datah:[]

			}
		},
		methods:{

			show1(item){
				// 跳转详情页面时，同时需要传一个对象进去
				this.$store.commit('ADD_GOODSLIST', item);
				// 详情页面的跳转
				this.$router.push({
					// name: 'goodDetil2'
					path: '/goodDetil2/'
				})
			},
			// addItem(item){
			// 	this.$store.commit("ADD_GOODS", item);
			// }

		},

		created(){  //组件创建完成即可发起网络请求
			this.axios.get("./static/fenleib.json").then( res => {
				console.log(res.data.data.list)
				// console.log(res.data.data.pageModules[2].dataList);
				this.datah = res.data.data.list
			})
		}
		
	}

</script>

<style scoped>
	#good{
		/*background-color: #fff;*/
	}
	#good h1{
		color:blue;
	}
	#good .goodHeader{
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 1.1rem;
		background-color: #fff;
		/*line-height: 1.1rem;*/
		/*text-align:center;*/
		width: 100%;
		position: fixed;
		top:0;
		left:0;
		right: 0;
		z-index: 99;
	}
	.goodHeader img:first-of-type{
		width: 0.65rem;
    	height: 0.65rem;
	}
	.goodHeader img:nth-of-type(2){
		width: 0.625rem;
		height: 0.625rem;
	}
	.goodHeader>span{
		display: inline-block;
		width: 5.625rem;
		height: 1.1rem;
		line-height: 1.1rem;
		text-align: center;
	}
	.zaoImg{
		width: 100%;
		height: 5.0rem;
		margin-top: 1.1rem;
	}
	.zaoImg4{
		width: 100%;
		height: 1.5rem;
	}
	
	.zaoImg3{
		width: 100%;
		height: 1.25rem;
	}
	
	/*---------------水果列表-----------------*/
	.goodListUl{
		width: 100%;
		/*display: flex;
		flex-wrap:wrap; 
		justify-content:space-around;*/

	}
	.goodListLi{
		width: 3.075rem;
		height:5.825rem;
		background-color: #fff;
		padding:0.25rem 0.15rem;
		position: relative;
		margin: 1px;
		float: left;

	}
	.goodListLi p:nth-of-type(2){
		color: #FF712B;
		/*margin-top: 10px;*/
		position: absolute;
		bottom:0.825rem;
		/*right: 0.5rem;*/
	}
	.jia{
		width: 0.75rem;
		height: 0.5rem;
		line-height: 0.5rem;
		text-align: center;
		color:#FF712B;
		border:1px solid #FF712B;
		position: absolute;
		bottom:0.825rem;
		right: 0.5rem;
	}
	.goodListImg{
		width: 2.575rem;
		height: 2.575rem;
		margin-bottom: 10px;
	}
	.kong{
		width: 100%;
    	height: 1.25rem;
	}
	

</style>