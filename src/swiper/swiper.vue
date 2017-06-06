<template>

	<div id="swiper">
		<img v-for="item in data" :src="">
	</div>

</template>

<script>

	export default{
		name:"home",
		paras:['url','category'],
		data(){
			return {
				data:[]
			}
		},
		created(){
			this.axios(this.url).then((res) => {
				console.log(res);
				this.data = res.data.data[this.category];	
			})
		}

		
	}
	
</script>

<style scoped>
	#home h1{
		color:blue;
	}
	@import 'swiper.css'
</style>