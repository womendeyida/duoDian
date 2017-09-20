<template>

	<div id="hao">
		<!-- ~~~~~~~~~~~~~~~~~~~~~好货提前抢~~~~~~~~~~~~~~~~~~~~~ -->
		<ul class="homeaBlock">
			<li v-for="item in aa " class="homeaBlockLi">
				<router-link to="/good">
					<img v-bind:src="item.imageUrl" alt="" class="homeaBlockLiImg">
					<p>{{item.data.title}}</p>
				</router-link>
				<router-view></router-view>	
			</li>
		</ul>
	</div>

</template>

<script>

	export default{
		name:"hao",
		// 注册轮播图组件
		// components:{ swiper, swiperSlide },
		props:["list"],
		data(){
			return{
				datah:this.list
			}
		},
		methods:{


		},
		created(){  //组件创建完成即可发起网络请求
			console.log(this.list)


		},
		computed: {
			aa() {  //添加方法
				this.datah.splice(5, 1);
				return this.datah;
			}
			// return aa.filters(function(item){
			// 	return item.age >= 18;
			// })

		},

		
	}

</script>

<style scoped>

	/*---------------好货提前抢-------------*/
	.homeaBlock{
		width:100%;
	    height: 1.85rem;
	    background: #fff;
	    display: flex;
	    justify-content:space-around;
	    align-items:center;
	    margin:10px 0;

	}
	.homeaBlockLi{
		width: 1.875rem;
		height: 1.85rem;

	}
	.homeaBlockLiImg{
		width: 1.875rem;
		height:1.25rem; 
	}
	.homeaBlockLi>p{
		color: #ccc;
		text-align: center;

	}
	.homeaBlockLi a{
		color: #888888;
		text-align: center;
	}

</style>