<template>

	<div id="fenleia">
		<ul>
			<li v-for="item in list">
				<img :src="item.data.skus.img">
				<p>{{ item.data.name }}</p>
				<div id="juzhong">
				<span id="myspan1">{{item.data.price}}</span>
				<span id="myspan">+</span>
				</div>
			</li>
		</ul>
		<div class="kong"></div>
	</div>

</template>

<script>

	export default{
		name:"fenleia",
		data(){
			return{
				list:[]
			}
		},
		created(){
			this.axios.get('../../static/duoDian.json').then(res =>{
						this.list = res.data.data.pageModules[11].dataList
					}
				)
		}
	} 

</script>

<style>
	#fenleia{
		background:white; 
	}
	#fenleia ul{
		display: flex;
		flex-wrap:wrap; 
		justify-content: space-around;
	}
	#fenleia li{
		width: 3rem;
		height: 4rem;
		text-align: center;
		border-left: 1px solid #f6f6f6;
		border-bottom: 1px solid #f6f6f6;
	}
	#fenleia img{
		width: 2.5rem;
		height: 2.5rem;
	}
	#fenleia p{
		font-size: 12px;
	}
	#fenleia #myspan1{
		font-size: 12px;
		color: #fd814e;
		margin: 10px 0 0 0;
	}
	#fenleia #myspan{
		display: inline-block;
		width: 0.5rem;
		height: 0.5rem;
		border:1px solid #fd814e;
		text-align: center;
		color: #fd814e;
	}
	#fenleia .kong{
		width: 100%;
		height: 1.5rem;
	}
	#fenleia #juzhong{
		display: flex;
		height: 0.8rem;
		justify-content: space-around;
		padding-top:0.25rem; 
	}
</style>