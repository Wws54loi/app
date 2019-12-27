import Vue from 'vue'
import VueRouter from '../node_modules/vue-router/dist/vue-router.js'

Vue.use(VueRouter)
import HomeContainer from './components/tabbar/HomeContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import newlist from './components/news/newlist.vue'
import newinfo from './components/news/NewsInfo.vue'
import photoList from './components/photos/PhotoList.vue'
import photoinfo from './components/photos/PhotoInfo.vue'
import goodsList from './components/goods/goodsList.vue'
import goodsInfo from './components/goods/goodsInfo.vue'
var router=new VueRouter({
	routes:[
		{path:'/',redirect:'/home'},
		{path:'/home',component:HomeContainer},
			{path:'/search',component:SearchContainer},
				{path:'/member',component:MemberContainer},
					{path:'/shopcar',component:ShopcarContainer},
						{path:'/home/newlist',component:newlist},
						{path:'/home/newsinfo/:id',component:newinfo},
						{path:'/home/photoList',component:photoList},
						{path:'/home/photoInfo/:id',component:photoinfo},
							{path:'/home/goodsList',component:goodsList},
								{path:'/home/goodsInfo/:id',component:goodsInfo}
	],
	linkActiveClass:'mui-active'
})
export default router
