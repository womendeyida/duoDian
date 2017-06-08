<template>

	<div id="goodDetil2">
		<!-- <h2>goodDetil2</h2> -->
		<p class="goodHeader">
			<img src="../assets/zao1.jpg" alt="" onclick="history.back()">
			<span>早市</span>
			<img src="../assets/11.jpg" alt="" @click="tiao()">
		</p>
		<div>
			<!-- <h1>{{ id }}</h1> -->
			
			<img :src="goodDetil2.img" alt="">
			<p>{{goodDetil2.title}}</p>
			<!-- <p>{{goodDetil}}</p> -->

		</div>
	</div>

</template>

<script>

	export default{
		name:"allListaaa",
		data() {
	        return { // 在数据中接收
	            id: this.$route.params.id
	        }
	    },
		computed:{
			goodDetil2(){
				// console.log(this.$store.getters.getobj)			
				return this.$store.state.obj1
				// console.log(this.$store.obj)
				// return this.$store.obj
			}
		},
		methods:{
			tiao(){  //点击主页的图标，可以让页面跳转到主页
				this.$router.push({
					path:'/home/'
				})
			}
		}
		// created(){
		// 	// this.axios.get('https://waredetailgateway.dmall.com/detail/main?id=' + this.id).then()
		// 	// console.log(this.$route.params.id)

		// }
	}

</script>

<style scoped>
	#allList h1{
		color:blue;
	}
	#goodDetil2{
		background-color: #fff;
	}
	#goodDetil2 .goodHeader{
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