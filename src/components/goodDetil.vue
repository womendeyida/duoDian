<template>

	<div id="goodDetil">
		<h1>goodDetil</h1>
		<div>
			<h1>{{ id }}</h1>
			<img :src="goodDetil.imageUrl" >
			<p>{{ goodDetil.data.name }}</p>
		</div>
	</div>

</template>

<script>

	export default{
		name:"allList",	
		data() {
	        return { // 在数据中接收
	            id: this.$route.params.id
	        }
	    },
		computed:{
			goodDetil(){			
				return this.$store.getters.getobj
			}
		},
		created(){
			// this.axios.get('/api/'+this.$route.params.id).then()
			console.log(this.$route.params.id)
		}
	}

</script>

<style>
	#allList h1{
		color:blue;
	}

</style>