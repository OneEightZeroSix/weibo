<template>
<div>
  <!-- Home -->
  <div v-if="status==='home'" class="lite-topbar main-top">
        <div class="nav-top">
            <div class="nav-left unlogin-logo"></div>
            <a href="#/search" class="nav-search unlogin-search">
                <aside ><label class="m-search">
                        <i class="m-font m-font-search"></i>
                        <div class="m-text-cut"> 大家都在搜：李亚鹏经纪人回应失信名单</div>
                    </label></aside>
            </a>
            <div class="nav-right" @click="publish">
                <div class="lite-iconf lite-iconf-releas"></div>
            </div>
        </div>
        <div class="nav-main">
            <div class="m-box">
                <div class="m-box-col inner-box">
                    <div class="scroll-box slide-container">
                        <div class="slide-wrap">
                            <ul class="nav_item">
                                <li @click="selectNav(index)" :key="index" v-for="(n,index) in navs" class="item_li" :class="{
                                    cur:nav===index
                                }">
                                    <span>
                                        {{n.title}}
                                        <em></em>
                                    </span>

                                </li>
                            </ul>
                        </div>
                    </div>
                    <Xbox v-show="isShowXbox" />
                </div>
                <div @click="toggleXbox" class="nav-plus m-box-center m-box-center-a"><i class="m-font m-font-arrow-down"></i></div>
            </div>
        </div>
    </div>
    <!--Search-->
    <div v-if="status==='search'" class="ntop-nav">
    <div class="m-box-center-a">
        <div class="nt-box-col m-box-center-a">
            <div class="nt-left" @click="back"><i class="m-font m-font-arrow-left"></i></div>
            <div class="m-box-col m-box-center-a nt-sbox">
                <form action="." class="nt-search"><i class="m-font m-font-search"></i>
                    <input type="search" placeholder="大家都在搜：万圣节头像">
                </form>
            </div>
        </div>
    </div>
</div>
      <!-- 详情页 -->
      <div v-if="status==='detail'" class="lite-topbar lite-page-top">
    <div class="nav-left" @click="back"><i class="m-font m-font-arrow-left"></i></div>
    <div class="nav-main">
        <h4>微博正文</h4>
    </div>
    <div class="nav-right"><i class="m-font m-font-dot-more"></i></div>
</div>
</div>
    
</template>
<script>
import axios from "axios";
//import $ from 'jquery';
import Xbox from "./Xbox.vue";
export default {
  props: ["status"],
  data() {
    return {
      // 切换box
      isShowXbox: false,
      // 选项卡
      navs: [
        {
          title: "热门",
          path: "hot",
          isSelect: true
        },
        {
          title: "新鲜事",
          path: "fresh",
          isSelect: false
        },
        {
          title: "搞笑",
          path: "",
          isSelect: false
        },
        {
          title: "情感",
          path: "",
          isSelect: false
        },
        {
          title: "明星",
          path: "",
          isSelect: false
        },
        {
          title: "社会",
          path: "",
          isSelect: false
        },
        {
          title: "数码",
          path: "",
          isSelect: false
        },
        {
          title: "体育",
          path: "",
          isSelect: false
        },
        {
          title: "汽车",
          path: "",
          isSelect: false
        },
        {
          title: "电影",
          path: "",
          isSelect: false
        },
        {
          title: "游戏",
          path: "",
          isSelect: false
        }
      ],
      nav: 0,
      news: []
    };
  },
  methods: {
    // 选项卡
    selectNav(nav) {
      this.nav = nav;
      //this.$router.push(`${this.navs[nav].path}`);
      this.$router.push({ name: this.navs[nav].path });
    },
    // 加载数据
    loadMore() {
      axios
        .get("http://localhost:12345/api/getIndex")
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 返回
    back() {
      this.$router.history.go(-1);
    },
    //发布内容，如果没登录的话，跳转到登录页面
    publish() {
      //this.$router.push("sign");
      this.$router.push({ name: "sign" });
    },
    // 切换Xbox
    toggleXbox() {
      this.$store.dispatch("setTitle","微信");
      this.isShowXbox = !this.isShowXbox;
    }
  },
  computed: {
    title() {
      return this.$store.getters.getTitle;
    },
    author(){
      return this.$store.getters.getAuthor;
    }
  },
  watch: {},
  mounted() {
    console.log(this.status);
    this.loadMore();
  },
  components: {
    Xbox
  }
};
</script>

<style scoped>
@import url("../assets/app.css");

/*search*/

@charset "UTF-8";
.ntop-nav {
  height: 44px;
  background-color: #fff;
  -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
}
.ntop-nav > .m-box-center-a {
  height: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 0.625rem;
}
.nt-box-col {
  -webkit-flex-basis: auto;
  -ms-flex-preferred-size: auto;
  flex-basis: auto;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-flex-shrink: 1;
  -ms-flex-negative: 1;
  flex-shrink: 1;
}
.nt-sbox {
  height: 28px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  background-color: #e3e4e6;
}
.nt-search {
  position: relative;
  width: 100%;
}
.nt-search {
  -webkit-flex-basis: auto;
  -ms-flex-preferred-size: auto;
  flex-basis: auto;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-flex-shrink: 1;
  -ms-flex-negative: 1;
  flex-shrink: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.nt-search .m-font-search {
  padding-left: 10px;
  padding-right: 8px;
  color: #8e8e93;
}
.nt-search input {
  background-color: transparent;
  border: 0px none;
  font-size: 0.875rem;
  color: #333333;
  width: 100%;
  margin-right: 2rem;
}
.nt-search input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
.nt-left {
  padding-right: 1.1875rem;
  cursor: pointer;
}
.nt-left .m-font {
  color: #606060;
  font-weight: bold;
}
.nt-right {
  padding-left: 0.75rem;
  cursor: pointer;
}
.nt-icon-pub {
  width: 1.875rem;
  height: 1.875rem;
  background-image: url(https://h5.sinaimg.cn/upload/1005/16/2018/02/09/publish.png);
  background-repeat: no-repeat;
  -moz-background-size: contain;
  background-size: contain;
  display: inline-block;
}
.icon-cross {
  width: 0.875rem;
  height: 0.875rem;
  background: #cac8c8;
  color: #fff;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  position: absolute;
  /*方便相对于父元素进行定位*/
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  bottom: 0;
  right: 10px;
}
.icon-cross::before,
.icon-cross::after {
  content: "";
  position: absolute;
  background: #f7f7f7;
  height: 0.5rem;
  width: 0.0625rem;
  top: 0.1875rem;
  right: 0.375rem;
}
.icon-cross::before {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  /*进行旋转*/
}
.icon-cross::after {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
</style>
