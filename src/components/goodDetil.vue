<template>

	<div id="goodDetil">
		<p class="goodHeader">
			<img src="../assets/zao1.jpg" alt="" onclick="history.back()">
			<span>早市</span>
			<img src="../assets/11.jpg" alt="" @click='tiao()'>
		</p>
		<div>
			
			<img :src="goodDetil.imageUrl" >
			<p>{{ goodDetil.data.name }}</p>
			<!-- <img :src="goodDetil.img" alt="">
			<p>{{goodDetil.title}}</p> -->


		</div>
	</div>

</template>

<script>

	export default{
		name:"allList",	
		data() {
	        return { // 在数据中接收
	            // id: this.$route.params.id
	        }
	    },
	    methods:{
	    	tiao(){
	    		this.$router.push({
	    			path:'/home/'
	    		})
	    	}
	    	
	    },
		computed:{
			goodDetil(){
				console.log(this.$store.getters.getobj)			
				return this.$store.getters.getobj
			}
		},
		created(){
			// this.axios.get('https://waredetailgateway.dmall.com/detail/main?id=' + this.id).then()
			// console.log(this.$route.params.id)

		}
	}

</script>

<style scoped>
	#allList h1{
		color:blue;
	}
	#goodDetil{
		background-color: #fff;
	}
	#goodDetil .goodHeader{
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 1.1rem;
		background-color: #fff;
		/*line-height: 1.1rem;*/
		/*text-align:center;*/
		width: 100%;
		position: fixed;
		top:0;
		left:0;
		right: 0;
		z-index: 99;
	}
	.goodHeader img:first-of-type{
		width: 0.65rem;
    	height: 0.65rem;
	}
	.goodHeader img:nth-of-type(2){
		width: 0.625rem;
		height: 0.625rem;
	}
	.goodHeader>span{
		display: inline-block;
		width: 5.625rem;
		height: 1.1rem;
		line-height: 1.1rem;
		text-align: center;
	}

</style>