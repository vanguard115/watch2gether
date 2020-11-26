import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Movies from '../components/Movies.vue'
import MovieDetail from '../components/movieDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home',
    name: 'Home',
    component: {
        template: '<router-view/>',
    }
  },

  {
    path: '/Home',
    name: 'Home',
    component: Home
  },

  {
    path: '/Movies/:searchQuery',
    name: 'Movies',
    component: Movies
  },

  {
    path: '/MovieDetail/:id',
    name: 'MovieDetail',
    component: MovieDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
