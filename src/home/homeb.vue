<template>

	<div id="homeb">
		<div class ="ban">
			<swiper :options="swiperOption" >
				<!-- 遍历轮播图片 -->
			    <swiper-slide v-for="item in data">
			        <img :src="item.imageUrl">
			    </swiper-slide>
			    <!-- 分页器 -->
			    <div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
		<div class="menuList">
			<figure v-for="item in dataa">
				<img :src="item.imageUrl">
				<figcaption>
					<p>{{ item.remark }}</p>
				</figcaption>
			</figure>
			<figure v-for="item in datab">
				<img :src="item.imageUrl">
				<figcaption>
					<p>{{ item.remark }}</p>
				</figcaption>
			</figure>
		</div>
		<div class="hua">
			<div class="huaTop">
				<img :src="datac.imageUrl">
			</div>			
			<div class="huamain">
				<div v-for="item, i in datad" :class='{"first":i == 0}' class="aa">
					<img :src="item.imageUrl">

				</div>				
			</div>
			<div class="huaBottom">
				<img :src="datae.imageUrl">
			</div>
		</div>
		<div class="jingPin">
			<div v-for="item in dataf">
				<img :src="item.imageUrl" >
			</div>
			<div v-for="item in datag" >
				<img :src="item.imageUrl">
			</div>
		</div>
		<div class="chaoZhi">
			
			<img :src="datah.imageUrl">
		</div>
		<div class="chaoList">
			<figure v-for="item in datai">
				<img :src="item.imageUrl" class="myimg" @click="rotate(item)">
				<figcaption>
					<span>{{ item.data.promotionDisplayLable }}</span>
					<p>{{ item.data.name }}</p>
					<del>￥{{ item.data.price}}</del>
					<p class="newprice">￥{{ item.data.promotionPrice }}</p>
					<div class="jia">+</div>
				</figcaption>
			</figure>
		</div>



		<div class="bai">
			1
		</div>

	</div>

</template>

<script>

	export default{
		name:"homeb",
		data(){
			return{
				url:"",
				data:[],
				dataa:[],
				datab:[],
				datac:{},
				datad:[],
				datae:{},
				dataf:[],
				datag:[],
				datah:{},
				datai:[],
				swiperOption: {
		            autoplay: 1000,  //1秒
		            direction : 'horizontal', //横向
		            pagination : '.swiper-pagination',
		        }

			}
		},
		methods:{

			rotate(item) {
				// console.log(item);
				this.$store.commit('ADD_MONEY',item);
			    // 在方法中进行路由跳转，并传递参数
			    // this.$router.push('/listdetail/' + item.name)
			    
			    // 带查询参数，变成 /listdetail/abc?plan=private
			    this.$router.push({
			        name: 'goodDetil',
			        params:{
			        	
			        }	  
			    })

			}
		},
		created(){
			this.axios.get('../../static/quanQiu.json').then((res) => {
				console.log(res.data.data.pageModules);
				this.data = res.data.data.pageModules[0].dataList;
				this.dataa = res.data.data.pageModules[1].dataList;
				this.datab = res.data.data.pageModules[2].dataList;
				this.datac = res.data.data.pageModules[3].dataList[0];
				this.datad = res.data.data.pageModules[5].dataList;
				console.log(res.data.data.pageModules[5].dataList)
				this.datae = res.data.data.pageModules[6].dataList[0];
				this.dataf = res.data.data.pageModules[7].dataList;
				this.datag = res.data.data.pageModules[8].dataList;
				this.datah = res.data.data.pageModules[9].dataList[0];
				this.datai = res.data.data.pageModules[10].dataList;			
			})
		},

		
	}

</script>

<style>
	#homeb h1{
		color:blue;
	}
	#homeb .ban{
		height: 3.75rem;
		width: 100%;
		/*background: yellow;*/
		
	}
	#homeb .ban img{
		height: 3.75rem;
		width: 100%;
	}
	#homeb .menuList{
		display: flex;
		justify-content: space-around;
		align-content: center;
		flex-wrap: wrap;
	}
	#homeb .menuList figure{
		width: 20%;
		height: 1.9rem;
		text-align: center;
		margin-top: 0.375rem;
	}
	#homeb .menuList p{
		font-size: 0.35rem;
	}
	#homeb .menuList img{
		height: 1.25rem;
		width: 1.875rem;
	}
	#homeb .huaTop img{
		height: 0.75rem;
		width: 100%;
		display: block;
	}
	#homeb .first img{
		width: 49.9%;
		height: 5.5rem;
	}
	#homeb .aa:nth-child(2) img{
		width: 50%;
	}
	#homeb .aa:nth-child(3) img{
		width: 25%;
	}
	#homeb .aa:nth-child(4) img{
		width: 25%;
	}
	#homeb .huamain .aa img{
		display: block;
	}
	#homeb .huamain{
		height: 5.5rem;
		width: 100%;
	}
	#homeb .huamain img{
		float: left;
	}
	/*#homeb .hua .huamain img{
		height: 50%;
		width: 50%;
		vertical-align: middle;
		float: left;
	}*/
	#homeb .huaBottom img{
		height: 1.25rem;
		width: 100%;
	}
	#homeb .bai{
		height: 1.25rem;
		width: 100%;
	}
	#homeb .jingPin{
		height: 7.5rem;
	}
	#homeb .jingPin img{
		display: block;
		width: 33.3333%;
		height: 3.75rem;
		float: left;
	}
	#homeb .chaoZhi img{
		height: 1.25rem;
		width: 100%;
	}
	#homeb .chaoList{
		display: flex;
		justify-content: space-around;
		align-content: center;
		flex-wrap: wrap;
	}
	#homeb .chaoList figure{
		width: 32%;
		height: 5.825rem;
		text-align: center;
	}
	#homeb .chaoList figure:nth-child(4) figcaption p{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	#homeb .chaoList figcaption{
		text-align: left;
		font-size: 0.35rem;	
		position: relative;
		height: 2.375rem;
	}
	#homeb .chaoList figcaption .newprice{
		color: red;
	}
	#homeb .chaoList figcaption .jia{
		border: 1px solid red;
		color: black;
		width: 0.75rem;
		height: 0.5rem;
		text-align: center;
		line-height: 0.5rem;
		position: absolute;
		right: 5px;
		bottom: 5px;

	}
	#homeb .chaoList figcaption span{
		background: red;
		color: white;
		padding:0 0.075rem;
	}
	#homeb .chaoList .myimg{
		width: 2.875rem;
		height: 2.875rem;
	}
</style>