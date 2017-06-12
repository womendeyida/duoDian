<template>

	<div id="allList">
		<div class="header">
			<div onclick="history.back()"><img src="../assets/zao1.jpg" alt=""></div>
			<span>全部订单</span>			
		</div>
		<div class="list">
			<p v-for="item in croList">
				{{ item.name }}
			</p>
		</div>
		<div class="main">
			<div class="main_moddle">
				<img src="../assets/mine/allList.png" alt="">
				<p>近三个月内没有订单</p>
				<router-link to="/home">
					<span>去逛逛</span>
				</router-link>
				<router-view></router-view>
			</div>
		</div>
	</div>

</template>

<script>

	export default{
		name:"allList",
		data(){
			return{
				croList:[
					{name:"全部"},
					{name:"待支付"},
					{name:"待完成"},
					{name:"已完成"},
					{name:"已取消"}
				]
			}
		}
		

		
	}

</script>

<style>
	#allList h1{
		color:blue;
	}
	#allList .header{
		width: 100%;
		height: 1.1rem;
		background: #fff;
		text-align: center;
		position: relative;
		line-height: 1.1rem;
	}
	#allList .header div{
		width: 0.8rem;
		height: 0.8rem;
		position: absolute;
		left: 0.25rem;
		top: 0.15rem;
		border-radius: 50%;
	}
	#allList .header div img{
		width: 0.8rem;
		height: 0.8rem;
	}
	#allList .list{
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 1rem;
		background: #fff;
		border-top: 1px solid #ccc;
		border-bottom: 2px solid #fff;
	}
	#allList .main{
		height: 12.5rem;
		width: 100%;
	}
	#allList .main .main_moddle{
		width: 5.0rem;
		height: 7.5rem;
		margin: 0 auto;
		text-align: center;

	}
	#allList .main .main_moddle img{
		width: 3.2rem;
		height:  3.2rem;
	}
	#allList .main .main_moddle p{
		margin-bottom: 20px;
	}
	#allList .main .main_moddle span{

		padding:10px 40px;
		height: 20px; 
		background: #ff6d01;
		color: #fff;
	}
</style>