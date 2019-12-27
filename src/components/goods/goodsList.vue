<template>
	<div class="goods-list">
		<router-link class="goods-item" v-for="item in list" :key="item.id" :to="'/home/goodsInfo/'+item.id">
			<img :src="item.img_url" alt="">
			<h3 class="title">{{item.title}}</h3>
			<div class="point">
				<span class="price">{{item.sell_price}}</span><del class="beforePrice">{{item.market_price}}</del>
				<p class="surplus">
					<span class="selling">热卖中</span> <span class="number">剩余{{item.stock_quantity}}件</span>
				</p>
			</div>
		</router-link>
		<mt-button type="danger" size="large" @click="more()">加载更多</mt-button>
	</div>
</template>

<script>
	import{Toast} from'mint-ui'
	export default{
		data(){
			return{
				list:[],
				pageindex:1
			}
		},
		created() {
			this.getGoodsList()
		},
		methods:{
			getGoodsList(){
				this.$http.get('api/getgoods?pageindex='+this.pageindex).then(result=>{
					if(result.body.status===0){
						this.list=this.list.concat(result.body.message);
					}else{
						toast('失败')
					}
				})
			},
			more(){
				if(this.pageindex>=2){
					Toast('没有更多啦')
				}
				this.pageindex++;
				this.getGoodsList()
			}
		},
		
	}
</script>

<style scoped="scoped">
	p{
		margin: 0;
		
	}
	.surplus{
		display: flex;
		justify-content: space-between;
		padding: 5px;
		
	}
	.goods-list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 10px;
	}
	.goods-item{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 49%;
		border:1px solid #ccc;
		box-shadow: 0 0 8px #ccc;
		margin: 3px 0;
		
	}
	img{
		width: 100%;
	}
	.title{
		font-size: 14px;
	}
	.point{
		background-color: #eee;
	}
	.price{
		color: red;
		font-weight: bold;
		font-size: 16px;
		padding-left: 10px;
	}
	del{
		font-size: 12px;
		margin-left: 15px;
	}
</style>
