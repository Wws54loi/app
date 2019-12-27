<template>
<div class="newsinfo-container">
	<h3 class="title">{{newsinfo.title}}</h3>
	<p class="time">
		<span>发表时间：{{newsinfo.add_time | dateFormat}}</span>
		<span>点击:{{newsinfo.click}}</span>
	</p>
	<hr>
	<div class="content" v-html="newsinfo.content">
	
	</div>
	<commemt-box v-bind:why="this.id"></commemt-box>
</div>
</template>

<script>
	import comment from '../subcomponents/commemt.vue'
	import {Toast} from "mint-ui";
	export default{
		data(){
			return{
				id:this.$route.params.id,
				newsinfo:{}
			}
		},
		created() {
			this.getNewsInfo()
			
		},
		methods:{
			getNewsInfo(){
				console.log(this.id)
				this.$http.get("api/getnew/"+this.id).then(result =>{
					if(result.body.status===0){
						this.newsinfo=result.body.message[0];
					}else{
						toast('失败哦')
					}
				})
			}
		},
		components:{
			"commemt-box":comment
		}
	}
</script>

<style scoped="scoped">
	.newsinfo-container{
		padding: 0 4px;
		
	}
	.title{
		font-size: 16px;
		text-align: center;
		margin: 15px 0;
		color: red;
	}
	.time{
		font-size: 14px;
		color: #226AFF;
		display: flex;
		justify-content: space-between;
	}
</style>
