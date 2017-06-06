<template>

	<div id="fenlei">
		<div class="header">
			<p></p>
		</div> 
		<router-link to="/fenlei/fenleia">多点超市</router-link>
		<router-link to="/fenlei/fenleib">全球精选</router-link>
		<div class="tiao">
			<p>79元免运费/59元-79元仅2元运费</p>
		</div>
		<router-view></router-view>
		
		
	</div>

</template>

<script>

	export default{
		name:"fenlei",
		data(){
			return{
				
			}
		}
		
	}

</script>

<style>
	#fenlei .header {
		width: 100%;
		height: 5rem;
	}
	#fenlei .header p{
		width: 100%;
		height: 5rem;
		background:url(../assets/vipimg/1.png) no-repeat left center;
		background-size: 100% auto;
	}
	#fenlei .tiao{
		width: 100%;
		height: 0.5rem;
		background:#fef2de;
		font-size: 12px;
	}
	#fenlei .tiao p{
		padding: 2px 0 0 10px;
	}
</style>