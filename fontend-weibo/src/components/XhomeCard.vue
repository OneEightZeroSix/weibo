<template>
    <div @click="toDetailPage" v-if="isEmpty(content)" class="wb-item-wrap">
        <div class="wb-item" v-if="content.card_type!==11">
                <div class="card m-panel card9 f-weibo">
                        <div class="card-wrap">
                                <header class="weibo-top m-box">
                                        <div class="m-avatar-box m-box-center"><a href="/profile/1347712670" class="m-img-box"><img
                                                                :src="content.mblog.user.profile_image_url">
                                                        <i class="m-icon m-icon-goldv-static"></i></a></div>
                                        <div class="m-box-dir m-box-col m-box-center">
                                                <div class="m-text-box"><a href="/profile/1347712670" class="">
                                                                <h3 class="m-text-cut" v-html="`${content.mblog.user.screen_name}<i class='m-icon m-icon-vipl4'></i>`">马未都
                                                                </h3>
                                                        </a>
                                                        <h4 class="m-text-cut"><span class="time" v-text="content.mblog.created_at"></span>

                                                        </h4>
                                                </div>
                                        </div>
                                        <div callback="follow()" class="m-add-box m-followBtn"><span class="m-add-box"><i
                                                                class="m-font m-font-plus"></i>
                                                        <h4>关注</h4>
                                                </span></div>
                                </header>
                        </div>
                        <article class="weibo-main">
                                <div class="card-wrap">
                                        <div class="weibo-og">
                                                <div class="weibo-text" v-html="`${content.mblog.text}`"></div>
                                                <!-- 图片 -->
                                                <div>
                                                        <div  class="weibo-media-wraps weibo-media f-media media-b">
                                                                <ul  class="m-auto-list">
                                                                        <li @click="" v-for="(p,index) in content.mblog.pics" :key="index" class="m-auto-box3">
                                                                                <div  class="m-img-box m-imghold-4-3">
                                                                                        <img  :src="p.url"
                                                                                                class="f-bg-img">

                                                                                </div>
                                                                        </li>
                                                                </ul>
                                                        </div>
                                                </div>
                                                <!-- 视频 -->
                                                <div v-if="content.mblog.page_info">
                                                    <div v-if="content.mblog.page_info.type==='video'" class="weibo-media f-media">
                                                        <div class="weibo-media-wraps">
                                                            <div class="card-video type-video">
                                                                <div class="mwb-video mwbv-play mwbv-info">
                                                                    <div class="m-img-box"><img :src="content.mblog.page_info.page_pic.url"></div>
                                                                    <button class="mwbv-play-button"><span class="mwbv-icon"></span></button>
                                                                    <div class="mwbv-info-bar">
                                                                        <div class="m-box">
                                                                            <div class="m-box-col"></div>
                                                                            <div class="time"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                </div>

                        </article>
                        <footer class="f-footer-ctrl">
                                <div class="m-diy-btn m-box-center-a"><i class="lite-iconf lite-iconf-report"></i>
                                        <h4 v-text="content.mblog.reposts_count"></h4>
                                </div>
                                <div class="m-diy-btn m-box-center-a"><i class="lite-iconf lite-iconf-comments"></i>
                                        <h4 v-text="content.mblog.comments_count"></h4>
                                </div>
                                <div class="m-diy-btn m-box-center-a"><i class="lite-iconf lite-iconf-like"></i>
                                        <h4 v-text="content.mblog.attitudes_count"></h4>
                                </div>
                                <aside><i class="m-font m-font-dot-more"></i></aside>
                        </footer>
                </div>
        </div>
</div>
</template>
<script>
export default {
  props: ["content"],
  methods: {
    toDetailPage() {
      // 跳转详情页
      this.$router.push({ name: "comment" });
    },
    isEmpty(val) {
      let bool = JSON.stringify(val) == "{}";
      return !bool;
      // for (let key in val) {
      //   return false;
      // }
      // return true;
    }
  }
};
</script>

