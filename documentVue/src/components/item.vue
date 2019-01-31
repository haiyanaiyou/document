<template>
	<h1 >{{title}}</h1>
	<ul>
		<li v-for="item in items">
			{{item.id}}
		</li>
	</ul>
</template>

<script>
	export default{
		props: ['title','items']
	}
</script>

<style>
</style>