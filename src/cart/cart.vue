<template>

	<div id="cart">
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
				<img :src="item.imageUrl">
				<p>{{ item.data.name }}</p>
				<span></span>
				<p>{{ item.count }}</p>
			</div>
		</div>
		<div class="bai">
			1
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
		computed:{
			allGoods(){			
				return this.$store.getters.getobjGoods;
			}
		},

	}

</script>

<style>
	#cart .header{
		width: 100%;
		height: 1.1rem;
		text-align: center;
		line-height: 1.1rem;
	}
	#cart .tiao{
		width: 100%;
		height: 0.3rem;
		background-image: linear-gradient(to bottom,#e8e8e8,#f5f5f5 );
		border-bottom: 0.1rem dashed #7da6d2;
	}
	#cart .address{
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
	#cart .goodList img{
		width: 5.0rem;
		height: 5.0rem;
	}
	#cart .bai{
		height: 1.25rem;
		width: 100%;
	}
</style>