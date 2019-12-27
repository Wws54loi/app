<template>
	<div class="goodsInfo">
	<transition
		@before-enter="beforeenter"
		@enter="enter"
		@after-enter="afterenter"
	>
		<div class="ball" v-show="ballFlag" ref='ball'></div>
	</transition>
		

	<div class="mui-card">
					<div class="mui-card-content">
						<div class="mui-card-content-inner">
							<mt-swipe :auto="0" class='lunbo'>
							<mt-swipe-item   v-for="item in lunboList" :key="item.src"><img :src="item.src" alt=""></mt-swipe-item>
							</mt-swipe>
						</div>
					</div>
				</div>
					<div class="mui-card">
								<div class="mui-card-header">{{goodsInfo.title}}</div>
								<div class="mui-card-content">
									<div class="mui-card-content-inner">
										<span>市场价：<del>￥{{goodsInfo.market_price}}</del></span><span class="market-price">销售价: <i>￥{{goodsInfo.sell_price}}</i> </span>
								<br><span>购买数量：<numbox @getCount='getSelectcount' :max='goodsInfo.stock_quantity'></numbox></span><br>
														<mt-button type="primary" size="small">立即购买</mt-button>
														<mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
									</div>
								</div>
							</div>
							<div class="mui-card">
										<div class="mui-card-header">商品参数</div>
										<div class="mui-card-content">
											<div class="mui-card-content-inner">
											<p class="goodsparam">	<p>商品货号：{{goodsInfo.goods_no}}</p>
											<p>库存情况：{{goodsInfo.stock_quantity}}</p> <p>上架时间：{{goodsInfo.add_time}}</p></p>
											
											</div>
										</div>
										<div class="mui-card-footer"><mt-button type="primary" plain size="large" class="jieshao">图文介绍</mt-button>
										<mt-button type="danger" plain size="large">商品评论</mt-button></div>
									</div>
					</div>
					
</template>

<script>
	
	import numbox from '../tools/numbox.vue'
export default {
	data() {
		return {
			id:this.$route.params.id,
			lunboList:[],
			goodsInfo:{},
			ballFlag:false,
			selectcount:1
		};
	},
	created() {
		
		this.getLunbo();
		this.getGoodsDetail();
	},
	methods: {
		getGoodsDetail() {
			this.$http.get('api/goods/getinfo/'+this.id).then(result=>{
				if(result.body.status===0){
					this.goodsInfo=result.body.message[0]
				}else{
					console.log('错误')
				}
			})
		},
		getLunbo(){
			console.log(this.id)
			this.$http.get('api/getthumimages/'+this.id).then(result=>{
				if(result.body.status===0){
					this.lunboList=result.body.message
				}else{
					console.log('失败')
				}
			})
		},
		addToShopCar(){
			this.ballFlag=!this.ballFlag
			var info ={id:this.id,count:this.selectcount,price:this.goodsInfo.sell_price,selected:true};
			this.$store.commit("addToCar",info)
		},
		beforeenter(el){
			el.style.transform='translate(0,0)'
			
		},
		enter(el,done){
			el.offsetWidth;
			const ballPosition=this.$refs.ball.getBoundingClientRect();
			const badgePosition=document.getElementById('badge').getBoundingClientRect();
			const xDist=badgePosition.left-ballPosition.left;
			const yDist=badgePosition.top-ballPosition.top;
			console.log(yDist)
			el.style.transform=`translate(${xDist}px,${yDist}px)`;
			el.style.transition='all 1s ease';
			done();
			
		},
		afterenter(el){
			this.ballFlag=!this.ballFlag;
		},
		getSelectcount(count){
			this.selectcount=count;
			console.log(this.selectcount)
		}
	},
	
	components:{
		numbox:numbox
	}
};
</script>

<style scoped="scoped">
	.goodsInfo{
		background-color: #eee;
		overflow: hidden;
		
	}
	.lunbo{
		text-align: center;
		height: 200px;
		margin: 10px;
	}
	img{
		height: 100%;
		
	}
	.mui-numbox{
		margin: 10px 0;
	}
	.market-price{
		padding-left: 5px;
	}
	.market-price i{
		font-style: normal;
		color: red;
		font-weight: bold;
		font-size: 16px;
	}
	.mui-card-footer{
		display: block;
	}
	.jieshao{
		margin: 15px 0;
	}
	.ball{
		position: absolute;
		top: 390px;
		left: 200px;
		width: 15px;
		height: 15px;
		background-color: red;
		z-index: 99;
		border-radius: 50%;
		
	}
	
</style>
