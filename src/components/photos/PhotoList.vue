<template>
	<div>
		<div class="mui-content">
					<div id="slider" class="mui-slider">
						<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
							<div class="mui-scroll">
								<a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in cates" :key="item.id" @click="getAllphotolist(item.id)">
									{{item.title}}
								</a>
								
							</div>
						</div>
		
					</div>
					<div id="container">
					  <ul class="photolist">
					    <router-link v-for="item in list" :key="item.id" :to="'/home/photoInfo/'+item.id" tag="li">
					      <img v-lazy.container="item.img_url">
						  <div class="info">
							  <h1 class="title">{{item.title}}</h1>
							  <div class="body">{{item.zhaiyao}}</div>
						  </div>
					    </router-link>
					  </ul>
					</div>
					
				</div>
	</div>
</template>

<script>
	import mui from '../../lib/js/mui.js'
	export default{
		data(){
			return{
				cates:[],
				list:[]
			}
		},
	created() {
		this.getAllcategory(),
		this.getAllphotolist(0)
	},
	mounted() {
		
		mui('.mui-scroll-wrapper').scroll({
			deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		});
	},
		methods:{
			getAllcategory(){
				this.$http.get('api/getimgcategory').then(result=>{
					if(result.body.status===0){
						result.body.message.unshift({title:'全部',id:0})
						this.cates=result.body.message
					}else{
						console.log('失败')
					}
				})
			},
			getAllphotolist(cateId){
				this.$http.get('api/getimages/'+ cateId).then(result=>{
					if(result.body.status===0){
						this.list=result.body.message
					}else{
						console.log('失败')
					}
				})
			}
		},
		
	}

</script>

<style scoped="scoped">
	*{
		Touch-action:pan-y
	}
.mui-control-item{
	background-color: #fff;
}
.mui-content{
	background-color: #fff;
}
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.photolist{
	text-align: center;
	padding: 10px;
	
}
img{
		width: 100%;
		box-shadow: 0  0 6px #999;
	}
	li{
		position: relative;
		padding-bottom: 5px;
		
	}
	.info{
		position: absolute;
		bottom: 10px;
		color: #fff;
		background-color: rgba(0,0,0,.5);
		
	}
	.title{
		font-size: 14px;
	}
	.body{
		font-size: 13px;
	}
</style>
