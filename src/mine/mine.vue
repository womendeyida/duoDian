<template>

	<div id="mine">
		<div class="header">
			<div class="header_left">
				<p>你好</p>
				<span>普通会员</span>
			</div>
			<div class="header_right">
				<p>二维码</p>
				<span>会员专属码</span>
			</div>
			<div class="header_bottom">
				<figure>
					<p>0.00</p>
					<p>余额</p>
				</figure>
				<figure>
					<p>0</p>
					<p>积分</p>
				</figure>
				<figure>
					<p>0</p>
					<p>卡包</p>
				</figure>
				<figure>
					
					<p>0</p>
					<p>优惠券</p>
					
				</figure>
			</div>
		</div>
		<router-link to="/allList">
		<div class="allGoods" >
			<figure>
				<span></span>
				<p>待支付</p>
			</figure>
			<figure>
				<span></span>
				<p>未完成</p>
			</figure>
			<figure>
				<span></span>
				<p>已完成</p>
			</figure>
			<figure>
				<span></span>
				<p>全部订单</p>
			</figure>
		</div>
		</router-link>
		<router-view></router-view>	
		<div class="controll">
			<figure>
				<span></span>
				<p>会员中心</p>
			</figure>
			<figure>
				<span></span>
				<p>收货地址</p>
			</figure>
			<figure>
				<span></span>
				<p>帮助中心</p>
			</figure>
			<figure>
				<span></span>
				<p>客服电话</p>
			</figure>
			<figure>
				<span></span>
				<p>体验APP</p>
			</figure>
			<figure>
				<span></span>
				<p>发票中心</p>
			</figure>
			<figure>
				<span></span>
				<p>绑卡</p>
			</figure>
			<figure>
				<span></span>
				<p>邀请</p>
			</figure>
		</div>
	</div>

</template>

<script>

	export default{
		name:"mine",
		methods:{
			
		}

		
	}

</script>

<style>
	#mine h1{
		color:blue;
	}
	#mine .header{
		width: 100%;
		height: 3.75rem;
		background: url(../assets/mine/minetop.png);
		position: relative;
	}

	#mine .header .header_left{
		position: absolute;
		top: 0.5rem;
		left: 1.75rem;
		text-align: left;
		color: white;
	}
	#mine .header .header_left p{
		font-size: 18px;
	}
	#mine .header .header_left span{
		display: block;
		width: 2.1rem;
		height: 0.65rem;
		background:url(../assets/mine/mine.png) no-repeat left center;
		background-size: 34px;
		border-radius: 0.325rem;
		border: 1px solid black;
		text-indent: 0.75rem;
		line-height: 0.65rem;
		font-size: 0.3rem;
		background-color: black;
		margin-top: 5px;

	}	
	#mine .header .header_right{
		position: absolute;
		right: 0.5rem;
		top: 0.5rem;
		color: white;
		text-align: center;
	}
	#mine .header .header_right p{
		display: block;
		width: 1.3rem;
		height: 1rem;
		background: url(../assets/sprt.png);
		background-position: -5px -951px;
		margin-left: 15px;
	}
	#mine .header .header_bottom{
		position: absolute;
		bottom: 0;
		left: 0;
		height: 1.325rem;
		width: 100%;
		background: rgba(0,0,0,0.1);
		display: flex;
		justify-content: space-around;
		align-items:center;
	}
	#mine .header .header_bottom figure{
		width: 25%;
		height: 1.325rem;
		color: #fff;
		text-align: center;
		padding-top: 5px;
	}
	#mine .allGoods{
		height: 80px;
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background: #fff;
		margin: 10px 0;

	}
	#mine .allGoods figure{
		width: 25%;
		height: 50px;
		text-align: center;
		font-size: 14px;
		color: #666;

	}
	#mine .allGoods figure span{
		display: block;
		width: 30px;
		height: 30px;
		margin: 0 auto;
		background: url(../assets/sprt.png);
		background-position: 0px -625px;
		background-size: 450px auto;
	}
	#mine .controll{
		height: 4.1rem;
		width: 100%;
		background: #fff;
		display: flex;
		justify-content: space-around;
		align-content: center;
		flex-wrap: wrap;
	}
	#mine .controll figure{
		width: 25%;
		height: 50px;
		text-align: center;
		margin-bottom: 10px;
		font-size: 14px;
		color: #666;
	}
	#mine .controll figure span{
		display: block;
		width: 30px;
		height: 30px;
		margin: 0 auto;
		background: url(../assets/sprt.png);
		background-position: 0px -625px;
		background-size: 450px auto;
	}
</style>