<template>

	<div id="fenleib">
		
	</div>

</template>

<script>

	export default{
		data(){
			return{
				list:[]
			}
		},
		created(){
			this.axios.get('../../static/duoDian.json').then(res=>{})
		}

		
	}

</script>

<style>
	#fenleib {
		
	}

</style>