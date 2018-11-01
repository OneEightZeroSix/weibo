<template>
    <div>
        <div class="lite-page-tab">
            <div class="tab-item" :test="`${index}-${tab}`" :class="{
                'cur':tab===index
            }" @click="selectTab(index)" :key="index" v-for="(t,index) in tabs">
                <i v-html="`${t.title}<em></em>`"></i>
                <i v-text="t.num"></i>
            </div>
        </div>
        <div first-check="true" class="comment-content" style="margin-top: -1px;">
            <router-view></router-view>
            <div class="m-tips m-tips-tp" style="display: none;">
                <div class="m-loading m-loading-dark"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: [
        {
          title: "转发",
          isSelect: true,
          path: "repost",
          num: 33123
        },
        {
          title: "评论",
          isSelect: true,
          path: "comment",
          num: 34628
        },
        {
          title: "赞",
          isSelect: true,
          path: "like",
          num: 243333
        }
      ],
      tab: 1
    };
  },
  methods: {
    selectTab(tab) {
      console.log(tab);
      this.tab = tab;
      //this.$router.push(this.tabs[tab].path)
      this.$router.push({ name: this.tabs[tab].path});
    }
  }
};
</script>

<style scoped>
@import url("../assets/app.css");

.comment-con-img {
  display: block;
  max-width: 100px;
  /* width: 3.3125rem;
   height: 3.3125rem*/
}
.comment-con-img img {
  width: 100%;
  height: 100%;
  display: block;
}
.lite-page-list .m-text-box .cmt-sub-txt span {
  color: #333;
}
.lite-page-list .m-text-box .cmt-sub-txt p .m-font {
  font-size: 0.625rem;
}
.like-blog {
  margin-bottom: 0.5rem;
  font-size: 0.6875rem;
  color: #999;
}
.like-blog .lite-iconf {
  font-size: 0.6875rem;
}
.like-blog span {
  color: #999;
}
.lite-page-list .m-text-box .cmt-sub-txt .total {
  color: #507daf;
  cursor: pointer;
}
</style>
