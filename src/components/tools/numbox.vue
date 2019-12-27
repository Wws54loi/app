<template>
	<div class="mui-numbox" data-numbox-min='1' data-numbox-max='99'>
								<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
								<input class="mui-input-numbox" type="number" value="1" @change="numchange" ref='numbox' />
								<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
							</div>
</template>

<script>
	import mui from "../../lib/js/mui.js"
	export default{
		mounted() {
			console.log(this.max)
			mui(".mui-numbox").numbox()
		},
		methods:{
			numchange(){
				this.$emit('getCount',parseInt(this.$refs.numbox.value))
			}
		},
		props:["max"],
		watch:{
			'max':function (newval,oldval){
				mui(".mui-numbox").numbox().setOption('max',newval)
			}
		}
	}
	
</script>

<style>
</style>
