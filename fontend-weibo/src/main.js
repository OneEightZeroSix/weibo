import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
// 一级路由
import Home from "./container/Home.vue";
import Search from "./container/Search.vue";
import Sign from "./container/Sign.vue";
import Detail from "./container/Detail.vue";
// 二级路由
import HomeChannel from "./container/HomeChannel.vue";
import DetailChannel from "./container/DetailChannel.vue";

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。

const routes = [{
    path: '/home',
    component: Home,
    name: "home",
    children: [{
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'hot',
        component: HomeChannel,
        name: "hot",
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: 'fresh',
        component: HomeChannel,
        name: "fresh",
      }
    ]
  },
  {
    path: '/search',
    name: "search",
    component: Search
  },
  {
    path: '/sign',
    name: "sign",
    component: Sign
  },
  {
    path: '/detail',
    component: Detail,
    name: "detail",
    children: [{
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'repost',
        component: DetailChannel,
        name: "repost",
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: 'comment',
        component: DetailChannel,
        name: "comment",
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: 'like',
        component: DetailChannel,
        name: "like",
      }
    ]
  },
  {
    path: '/',
    redirect: '/home/hot'
  } //  碰到#/重定向到#/home
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})


// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)


// 组件1 -----> actions(下命令) ------> mutatios(改) ------> state(仓库) ---->getter(拿) ------>  组件2
// vuex仓库
const store = new Vuex.Store({
  // 状态
  state: {
    title: "微博",
    author: "lemon",
    description: "这是一个最完美新浪微博客户端"
  },
  // 修改状态
  mutations: {
    editTitle(state, data) {
      state.title = data
    },
    editAuthor(state, data) {
      state.author = data
    }
  },
  actions: {
    setTitle(context, data) {
      context.commit('editTitle', data);
      context.commit('editAuthor', data)
    }
  },
  // 组件从store(中介)手上拿数据
  getters: {
    getTitle: state => {
      return state.title
    },
    getAuthor: state => {
      return state.author
    },
    getAll: state => {
      return state
    }
  }
})

// 终极容器
new Vue({
  router, //注入路由功能
  store, //注入了仓库功能
  render: h => h(App)
}).$mount('#app')