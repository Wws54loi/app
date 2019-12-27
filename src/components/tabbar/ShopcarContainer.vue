<template>
	<div>
		<div class="mui-card ">
			<div class="mui-card-content ">
				<div class="mui-card-content-inner goods-list" v-for="item in goodslist" :key="item.id">
					<mt-switch v-model="$store.getters.getSelected[item.id]" @change='goodsSelestedChange(item.id,$store.getters.getSelected[item.id])'></mt-switch>

					<img :src="item.thumb_path" alt="" />
					<div class="info">
						<h3>{{ item.title }}</h3>
						<p>
							<span class="price">${{ item.sell_price }}</span>
							<shopnumbox class="box" style="height: 25px;" :count="$store.getters.getSoloCount[item.id]" :goodsId="item.id"></shopnumbox>
							<a href="script:;" @click="remove(item.id,i)">删除</a>
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner zongji">
					<p>
						<span>总计（不含运费）</span><br>
						<span class="zongjia">已勾选商品<i>{{$store.getters.getGoodsCount.count}}</i>件，总价：<i>${{$store.getters.getGoodsCount.amount}}</i></span>
					</p>
					<mt-button type="danger">去结算</mt-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import mui from '../../lib/js/mui.js';
import shopnumbox from './numboxforshop.vue';
export default {
	data() {
		return {
			goodslist: []
		};
	},
	created() {
		this.getGoodsList();
		mui('.mui-switch')['switch']();
	},
	mounted() {},
	methods: {
		getGoodsList() {
			var idArr = [];
			this.$store.state.car.forEach(item => idArr.push(item.id));
			if (idArr.length <= 0) {
				return;
			}
			this.$http.get('api/goods/getshopcarlist/' + idArr.join(',')).then(result => {
				if (result.body.status === 0) {
					this.goodslist = result.body.message;
				} else {
					alert('错误');
				}
			});
		},
		remove(id,i){
			this.goodslist.splice(i,1)
			this.$store.commit("removeFromCar",id)
		},
		goodsSelestedChange(id,val){
			this.$store.commit("updateSelected",{id,selected:val})
		}
	},
	components: {
		shopnumbox: shopnumbox
	}
};
</script>

<style scoped="scoped">
img {
	width: 60px;
	height: 60px;
}
.goods-list {
	display: flex;
	align-items: center;
}
h3 {
	font-size: 13px;
}
.price {
	color: red;
}
.info {
	margin-left: 5px;
}
.box {
	margin: 7px;
}
.zongji{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
i{
	padding-left: 3px;
	font-style: normal;
	font-size: 16px;
	color: red;
	font-weight: bold;
}
p{
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}

</style>
