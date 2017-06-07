<template>

	<div id="home">
		<div class="header">
			<span>送至:西单(地铁站) ></span>
			<i></i>
		</div>
		<div class="homeDiv">
			<div>
				<router-link to="/home/homea">多点超市
					<img src="../assets/h1.png" alt="" class="homeImg1">
				</router-link>
			</div>
			<div>
				<router-link to="/home/homeb">全球精选
					<img src="../assets/h2.png" alt="" class="homeImg2">
				</router-link>
			</div>
		</div>
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
		/*padding-left:10px;
		padding-right: 10px;*/
	}
	.header span{
		color: #404040;
		margin-left: 10px;
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
	.homeDiv{
		width: 100%;
		height: 1.0rem;
		line-height:  1.0rem;
		background-color: #fff;
		/*padding-left: 0.25rem;*/
		position: relative;
		display: flex;

	}
	.homeDiv a{
		color: #585858;
		margin-left: 0.25rem;
		
	}
	.homeDiv div:first-of-type{
		margin-right: 0.75rem;
	}
	.homeImg1, .homeImg2{
		width: 1.225rem;
		height: 0.3rem;
	}
	.homeImg1{
		position: absolute;
		top:0;
		left:0.7rem;
	}
	.homeImg2{
		position: absolute;
		top:0;
		left: 3.3rem;
	}
	
</style>