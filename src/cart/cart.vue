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
		<div v-if="allGoods.length <= 0" class="wu">
			<div>
				<img src="../assets/cartimg/6.png" alt="">
				<p>购物车还没有商品</p>
				<p>我要买买买</p>
			</div>
		</div>

		<div class="car" v-if="allGoods.length > 0">
			<div class="car_quan">
				<p><span :class="allChoiceFlag? 'quan':'quanNo'" @click="all()">
				</span>多点超市</p>
			</div>
			<div class="goodList" v-for="item in allGoods">

				<div :class="item.singleFlag ? 'dui' : 'cuo'" @click="singleChoice(item)">
					
				</div>
					<img :src="item.imageUrl">
				<div>
					<p>{{ item.data.name }}</p>
					
					<p class="abc"><span @click="reduce(item)">-</span>{{ item.count }}<span @click = 'add(item)'>+</span></p>

				</div>
				<!-- <div class="removeGoods" v-show="item.count <= 0">
					
				</div> -->


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
				bian:true
			}
		},
		methods:{
			reduce(item){
				
				this.$store.commit("JIAN",item);
				console.log(item);
				this.$store.commit("CHANGE");
			},
			add(item){
				this.$store.commit("JIA",item);
				this.$store.commit("CHANGE");
			},
			singleChoice(item) {
				console.log("bbbb")
				// this.$store.commit("BIAN",item);
				item.singleFlag = !item.singleFlag;			
				let num = 0;
				this.allGoods.map(function(i) {
					if(i.singleFlag == false) {
						num++;
					}
				});
				if(num == 0) {
					this.allChoiceFlag = true;
				} else {
					this.allChoiceFlag = false;
				}
				this.$store.commit("CHANGE");
			},
			all() {
				this.allChoiceFlag = !this.allChoiceFlag;
				if(this.allChoiceFlag == false) {
					this.allGoods.map(function(i) {
						i.singleFlag = false;
					})
				}
				if(this.allChoiceFlag == true) {
					this.allGoods.map(function(i) {
						i.singleFlag = true;
					})
				}
				this.$store.commit("CHANGE");
			}
		},
		computed:{
			allGoods(){			
				return this.$store.state.objGoods;
			},
			allPrice(){
				return this.$store.getters.getMoney;
			},


		},

	}

</script>

<style>
	#cart{
		background: #f6f6f6;
	}
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
		width: 6rem;
		height: 2.5rem;
		float: right;
	}
	#cart .goodList div .abc{
		position: absolute;
		bottom: 0.25rem;
		right: 0.25rem;
		font-size: 0.5rem;
	}
	#cart .goodList div .abc span{
		font-size: 0.5rem;
		padding:0 15px;
		border: 1px solid red;
		margin: 0 0.25rem;
		
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
		font-size: 0.5rem;
	}

	#cart .car{
		background: #fff;
	}
	/*-------当数量为1时在点击要不要删除--------*/
	#cart .car .removeGoods{
		width: 50%;
		height: 200px;
		background: yellow;
		position: absolute;
		top: 25%;
		left: 25%;
	}
	#cart .wu{
		width: 100%;
		height: 10.625rem;
		position: relative;
	}
	#cart .wu div{
		position: absolute;
		width: 50%;
		left: 50%;
		top: 50%;
		margin-top: -35%;
		margin-left: -25%;
		text-align: center;

	}
	#cart .wu div p{
		margin: 0.5rem;
	}
	#cart .wu div p:last-child{
		background: #ff712b;
		width: 2.5rem;
		margin: 0 auto;
		height: 1rem;
		text-align: center;
		line-height: 1rem;
		border-radius: 5px;
		color: #fff;
	}
	#cart .wu div img{
		width: 2.5rem;
		height: 2.5rem;
		margin-bottom: 1rem;
	}
	#cart .car .goodList img{
		width: 2.5rem;
		height: 2.5rem;
	}
	#cart .car .dui{
		width: 0.5rem;
		height:0.5rem;
		margin: 1rem 0 0 5px;
		float: left;
		border: 1px solid red;
		border-radius: 50%;
		text-align: center;
		line-height: 0.5rem;
		background: url(../assets/cartimg/xuan.png) no-repeat left center;
		background-size: 0.6rem auto;

	}
	#cart .car .cuo {
		width: 0.5rem;
		height:0.5rem;
		margin: 1rem 0 0 5px;
		float: left;
		background: white;
		border: 1px solid red;
		border-radius: 50%;
		text-align: center;
		line-height: 0.5rem;
	}
	#cart .quan{
		float: left;
		margin: 10px 0 0 5px;
		display: block;
		height: 0.5rem;
		width: 0.5rem;
		border: 1px solid gray;
		border-radius: 50%;
		background: url(../assets/cartimg/xuan.png) no-repeat left center;
		background-size: 0.6rem auto;
	}
	#cart .car_quan{
		line-height: 1rem;
		width: 100%;
		height: 1rem;

	}
	#cart .quanNo{
		float: left;
		margin: 10px 0 0 5px;
		display: block;
		height: 0.5rem;
		width: 0.5rem;
		background: white;
		border: 1px solid gray;
		border-radius: 50%;
	}
</style>