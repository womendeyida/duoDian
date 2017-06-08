<template> 

	<div id="fenlei">
		<div class="header">
			<p></p>
		</div> 
		<span @click='total()'>全部分类</span>
		<router-link to="/fenlei/fenleia">多点超市</router-link>
		<router-link to="/fenlei/fenleib">全球精选</router-link>
		<div class="tiao">
			<p>79元免运费/59元-79元仅2元运费</p>
		</div>
		<router-view></router-view>

		<div class="totalList" ref="totalList1">

			<div class="tou">
				<span>全部分类</span>
				<span @click='xiaoshi()'>取消</span>
			</div>
			<div class="xiabian">
				<div class="left">
					<ul>
						<li v-for="(item,i) in list" @click="dianji(i)" :class="{active:currentIndex == i}"> 
							<span>{{item.catName}}</span>
						</li>
					</ul>
				</div>
				<div class="middle">
					<ul>
						<li v-for="(item, i) in aa" @click="erDian(item,i)" :class="{active1:currentIndex1 == i}">
						{{ item.catName }}

						</li>
					</ul>
				</div>
				<div class="right">
					<ul>
						<li v-for="(item, i) in bb" :class="{active2:currentIndex2 == i}" @click="sandian(i)">{{ item.catName }} </li>
					</ul>
				</div>
			</div>
			
		</div>
		<div class="zhezhao" ref="zhezhao1"></div>
		
	</div>

</template>

<script>

	export default{
		name:"fenlei",
		data(){
			return{
				list:[],
				aa:[],
				bb:[],
				currentIndex:0,
				currentIndex1:0,
				currentIndex2:0
				
			}
		},
		methods:{
			total(){
					var i = -600;
				var chuxian = setInterval(()=>{
						
					this.$refs.totalList1.style.bottom= i + 'px';
					i+=10;
					if (i==0){
					clearInterval(chuxian);
					}
					},1);
				this.$refs.zhezhao1.style.display='block';
			},
			xiaoshi(){
				var i = 0;
				var chuxian = setInterval(()=>{
						
					this.$refs.totalList1.style.bottom= i + 'px';
					i-=10;
					if (i==-600){
					clearInterval(chuxian);
					}
					},1);
				this.$refs.zhezhao1.style.display='none';
			},
			dianji(i){
				this.aa=this.list[i].childCmCategories;
				this.currentIndex = i;
			},
			erDian(item,i){
				this.bb = item.childCmCategories;
				this.currentIndex1 = i;
				},
			sandian(i){
				this.currentIndex2 = i;
			}
		},

		// },
		created(){
			this.axios.get('../static/quanbufenlei.json').then(res=>{
				this.list = res.data.data.categoryInfo.categorys
				
			})
		}
		
	}

</script>

<style>
	#fenlei .header {
		width: 100%;
		height: 5rem;
	}
	#fenlei .header p{
		width: 100%;
		height: 5rem;
		background:url(../assets/vipimg/1.png) no-repeat left center;
		background-size: 100% auto;
	}
	#fenlei .tiao{
		width: 100%;
		height: 0.5rem;
		background:#fef2de;
		font-size: 0.3rem;
	}
	#fenlei .tiao p{
		padding: 0.05rem 0 0 0.25rem;
	}
	#fenlei .totalList{
		width: 100%;
		height:15rem;
		background: white;
		position: fixed;
		bottom: -15rem;
		z-index: 3;

	}
	#fenlei .zhezhao{
		height: 100%;
		width: 100%;
		background: rgba(0,0,0,.5);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
		display: none;
	}
	#fenlei .tou{
		display: flex;
		height: 1.1rem;
		line-height: 1.1rem;
		justify-content: space-between;
		border-bottom: 1px solid #f3f3f3;
	}
	#fenlei .tou span:nth-child(2){
		color: #f4f4f4;
	}
	#fenlei .xiabian{
		display: flex;

	}
	#fenlei .totalList .left{
		width: 33.33%;
		height: 14.9rem;
	}
	#fenlei .totalList .middle{
		width: 33.33%;
		height: 14.9rem;
		background: #f6f6f6;
	}
	#fenlei .totalList .right{
		width: 33.33%;
		height: 14.9rem;
		background: #f0f0f0;
	}
	#fenlei .totalList .left li{
		width: 3.125rem;
		height: 1.1rem;
		text-align: center;
		line-height: 1.1rem;
	}
	#fenlei .middle li{
		width: 3.125rem;
		height: 1.1rem;
		line-height: 1.1rem;
		text-align: center;
	}
	#fenlei .right li{
		width: 3.125rem;
		height: 1.1rem;
		line-height: 1.1rem;
		text-align: center;
	}
	#fenlei .active{
		border-left: 2px solid #ff712b;
		color: #ff712b;
		background: #f6f6f6;
	}
	#fenlei .active1{
		background: #f0f0f0;
		color: #ff712b;
	}
	#fenlei .active2{
		background: #ebebeb;
		color: #ff712b;
	}
</style>