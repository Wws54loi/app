<template>
	<div>
		<h3>{{photoInfo.title}}</h3>
		<p class="subtitle">
			<span>发表时间:{{photoInfo.add_time | dateFormat}}</span>
			<span>点击：{{photoInfo.click}}次</span>
			<hr>
			<span class="content" v-html="photoInfo.content"></span>
		</p>
		<viewer :images="photo"> 
		    <!-- //photo 一定要一个数组，否则报错 -->
		          <img
		                v-for="(src,index) in photo"
		                :src="src.src"
		                :key="index"
		              
		              >
		</viewer>
		<com-box></com-box>
	</div>
</template>

<script>
	import comment from '../subcomponents/commemt.vue'

	
	export default{
		data(){
			return{
				id:this.$route.params.id,
				photoInfo:{},
				photo:[]
			}
		},
		created() {
			this.getPhotoInfo();
			this.getPhotoList();
		},
		methods:{
			getPhotoInfo(){
				this.$http.get('api/getimageInfo/'+this.id).then(result=>{
					if(result.body.status===0){
						this.photoInfo=result.body.message[0]
					}else{
						console.log('获取失败')
					}
				})
			},
			getPhotoList(){
					this.$http.get('api/getthumimages/'+this.id).then(result=>{
						if(result.body.status===0){
						
							this.photo=result.body.message
						}else{
							console.log('获取失败')
						}
					})
				}
		},
		
		
		components:{
			"com-box":comment
		}
		
	}
</script>

<style scoped="scoped">
	h3{
		font-size: 15px;
		color: #226AFF;
		padding: 15px 30px;
	}
	.subtitle{
		display: flex;
		justify-content:space-between;
	}
	.content{
		line-height: 30px;
		font-size: 13px;
	}
	img{
		width: 100px;
		height: 100px;
	}
</style>
