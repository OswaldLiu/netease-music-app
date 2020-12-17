import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend from '../views/Recommend.vue'
import SongCollection from '../views/SongCollection.vue'
import Rank from '../views/Rank.vue'
import Singer from '../views/Singer.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

function CANNOT_ENTER_DIRECTLY(to,from,next){
    console.log('from',from);
    if(from.name==="Recommend") {
      next();
    }
    else next('/');
}

const routes = [
  {
    path: '/',
    redirect:'/recommend'
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: Recommend,
    children:[
      {
        path:'/recommend/:id',
        component: SongCollection,
        props:true,
        //设置路由守卫，不能直接进去具体歌单
        //确保从recommend进入,传递封面
        beforeEnter:CANNOT_ENTER_DIRECTLY
      }
    ]
  },
  {
    path:'/rank',
    name:'Rank',
    component:Rank,
  },
  {
    path:'/singer',
    name:'Singer',
    component:Singer,
  },
  {
    path:'/search',
    name:'Search',
    component:Search,
    beforeEnter:CANNOT_ENTER_DIRECTLY
  },
  {
    path:'*',
    redirect:'/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
