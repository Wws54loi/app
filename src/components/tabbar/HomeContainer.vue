<template>
	<div>
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for='item in list' :key="item.id"><img :src="item.img" alt="" class="lunbo"></mt-swipe-item>
		</mt-swipe>
		<div class="mui-content">
			<ul class="mui-table-view mui-grid-view mui-grid-9">
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<router-link to="/home/newlist">	
					
						<img src="../../lib/images/menu1.png" alt="" class="img6">
							<div class="mui-media-body">新闻资讯</div>
					
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<router-link to="/home/photoList">
						<img src="../../lib/images/menu2.png" alt="" class="img6">
						<div class="mui-media-body">图片分享</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<router-link to="/home/goodsList">
						<img src="../../lib/images/menu3.png" alt="" class="img6">
						<div class="mui-media-body">商品购买</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<a href="#">
						<img src="../../lib/images/menu4.png" alt="" class="img6">
						<div class="mui-media-body">留言反馈</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<a href="#">
					<img src="../../lib/images/menu5.png" alt="" class="img6">
						<div class="mui-media-body">视频专区</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<a href="#">
						<img src="../../lib/images/menu6.png" alt="" class="img6">
						<div class="mui-media-body">联系我们</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			list:[]
		};
	},
	created() {
		this.getLunbo()
	},
	methods: {
		getLunbo(){
			this.$http.get('api/getlunbo').then(result=>{
				if(result.body.status===0){
					this.list=result.body.message
				}else{
					toast('失败')
				}
			})
		}
	}
};
</script>

<style scoped>
	*{
		margin: 0!important;
		padding: 0;
	}
.mint-swipe {
	height: 200px;
}
.mint-swipe-item:nth-child(1) {
	background-color: pink;
}
.mint-swipe-item:nth-child(2) {
	background-color: purple;
}
.mint-swipe-item:nth-child(3) {
	background-color: red;
}
.mui-table-view{
	background-color: #fff;
}
.mui-table-view-cell{
	border: 0!important;
}
.img6{
	width: 60px;
	height: 60px;
}
.lunbo{
	width: 100%;
	height: 100%;
}
</style>
