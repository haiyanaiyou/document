<template>
    <div>
    	<item title="nihao" items="lists"> </item>
    </div>
</template>

<script>
	import item from '../components/item'
    export default {
		components:{item},
		data(){
			return{
				lists:[
				{
					id:'1'
				},
				{
					id: '2'
				}
				]
			}
		}
		
    }
</script>

<style scoped>

</style>
