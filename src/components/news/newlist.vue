<template>
	<div>
		<ul class="mui-table-view">
		    <li class="mui-table-view-cell mui-media" v-for="item in newlist" :key='item.id'>
		        <router-link :to="'/home/newsinfo/ '+item.id">
		            <img class="mui-media-object mui-pull-left" :src="item.img_url">
		            <div class="mui-media-body">
		                <h1 class="title">{{item.title}}</h1>
		                <p class='mui-ellipsis content'><span>发表时间：{{item.add_time |dateFormat}}</span><span>点击：{{item.click}}次</span></p>
		            </div>
		        </router-link>
		    </li>
		</ul>
	</div>
</template>

<script>
	import {Toast} from "mint-ui";
	export default {
		data(){
			return{
				newlist:[]
			};
		},
		created() {
			this.getNewList();
		},
		methods:{
			getNewList(){
				this.$http.get('api/getnewslist').then(result =>{
					if(result.body.status===0){
						this.newlist=result.body.message
					}else{
						Toast('失败')
					}
				})
			}
			
		}
	}
</script>

<style>
	.title{
		font-size: 14px;
	}
	.mui-media-body .content{
		font-size: 12px;
		display: flex;
		justify-content: space-between;
		color: #226aff;
	}
</style>
