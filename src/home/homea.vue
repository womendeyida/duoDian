<template>

	<div id="homea">
	
		<router-link to="/home_xian">home_xian</router-link>
		<router-view></router-view>
		<h1>好么</h1>
	</div>

</template>

<script>

	export default{
		name:"homea",
		data(){
			return{
				url:""
			}
		}
		
	}

</script>

<style>
	#homea h1{
		color:blue;
	}

</style>