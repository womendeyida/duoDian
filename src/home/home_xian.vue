<template>

	<div id="home_xian">
		<p class="goodHeader">
			<img src="../assets/zao1.jpg" alt="" onclick="history.back()">
			<span>早市</span>
			<img src="../assets/zao2.png" alt="">
		</p>
		<img :src="data.imgSrc" alt="" class="home_xian_img1">
		<div class="homeJing">
		<!-- ~~~~~~~~~~~~~~~~~~~~惊爆品四个图片~~~~~~~~~~~~~~~~~ -->
			<div v-for="(item, i) in datajing" @click="showClass(i)" :class="{ orange:currentIndex == i }">
				<a :href="item.anchor">{{ item.text }}</a>
				<!-- <p>{{item.text}}</p> -->
			</div>
			<p><img src="../assets/arror.png" alt=""></p>
		</div>
		<!-- ~~~~~~~~~~~~~~~~~~~~惊爆品图片~~~~~~~~~~~~~~~~~~~~~~ -->
		<img :src="datajingf.imgSrc" alt="" class="home_xian_img2">
		<div class="xianUl">		
				<div v-for="item in dataflist">
					<img :src="item.wareImgUrl" alt="">
					<p>{{ item.wareName }}</p>
					<p>{{ item.warePrice }}</p>
					<span></span>
				</div>
		</div>
		<div class="kong"></div>
	</div>

</template>

<script>

	export default{
		name:"home_xian",
		data(){
			return {
				data:[],
				datajing:[],
				datajingf:[],
				dataflist:[],
				
				currentIndex:0
			}
		},
		methods:{
			showClass(i){
				this.currentIndex = i;
			}
		},
		created(){
			this.axios.get('./static/shengxian.json').then(res => {
				console.log(res.data.moduleList[3].data.wareRcmds.normal);
				this.data = res.data.moduleList[0].data
				this.datajing = res.data.moduleList[1].data.list
				this.datajingf = res.data.moduleList[2].data
				this.dataflist = res.data.moduleList[3].data.wareRcmds.normal
			})
		}
		
	}

</script>

<style scoped>
	#home_xian h1{
		color:blue;
		font-size: 16px;
	}
	 .goodHeader{
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
	.home_xian_img1{
		width: 100%;
		height: 3.75rem;
		margin-top:1.1rem;
	}
	/*-------------*/
	.homeJing{
		width: 100%;
		height: 1.125rem;
		display: flex;
		justify-content:space-around;
		align-items:center;
		background-color: #fff;
	}
	.homeJing>div{
		text-align: center;
	}
	.orange{
		width: 2.0rem;
		height: 0.625rem;
		background-color: #F46C18;
		border-radius: 15px;
		text-align: center;
	}
	.homeJing>div:first-of-type a{
		color: #fff;

	}
	.homeJing>p{
		width: 1.125rem;
		height: 1.125rem;
		line-height: 1.125rem;
		text-align: center;
	}
	.homeJing>p>img{
		width: 15px;
		height: 10px;
	}
	/*-----------惊爆品图片-----------*/
	.home_xian_img2{
		width: 100%;
		height:1.25rem;
	}
	#home_xian .xianUl{
		background-color: #0079FE;
		width: 100%;
		height: 600px;
		display: flex;
		justify-content:space-around;
		align-content:center;
		flex-wrap: wrap;
		
	}
	#home_xian .xianUl div{	
		margin: 0 1px 3px 0;
		background-color: #fff;
		width: 33%;
		height: 200px;
		text-align: center;
	}
	
	.xianUl div img{
		width: 2.575rem;
		height: 2.575rem;
	}
	.kong{
		width: 100%;
		height: 1.35rem;
		background-color:#0079FE; 
	}
</style>