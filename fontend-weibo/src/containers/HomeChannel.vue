<template>
    <div style="margin-top: 84px" ref="list">
        <!-- <p v-text="navs[channel]"></p> -->
        <Xlist v-for="n in navs" />
    </div>
</template>
<script>
import Xlist from "../components/Xlist.vue";
import setChannel from "../libs/setChannel.js";
export default {
  data() {
    return {
      navs: [
        {
          title: "热门",
          path: "",
          isSelect: true
        },
        {
          title: "新鲜事",
          path: "",
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
      channel: 0
    };
  },
  components: {
    Xlist
  },
  methods: {
    setChannel,
    loadMore() {
      var self = this;
      window.onscroll = function() {
        console.log(window.scrollY + 484);
        console.log(self.$refs.list.scrollHeight);
        // var scrollHeight = $(document).height(); //当前页面的总高度
        // var windowHeight = $(this).height(); //当前可视的页面高度
        if (window.scrollY + 484 >= self.$refs.list.scrollHeight) {
          //距离顶部+当前高度 >=文档总高度 即代表滑动到底部
          console.log("上拉加载，要在这调用啥方法？");
          self.navs.push({
            title: "游戏",
            path: "",
            isSelect: false
          });
        }
      };
    }
  },
  mounted() {
    this.setChannel("channel");
    this.loadMore();
    console.log(this.$refs.list.scrollHeight);
    console.log(this.$refs.list.scrollHeight);
  },
  watch: {
    $route() {
      this.setChannel("channel");
      this.loadMore();
    }
  }
};
</script>
