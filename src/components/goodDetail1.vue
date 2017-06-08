<template>
	<div id="xiangqing">
		<img :src="message.img">
		<p>{{message.title}}</p>
		<p>{{message.price}}</p>
	</div>
</template>

<script>
	export default{
		computed:{
			message(){
				return this.$store.getters.getobj
			}
		}
		
	}
</script>

<style>
	
</style>