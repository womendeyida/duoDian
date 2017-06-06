<template>

	<div id="fenlei">
		<h1>fenlei</h1>
		<router-link to="/fenlei/fenleia">多点超市</router-link>
		<router-link to="/fenlei/fenleib">全球精选</router-link>
		<router-view></router-view>
	</div>

</template>

<script>

	export default{
		name:"fenlei",

		
	}

</script>

<style>
	#feilei h1{
		color:blue;
	}

</style>