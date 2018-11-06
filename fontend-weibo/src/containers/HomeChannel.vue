<template>
    <div style="margin-top: 84px" ref="list">
        <XhomeCard :key="index" v-for="(n,index) in news" :content="n" />
    </div>
</template>
<script>
import XhomeCard from "../components/XhomeCard.vue";
import setChannel from "../libs/setChannel.js";
export default {
  data() {
    return {
      page: 1,
      news: []
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
    loadMore() {
      let self = this;
      let containerid = this.navs[this.nav].containerid;
      let page = this.page;
      this.$axios
        .get("/api/container/getIndex", {
          params: {
            containerid,
            openApp: 0,
            page
          }
        })
        .then(response => {
          console.log(this.news, response.data.data.cards);
          this.news = this.news.concat(response.data.data.cards);
          this.page++;
        })
        .catch(error => {
          console.log(error);
        });
      window.onscroll = () => {
        if (window.scrollY + 484 >= self.$refs.list.scrollHeight) {
          //距离顶部+当前高度 >=文档总高度 即代表滑动到底部
          this.loadMore();
        }
      };
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
  }
};
</script>
