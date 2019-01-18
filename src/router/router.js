import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/recommend"
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: () => import( 'components/recommend/recommend.vue')
    },
    {
      path: '/rank',
      name: 'rank',
      component: () => import( 'components/rank/rank.vue')
    },
    {
      path: '/singer',
      name: 'singer',
      component: () => import( 'components/singer/singer.vue'),
      children :[
        {
          path:':id',
          name:'singer-detail',
          component: () => import( 'components/singer-detail/singer-detail.vue')
        }
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: () => import( 'components/search/search.vue')
    }
  ]
})
