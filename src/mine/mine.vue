<template>

	<div id="mine">
		<h1>mine</h1>
		<router-link to="/allList">全部订单</router-link>
		<router-view></router-view>
	</div>

</template>

<script>

	export default{
		name:"mine",

		
	}

</script>

<style>
	#mine h1{
		color:blue;
	}

</style>