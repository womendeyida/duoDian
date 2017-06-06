<template>

	<div id="vip">
		<div class="header">
			<h3>hello,普通会员</h3>
			<ul>
				<li>
					<span class="num1"></span>
					<p>会员中心</p>
				</li>
				<li>
					<span class="num2"></span>
					<p>会员专属码</p>
				</li>
			</ul>
			<p class="youhui">
				<span>立享优惠</span>
			</p>
			<div class="money">
			<ol>
				<li>
					<span>￥0.00</span>
					<p>余额</p>
				</li>
				<li>
					<span>5</span>
					<p>积分</p>
				</li>
				<li>
					<span>0</span>
					<p>成长值</p>
				</li>
				<li>
					<span>1</span>
					<p>优惠券</p>
				</li>
				
			</ol>
			</div>
			<div class="newhand">
				<figure>
					<img src="../assets/vipimg/new_user_enable.png">
					<p>新手特权</p>
				</figure>
				<figure>
					<img src="../assets/vipimg/wumart_enable.png">
					<p>物美特惠</p>
				</figure>
				<figure>
					<img src="../assets/vipimg/point_promotion_enable_icon@3x.png">
					<p>积分加价购</p>
				</figure>
				<figure>
					<img src="../assets/vipimg/birthday_enable.png">
					<p>生日特权</p>
				</figure>
				<figure>
					<img src="../assets/vipimg/more-rights.png">
					<p>全部权益</p>
				</figure>
			</div>
		</div>
		<div class="huiyuan">
			<h4><p></p></h4>
			<span>物美会员升级，点击了解更多升级福利</span>
		</div>
		<div class="tu1"></div>
		<div class="tu2"></div>
		<div class="tu3"></div>	
		<div class="kong"></div>
	</div>

</template>

<script>

	export default{
		name:"vip",

		
	}

</script>

<style>
	#vip .header{
		width: 100%;
		height: 6.325rem;
		background: #fc955c;
	}
	#vip h3{
		text-align: center;
	    color: #fff;
	    height: 1.0rem;
	    line-height: 1.0rem;
	    padding: 0.25rem 0.375rem 0;
	    font-size: 0.4rem;
	    font-weight: 400;
	}
	#vip ul {
		display: flex;
		justify-content: space-around;
	}
	#vip ul span{
		display: inline-block;
		width: 1rem;
		height: 1rem;
		background: red;
	}
	#vip .num1{
		background: url(../assets/vipimg/logo.png) no-repeat left center;
		background-position: -1.2rem 0;
		background-size: 5.0rem auto;
	}
	#vip .num2{
		background: url(../assets/vipimg/logo.png) no-repeat left center;
		background-position: 0.125rem 0;
		background-size: 5.0rem auto;
	}
	#vip ul p{
		width: 1.2rem;
		height: 0.3rem;
		font-size: 0.3rem;
		color: white;
	}
	#vip li:nth-child(2) p{
		width: 1.5rem;
	}
	#vip .youhui{
		font-style: normal;
	    color: #fff;
	    font-size: 0.225rem;
	    background-color: #281e29;
	    border-radius: 0.25rem;
	    position: absolute;
	    white-space: nowrap;
	    left: 7.0rem;
	    top: 0.875rem;
	}
	#vip .newhand{
		width: 100%;
		height: 2.075rem;
		background: white;
		position: absolute;
		top: 4.25rem;
	}
	#vip .money{
		width: 8.625rem;
		height: 1.55rem;
		position: absolute;
		box-shadow: 0 0 5px 1px rgba(0,0,0,.1);
		top: 2.875rem;
		left: 0.375rem;
		z-index: 3;
		background:#faf9f5;
	}
	#vip ol{
		display: flex;
		justify-content: space-around;
		margin: 0.25rem 0 0 0;

	}
	#vip ol span{
		    font-style: normal;
		    font-weight: 700;
		    font-size: 13px;
		    color: #281e29;
		    position: relative;
	}
	#vip ol p{
		font-size: 12px;
    	color: grey;
	}
	#vip ol li{
		border-right: 1px solid #faf9f5;
		width: 2.15625rem;
		height: 1.05rem;
		text-align: center;	 
	}
	#vip ol p:nth-child(2){
		width: 2.15625rem;
	}
	#vip .newhand{
		display: flex;
		text-align: center;
	}
	#vip .newhand img{
		width: 0.8rem;
		height: 0.8rem;
	}
	#vip .newhand p{
		width: 1.725rem;
		height: 0.4rem;
		font-size: 0.275rem;
		color: grey;
	}
	#vip .newhand figure{
		margin: 0.5rem 0 0 0.125rem;
	}
	#vip .huiyuan{
		width: 100%;
		height: 0.7rem;
		background: white;
		margin: 0.25rem 0 0 0;
		display: flex;
		justify-content: space-around;
		padding: 0.3rem 0 0 0;
	}
	#vip .huiyuan p{
		width: 1.25rem;
		height: 0.5rem;
		background: url(../assets/vipimg/logo.png) no-repeat left center;
		background-position: -2.5rem 0;
		background-size: 5.0rem auto;
	}
	#vip .huiyuan span{
		width: 6.75rem;
		height: 0.4rem;
		font-size: 12px;
		color: grey;
	}
	#vip .huiyuan h4{
		width: 1.75rem;
		height: 0.4rem;
		border-right: 1px solid #cfcfcf;
	}
	#vip .tu1{
		width: 100%;
		height: 5.9rem;
		background: url(../assets/vipimg/1.png) no-repeat left center;
		background-size: 100% auto;
	}
	#vip .tu2{
		width: 100%;
		height: 2.0125rem;
		background: url(../assets/vipimg/2.png) no-repeat left center;
		background-size: 100% auto;
	}
	#vip .tu3{
		width: 100%;
		height: 17.475rem;
		background: url(../assets/vipimg/3.png) no-repeat left center;
		background-size: 100% auto;
	}
	#vip .kong{
		width: 100%;
		height: 1rem;
	}
</style>