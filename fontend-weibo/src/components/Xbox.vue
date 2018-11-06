<template>
    <div class="lite-nav-sublist m-col-4">
        <ul class="m-auto-list" :nav="nav">
            <li @click="selectNav(index)" :class="{
                cur:nav===index
            }" class="m-auto-box" :key="index" v-for="(n,index) in navs"><span class="m-text-cut" v-text="n.title"></span></li>
        </ul>
    </div>
</template>
<script>
import setChannel from "../libs/setChannel.js";
export default {
  props: ["slideWrap"],
  data() {
    return {};
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
    // 选项卡
    selectNav(nav) {
      this.$router.push({ name: this.navs[nav].path });
      this.$store.dispatch("setNav", nav);
      this.slideWrap.scrollTo(this.navs[nav].slide, 0);
    },
    setChannel
  },
  mounted() {
    this.setChannel("nav");
  }
};
</script>

