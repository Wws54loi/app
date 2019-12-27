<template>
	<div class="mui-numbox" data-numbox-min='1' data-numbox-max='99'>
								<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
								<input class="mui-input-numbox" type="number" :value="count" @change="numchange" ref='numbox'/>
								<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
							</div>
</template>

<script>
	import mui from "../../lib/js/mui.js"
	export default{
		mounted() {
			mui(".mui-numbox").numbox()
		},
		methods:{
			numchange(){
			this.$store.commit("addGoodsCount",{id:this.goodsId,count:this.$refs.numbox.value})
			}
		},
		props:['count','goodsId']
		
	}
	
</script>

<style>
</style>