<template>

	<div id="home">
		<div class="header">
			<span>送至:西单(地铁站) ></span>
			<i></i>
		</div>
		
		<router-link to="/home/homea">多点超市</router-link>
		<router-link to="/home/homeb">全球精选</router-link>
		<router-view></router-view>
	</div>

</template>

<script>

	export default{
		name:"home",

		
	}

</script>

<style scoped>
	#home .header{
		width: 100%;
		height: 1.1rem;
		display: flex;
		align-items:center;
		/*height: 1.1rem;*/
		justify-content:space-between;
		background-color: #fff;
		padding-left:10px;
		padding-right: 10px;
	}
	.header span{
		color: #404040;;
	}
	#home .header i{
		background:url(../assets/sprt.png) right no-repeat;
		background-size: 10.0rem auto;
		background-position: -0.1rem -1.125rem;
		width: 1rem;
		height:1.1rem;
		display: inline-block;
		/*background-color: red;*/
	}

</style>