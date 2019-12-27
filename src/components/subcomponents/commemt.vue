<template>
	<div>
		<h3>发表评论</h3>
		<hr/>
		<textarea placeholder="请输入要BB的内容(最多120字)"v-model="com"></textarea>
		<mt-button type='primary' size='large' @click='add'>发表评论</mt-button>
		<div class="commemtlist" v-for="(item,i) in comments" :key='i'>
				<div class="user-time">第{{i+1}}楼 用户：匿名用户 发表时间：{{item.time | dateFormat}}</div>
				<div class="con">{{item.con}}</div>
		</div>
		<mt-button type='danger' size='large' plain>加载更多</mt-button>
	</div>
</template>

<script>
	import {Toast} from "mint-ui"
	export default {
		data(){
			return{
				comments:[
				],
				com:''
			}
		},
		methods:{
			add(){
				this.comments.push({con:this.com,time:new Date()})
				this.com=''
			}
		},
	
		
	}
</script>

<style lang="scss" scoped="">
* {
	margin: 0;
}
div {
	textarea {
		margin-top: 10px !important;
	}
}
.commemtlist{
	margin-top: 5px;
	.user-time{
		height: 25px;
		line-height: 25px;
		font-size: 14px;
		background-color: rgb(196,199,195);
	}
	.con{
		height: 50px;
		line-height: 50px;
		font-size: 14px;
		text-indent: 2em;
	}
}
</style>
