<template>

	<div id="cart">
		<div class="tou">1</div>
		<div class="header">
			<p>购物车</p>
		</div>
		<div class="tiao"></div>
		<div class="address">
			<p>多点君需要你的详细地址呦~</p>
			<p>送至(物美大卖场西三旗店)</p>
			
		</div>
		<div class="car">
			<div class="goodList" v-for="item in allGoods">
				<div class="dui">
					1
				</div>
				<img :src="item.imageUrl">
				<div>
					<p>{{ item.data.name }}</p>
					
					<p class="abc"><span @click="reduce(item)">-</span>{{ item.count }}<span>+</span></p>

				</div>
			</div>
		</div>
		<div class="allPrice">
			<div class="left">
				<p>{{ allPrice }}</p>
			</div>
		</div>
		<div class="bai">
			
		</div>
	</div>
</template>

<script>

	export default{
		name:"cart",
		data(){
			return{
				
			}
		},
		methods:{
			reduce(item){
				
				this.$store.commit("JIAN",item);
				console.log(item);
			}
		},
		computed:{
			allGoods(){			
				return this.$store.getters.getobjGoods;
			},
			allPrice(){
				return this.$store.getters.getMoney;
			}

		},

	}

</script>

<style>
	#cart .tou{
		height: 1.1rem;
		width: 100%;
	}
	#cart .header{
		width: 100%;
		height: 1.1rem;
		text-align: center;
		line-height: 1.1rem;
		position: fixed;
		background: #fff;
		top: 0;
		left: 0;
	}
	#cart .tiao{

		width: 100%;
		height: 0.3rem;
		background-image: linear-gradient(to bottom,#e8e8e8,#f5f5f5 );
		border-bottom: 0.1rem dashed #7da6d2;
	}
	#cart .address{
		background: #fff;
		width: 100%;
		height: 1.7rem;
		border-bottom: 2px solid #f9ebeb;
	}
	#cart .address p{
		font-size: 0.35rem;
		padding: 0.1rem 0 0 0.1rem;
	}
	#cart .address span{
		position: absolute;
		left: 8.5rem;
		top: 2rem;
	}
	#cart .goodList{
		width: 100%;
		height: 2.5rem;
		position: relative;
	}
	#cart .goodList div{
		width: 5rem;
		height: 2.5rem;
		float: right;
	}
	#cart .goodList div .abc{
		position: absolute;
		bottom: 10px;
		right: 10px;
		font-size: 20px;
	}
	#cart .goodList div .abc span{
		font-size: 20px;
		padding:0 15px;
		border: 1px solid red;
		
	}
	#cart .goodList img{
		width: 5.0rem;
		height: 5.0rem;
		float: left;
	}
	#cart .bai{
		
		bottom: 0;
		left: 0;
		height: 2.8rem;
		width: 100%;
	}
	#cart .allPrice{
		height: 1.5rem;
		width: 100%;
		background: #fff;
		position: fixed;
		bottom: 1.25rem;
		left: 0;
	}
	#cart .allPrice .left{
		height: 1rem;
		width: 5rem;
		margin-top: 0.25rem;
		color: #ff712b;
		font-size: 20px;
	}

	#cart .car{
		background: #fff;
	}
	#cart .car .goodList img{
		width: 2.5rem;
		height: 2.5rem;
	}
	#cart .car .dui{
		width: 0.5rem;
		height:0.5rem;
		margin-top: 1rem;
		float: left;
		background: yellow;
		border: 1px solid red;
		border-radius: 50%;
		text-align: center;
		line-height: 0.5rem;

	}
</style>