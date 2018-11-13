<template>
    <div id="wrapper" ref="list">
      <div id="scroller">
        <div class="m-tips m-tips-tp">
          <i class="m-font m-font-down m-font-down-ani" :class="{
            up:isLoading
          }"></i>
          <span class="main-link" v-text="text"></span>
        </div>
        <XhomeCard :key="index" v-for="(n,index) in news" :content="n" />
      </div>
    </div>
</template>
<script>
import BScroll from "better-scroll";
import XhomeCard from "../components/XhomeCard.vue";
import setChannel from "../libs/setChannel.js";
export default {
  data() {
    return {
      page: 1,
      news: [],
      isLoading: false,
      text:"下拉刷新"
    };
  },
  components: {
    XhomeCard
  },
  computed: {
    navs() {
      return this.$store.getters.getNavs;
    },
    nav: {
      // getter
      get: function() {
        return this.$store.getters.getNav;
      },
      // setter
      set: function(newValue) {
        this.$store.state.nav = newValue;
      }
    }
  },
  methods: {
    setChannel,
    // 加载数据
    // type为判断上拉还是下拉刷新
    loadMore(type = "up") {
      let self = this;
      let containerid = this.navs[this.nav].containerid;
      let page = this.page;
      this.isLoading = true;
      this.$axios
        // 发布测试用 
        .get("./getIndex.json", {
        // 开发用
        //.get("/api/container/getIndex", {
          params: {
            containerid,
            openApp: 0,
            page
          }
        })
        .then(response => {
          this.text = "下拉刷新";
          this.isLoading = false;
          if (type === "up") {
            console.log("上拉刷新");
            this.news = this.news.concat(response.data.data.cards);
          } else {
            console.log("下拉刷新");
            this.news = response.data.data.cards.concat(this.news);
          }

          this.page++;
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new BScroll(this.$refs.list, {
                click: true,
                scrollY: true,
                pullUpLoad: {
                  threshold: -30 // 当上拉距离超过30px时触发 pullingUp 事件
                }
              });
              this.scroll.on("scroll", (pos) => {
                if (pos.y > 32) {
                  this.text = "释放更新";
                  this.isLoading = true;
                }
              });
              this.scroll.on("scrollEnd", () => {
                // 滚动到底部
                if (this.scroll.y <= this.scroll.maxScrollY) {
                  this.loadMore();
                }
              });
              this.scroll.on("touchEnd", pos => {
                // 下拉动作
                if (pos.y > 32) {
                  this.text = "释放更新";
                  this.loadMore("down");
                }
              });
            } else {
              this.scroll.refresh();
            }
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.setChannel("channel");
    this.loadMore();
  },
  watch: {
    $route() {
      // 清空频道
      this.page = 0;
      this.news = [];
      // 切换频道
      this.setChannel("channel");
      // 获取数据
      this.loadMore();
    }
    // data() {
    //   setTimeout(() => {
    //     this.scroll.refresh();
    //   }, 20);
    // }
  },
  destoryed() {
    this.scroll.refresh();
    this.scroll = null;
  }
};
</script>
<style scoped>
#wrapper {
  position: absolute;
  z-index: 1;
  top: 52px;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fafafa;
  overflow: hidden;
}

#scroller {
  position: absolute;
  z-index: 1;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  width: 100%;
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  -ms-text-size-adjust: none;
  -o-text-size-adjust: none;
  text-size-adjust: none;
}
</style>
