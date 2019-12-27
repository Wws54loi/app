<template>
	<div class="app-container">
     <!-- 顶部 Header区域 -->
	 <mt-header fixed title="Q宠时代 " class='bigtitle' > <span slot='left' @click="goback">
    <mt-button icon="back">返回</mt-button>
  </span></mt-header>
	  <!-- 顶部 Header区域 -->
	 <!-- 中间的路由 router-view区域 -->
	<transition >
		 <router-view></router-view>
	</transition>
	  <!-- 中间的路由 router-view区域 -->
	 <!-- 底部topbar区域 -->
	 <nav class="mui-bar mui-bar-tab">
	 			<router-link class="mui-tab-item-bin " to="/home">
	 				<span class="mui-icon mui-icon-home "></span>
	 				<span class="mui-tab-label">首页</span>
	 			</router-link>
	 			<router-link class="mui-tab-item-bin" to="/member">
	 				<span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
	 				<span class="mui-tab-label">会员</span>
	 			</router-link>
	 			<router-link class="mui-tab-item-bin" to="/shopcar">
	 				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">{{$store.getters.getAllCount}}</span></span>
	 				<span class="mui-tab-label">购物车</span>
	 			</router-link>
	 			<router-link class="mui-tab-item-bin" to="/search">
	 				<span class="mui-icon mui-icon-search"></span>
	 				<span class="mui-tab-label">搜索</span>
	 			</router-link>
	 		</nav>
			
	  <!-- 底部topbar区域 -->

	</div>
</template>

<script>
	
	import { Toast } from 'mint-ui';
export default {
	
	data() {
		return {
			list:[]
		};
	},
	methods: {
		goback(){
			this.$router.go(-1)
		}
	}
};
</script>

<style scoped>

	.v-enter{
		transform: translateX(100%);
		opacity: 0;
	}
	.v-leave-to{
		transform: translateX(-100%);
		opacity: 0;
		position: absolute;
	}
	.v-enter-active,
	.v-leave-active{
		transition: all 0.3s;
	}

	.app-container{
		padding-top: 40px;
		overflow-x: hidden;
		padding-bottom: 50px;
	}
	.bigtitle{
		z-index: 999;
	}
</style>
