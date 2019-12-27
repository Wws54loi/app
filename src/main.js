import Vue from 'vue' 
import router from './router.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import  './lib/css/mui.css'
import  './lib/css/icons-extra.css'
import Viewer from 'v-viewer'
	import 'viewerjs/dist/viewer.css'
	Vue.use(Viewer)
	Viewer.setDefaults({
	  Options: { 'inline': true, 'button': true, 'navbar': true, 'title': true, 'toolbar': true, 'tooltip': true, 'movable': true, 'zoomable': true, 'rotatable': true, 'scalable': true, 'transition': true, 'fullscreen': true, 'keyboard': true, 'url': 'data-source' }
	})

Vue.use(MintUI)
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root='http://www.liulongbin.top:3005/'
import moment from 'moment'
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
		return moment(dataStr).format(pattern)
	})
	import vuex from 'vuex'
	Vue.use(vuex)
	var car=JSON.parse(localStorage.getItem('car')||[])
	var store =new vuex.Store({
		
		state:{
			car:car,
			
			
		},
		mutations:{
			addToCar(state,goodsInfo){
				var flag=false
				state.car.some(item=>{
					if(item.id==goodsInfo.id){
						item.count+=parseInt(goodsInfo.count)
						flag=true
						return true
					}
				})
				if(!flag){
					state.car.push(goodsInfo)
				}
				localStorage.setItem('car',JSON.stringify(state.car))
			},
			addGoodsCount(state,goodsInfoadd){
				state.car.some(item=>{
					if(item.id==goodsInfoadd.id){
						item.count=parseInt(goodsInfoadd.count);
						return true
					}
				})
				localStorage.setItem('car',JSON.stringify(state.car))
			},
			removeFromCar(state,id){
				state.car.some((item,i)=>{
					if(item.id==id){
						state.car.splice(i,1)
						return true;
					}
				})
				localStorage.setItem('car',JSON.stringify(state.car))
			},
			updateSelected(state,info){
				state.car.some(item=>{
					if(item.id==info.id){
						item.selected=info.selected
						return true;
					}
				})
				localStorage.setItem('car',JSON.stringify(state.car))
			}
		},
		getters:{
			getAllCount(state){
				var c=0;
				state.car.forEach(item=>{
					c+=item.count;
				})
				return c
			},
			getSoloCount(state){
				var o={};
				state.car.forEach(item=>{
					o[item.id]=item.count
				})
				return o
			},
			getSelected(state){
				var o={};
				state.car.forEach(item=>{
					o[item.id]=item.selected
				})
				return o
			},
			getGoodsCount(state){
				var o={
					count:0,
					amount:0
				}
				state.car.forEach(item=>{
					if(item.selected){
						o.count+=item.count;
						o.amount+=item.price*item.count;
					}
				})
				return o
			}
		}
	})
var vm=new Vue({
	el:'#app',
	render:c=>c(App),
	router,
	store	
})
console.log('hello')

