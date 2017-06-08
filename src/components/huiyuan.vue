<template>
<div id="huiyuan">
	<div class="juhui">
		<img src="../assets/vipimg/7.png" @click="back()">
		<span>签到光荣榜 钜惠立享</span>
		<img src="../assets/vipimg/8.png" class="num1" @click="tiao()"> 

	</div>
</div>
	
</template>

<script>
export default{
	methods:{
		back(){
			history.back()
		},
		tiao(){
			 this.$router.push({
			 	name:'cart'
			 })
		}
	}
}
	
</script>

<style>
	#huiyuan .juhui{
		display: flex;
		height: 1.1rem;
		justify-content: space-around;
		line-height: 1.1rem;
	}
	#huiyuan img:first-child{
		width: 0.8rem;
		height: 0.8rem;
	}
	#huiyuan .num1{
		width: 0.8rem;
		height: 0.8rem;
	}
</style>