<style scoped>
@import url("../assets/cards.css");
/**/
html,
body,
#app {
  height: 100%;
}
[v-cloak] {
  display: none;
}
.wb-item-wrap .card9.card {
  margin: 0;
}
.f-weibo .m-img-box {
  background-color: #e6e6e6;
}
.empty-bg {
  width: 100%;
  background-color: #e6e6e6;
  height: 0.375rem;
}
.inline-block {
  display: inline-block;
}
.txt-margin {
  margin: 0 0 1rem 0;
}
.width-min {
  width: 4.375rem;
}
.anim-load {
  animation: load 0.5s ease-out;
  -moz-animation: load 0.5s ease-out;
  -webkit-animation: load 0.5s ease-out;
  -o-animation: load 0.5s ease-out;
}
@keyframes load {
  0% {
    background-color: #fff;
  }
  100% {
    background-color: #e6e6e6;
  }
}
@-moz-keyframes load {
  0% {
    background-color: #fff;
  }
  100% {
    background-color: #e6e6e6;
  }
}
@-webkit-keyframes load {
  0% {
    background-color: #fff;
  }
  100% {
    background-color: #e6e6e6;
  }
}
.f-more {
  letter-spacing: 0.1rem;
}
.f-weibo .f-card-title {
  margin: -1rem -1rem 0.5rem -1rem;
  padding: 0 1rem;
  border-width: 0;
}
.f-weibo .m-avatar-box .m-img-box .m-icon {
  font-size: 14px;
}
.iosx3 .card9 .f-card-title {
  border-width: 0;
}
.iosx2 .card9 .f-card-title {
  border-width: 0;
}
.f-weibo.card9 {
  border-bottom: 1px solid #e6e6e6;
}
.iosx3 .f-weibo.card9 {
  border-bottom: 0.36px solid #e6e6e6;
}
.iosx2 .f-weibo.card9 {
  border-bottom: 0.5px solid #e6e6e6;
}
.f-weibo.card9 > .card-wrap {
  margin-left: 0.75rem;
  margin-right: 0.75rem;
}
.f-weibo.card9.m-panel {
  border-top-width: 0;
}
.f-weibo.card .card-wrap .f-col-wrap {
  padding: 0 0.9375rem;
}
.f-weibo.card9 .m-box-col {
  min-width: 0;
}
.f-weibo.card9 .weibo-top {
  padding: 0 0 0 0.25rem;
}
.f-weibo.card9 .weibo-top .m-box-col .m-icon {
  margin-left: 3px;
}
.f-weibo.card9 .weibo-main .weibo-og {
  padding: 0.75rem 0 0 0.25rem;
}
.f-weibo.card9 .weibo-main .card-wrap ~ .weibo-rp {
  margin-top: 0.5rem;
}
.f-weibo.card9 .weibo-main .media-b {
  margin: 0.625rem 0 -0.375rem;
}
.f-weibo.card9 .weibo-main .media-b .m-auto-list {
  margin: 0 0 -0.25rem;
}
.f-weibo .weibo-top .m-text-box {
  margin: 0.15rem 0 0.15rem 0.5rem;
}
.f-weibo .f-r {
  float: right;
}
.f-weibo .weibo-main .weibo-og {
  font-size: 0.9375rem;
}
.f-weibo .weibo-rp .weibo-text {
  font-size: 0.9375rem;
}
.f-weibo .weibo-rp .f-footer-ctrl {
  padding: 0.625rem 0 0;
}
.f-weibo .f-bg-img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  width: 100%;
  height: 100%;
}
.f-footer-ctrl {
  border-top-width: 0;
  height: 1.1rem;
  padding: 1rem 0.375rem 1rem 0;
  margin: 0 0.75rem;
}
.f-footer-ctrl .m-diy-btn {
  color: rgba(40, 47, 60, 0.8);
  height: 100%;
  float: left;
}
.f-footer-ctrl .m-diy-btn + .m-diy-btn {
  margin-left: 1.6875rem;
}
.f-footer-ctrl .m-diy-btn .m-icon {
  font-size: 16px;
}
.f-footer-ctrl aside {
  float: right;
  color: rgba(40, 47, 60, 0.8);
}
.f-footer-ctrl .m-font {
  font-size: 1rem;
  vertical-align: middle;
}
.f-footer-ctrl .m-diy-btn h4 {
  font-size: 0.8125rem;
  display: inline-block;
  margin-top: 0;
  margin-left: 0.25rem;
}

