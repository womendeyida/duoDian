<template>

	<div id="home">
		<h1>home</h1>
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

<style>
	#home h1{
		color:blue;
	}

</style>