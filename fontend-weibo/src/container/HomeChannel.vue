<template>
    <div style="margin-top: 84px">
        <!-- <p v-text="navs[channel]"></p> -->
        <Xlist />
        <Xlist />
        <Xlist />
        <Xlist />
        <Xlist />
    </div>
</template>
<script>
import Xlist from "../components/Xlist.vue";
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
    setChannel() {
      //判断当前是什么路由
      var route = this.$router.history.current.path;
      switch (route) {
        case "/home/hot":
          this.channel = 0;
          break;
        case "/home/fresh":
          this.channel = 1;
          break;
        default:
          this.channel = 0;
      }
    }
  },
  mounted() {
    this.setChannel();
  },
  watch: {
    $route() {
      this.setChannel();
    }
  }
};
</script>