.f-media .m-auto-list .m-auto-box1 {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  padding: 0 0rem 0rem 0;
}
.f-media .m-auto-list .m-auto-box2 {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 34%;
  padding: 0 0.3125rem 0.3125rem 0;
}
.f-media .m-auto-list .m-auto-box3 {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 33.33%;
  padding: 0 0.3125rem 0.3125rem 0;
}
.f-media .m-auto-list .m-imghold-4-3 {
  padding-bottom: 100%;
}
.f-media .m-auto-list .m-imghold-16-9 {
  padding-bottom: 56.25%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.f-media .feed-mark {
  z-index: 9;
}
.f-bg-img {
  -moz-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  width: 100%;
  height: 100%;
}

/* page-video */

/**
 * sass core
 */
/*多行截字*/
/*基础类在common中*/
/*处理border*/
/*单独控制图标的大小*/
/**
 * var 
 */
/*Background color*/
/*Font icon color*/
/*card background*/
/*Font Name*/
/*Font Path*/
/*Font Class Prefix*/
/*Image Icon Prefix*/
/*Image Icon Path*/
/*Button Prefix*/
/*Animation Prefix*/
/*Border Color*/
/*bar background color*/
/*line box background color*/
/*tap topbar bg*/
/*Popup background*/
/*Dialog background*/
/*Pop s background*/
/**/
/*Pop s border*/
/*Pop lt background*/
/*Pop lt line color*/
/*Avatar Line Color*/
/*Bubble Color*/
/*Rank Star Color*/
/*Colors*/
/*font*/
/*Font Size*/
/*card gap*/
/*devices*/
.card-video {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}
.card-video .mwb-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* @font-face {
  font-family: "videofont";
  src: url("../../assets/fonts/videofont.eot?11031615");
  src: url("../../assets/fonts/videofont.eot?11031615#iefix")
      format("embedded-opentype"),
    url("../../assets/fonts/videofont.ttf?11031615") format("truetype"),
    url("../../assets/fonts/videofont.woff?11031615") format("woff"),
    url("../../assets/fonts/videofont.svg?11031615#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
} */

@font-face {
  font-family: "videofont";
  src: url("../assets/videofont.woff");
  /* src: url("../assets/iconfont.ttf") format("truetype"); */
  font-weight: normal;
  font-style: normal;
}

.mwb-video {
  background: #000;
  color: #fff;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.mwb-video button {
  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
}
.mwb-video .mwbv-icon {
  display: inline-block;
  font-family: "videofont";
  -webkit-font-smoothing: antialiased;
}
.mwb-video .mwbv-hidden {
  display: none;
}
.mwb-video .m-img-box {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  -moz-background-size: 100%;
  background-size: 100%;
  background-position: center;
  overflow: hidden;
}
.mwb-video .mwbv-play-button {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 3.375rem;
  height: 3.375rem;
  margin: -1.6875rem 0 0 -1.6875rem;
  background: rgba(0, 0, 0, 0.4);
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}
.mwb-video .mwbv-play-button .mwbv-icon::before {
  content: "\E000";
  margin-left: 0.3125rem;
  font-size: 1.375rem;
}
.mwb-video .mwbv-info-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1rem;
  padding: 0.9375rem 0 0.3125rem;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(3%, rgba(0, 0, 0, 0)),
    color-stop(98%, rgba(0, 0, 0, 0.2))
  );
  background-image: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 3%,
    rgba(0, 0, 0, 0.2) 98%
  );
  /* background-image: -moz-
    oldlinear-gradient(top, rgba(0, 0, 0, 0) 3%, rgba(0, 0, 0, 0.2) 98%); */
  background-image: -o-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 3%,
    rgba(0, 0, 0, 0.2) 98%
  );
  background-image: linear-gradient(
    -180deg,
    rgba(0, 0, 0, 0) 3%,
    rgba(0, 0, 0, 0.2) 98%
  );
}
.mwb-video .mwbv-info-bar .m-box {
  margin: 0 0.3125rem;
  line-height: 1rem;
  font-size: 0.75rem;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
}
.mwb-video.mwbv-play .mwbv-play-button,
.mwb-video.mwbv-info .mwbv-info-bar {
  display: block;
}
@media screen and (min-width: 750px) {
  .card-video {
    width: 400px;
    height: 225px;
    padding-bottom: 0;
  }
}
</style>
