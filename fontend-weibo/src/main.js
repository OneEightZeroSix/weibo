import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
// vue-router
import VueRouter from 'vue-router';
Vue.use(VueRouter)
// vuex
import Vuex from 'vuex';
Vue.use(Vuex)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
// 一级路由
import Home from "./containers/Home.vue";
import Search from "./containers/Search.vue";
import Sign from "./containers/Sign.vue";
import Detail from "./containers/Detail.vue";

// 二级路由
import HomeChannel from "./containers/HomeChannel.vue";
import DetailChannel from "./containers/DetailChannel.vue";

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
        path: 'hot',
        component: HomeChannel,
        name: "hot",
      },
      {
        path: 'fresh',
        component: HomeChannel,
        name: "fresh",
      },
      {
        path: 'fun',
        component: HomeChannel,
        name: "fun",
      },
      {
        path: 'emotion',
        component: HomeChannel,
        name: "emotion",
      },
      {
        path: 'star',
        component: HomeChannel,
        name: "star",
      },
      {
        path: 'society',
        component: HomeChannel,
        name: "society",
      },
      {
        path: 'digit',
        component: HomeChannel,
        name: "digit",
      },
      {
        path: 'sports',
        component: HomeChannel,
        name: "sports",
      },
      {
        path: 'car',
        component: HomeChannel,
        name: "car",
      },
      {
        path: 'film',
        component: HomeChannel,
        name: "film",
      },
      {
        path: 'game',
        component: HomeChannel,
        name: "game",
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
        path: 'repost',
        component: DetailChannel,
        name: "repost",
      },
      {
        path: 'comment',
        component: DetailChannel,
        name: "comment",
      },
      {
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
    author: "wscats",
    description: "这是一个Vue写的新浪微博网页端",
    gallery: {
      isShowGallery: false,
      galleryImg: [], //图片地址
      index: 0
    },
    navs: [{
        title: "热门",
        path: "hot",
        slide: 0,
        containerid: "102803"
      },
      {
        title: "新鲜事",
        path: "fresh",
        slide: 0,
        containerid: "102803_ctg1_7978_-_ctg1_7978"
      },
      {
        title: "搞笑",
        path: "fun",
        slide: 0,
        containerid: "102803_ctg1_4388_-_ctg1_4388"
      },
      {
        title: "情感",
        path: "emotion",
        slide: 64,
        containerid: "102803_ctg1_1988_-_ctg1_1988"
      },
      {
        title: "明星",
        path: "star",
        slide: 120,
        containerid: "102803_ctg1_4288_-_ctg1_4288"
      },
      {
        title: "社会",
        path: "society",
        slide: 176,
        containerid: "102803_ctg1_4188_-_ctg1_4188"
      },
      {
        title: "数码",
        path: "digit",
        slide: 232,
        containerid: "102803_ctg1_5088_-_ctg1_5088"
      },
      {
        title: "体育",
        path: "sports",
        slide: 288,
        containerid: "102803_ctg1_1388_-_ctg1_1388"
      },
      {
        title: "汽车",
        path: "car",
        slide: 344,
        containerid: "102803_ctg1_5188_-_ctg1_5188"
      },
      {
        title: "电影",
        path: "film",
        slide: 400,
        containerid: "102803_ctg1_3288_-_ctg1_3288"
      },
      {
        title: "游戏",
        path: "game",
        slide: 456,
        containerid: "102803_ctg1_4888_-_ctg1_4888"
      },
      // {
      //   title: "wscats",
      //   path: "",
      //   slide: 512,
      //   containerid:""
      // },
    ],
    nav: 0
  },
  // 修改状态
  mutations: {
    editTitle(state, data) {
      state.title = data
    },
    editAuthor(state, data) {
      state.author = data
    },
    editGallery(state, data) {
      state.gallery = data
    },
    editNav(state, data) {
      state.nav = data
    }
  },
  // actions  一般配合 事件@xxx 触发
  actions: {
    setTitle(context, data) {
      context.commit('editTitle', data);
      context.commit('editAuthor', data)
    },
    setGallery(context, data) {
      context.commit('editGallery', data);
    },
    setNav(context, data) {
      context.commit('editNav', data);
    },
  },
  // 组件从store(中介)手上拿数据  配个 computed
  getters: {
    getTitle: state => {
      return state.title
    },
    getAuthor: state => {
      return state.author
    },
    getAll: state => {
      return state
    },
    getGallery: state => {
      return state.gallery
    },
    getNavs: state => {
      return state.navs
    },
    getNav: state => {
      return state.nav
    }
  }
})

// 终极容器
new Vue({
  router, //注入路由功能
  store, //注入了仓库功能
  render: h => h(App)
}).$mount('#app')