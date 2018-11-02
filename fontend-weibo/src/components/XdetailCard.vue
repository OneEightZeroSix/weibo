<template>
    <div class="main" style="margin-top: 2.75rem;">
    <div class="card m-panel card9 f-weibo">
    <div class="card-wrap">
        <header class="weibo-top m-box" style="padding: 0;">
            <div class="m-avatar-box m-box-center"><a href="/profile/5187664653" class="m-img-box"><img src="https://tvax3.sinaimg.cn/crop.0.0.512.512.180/005F4Uyxly8fet0xr9thnj30e80e8jrx.jpg">
                    <i class="m-icon m-icon-goldv-static"></i></a></div>
            <div class="m-box-dir m-box-col m-box-center">
                <div class="m-text-box"><a href="/profile/5187664653" class="">
                        <h3 class="m-text-cut">邓超
                            <i class="m-icon m-icon-vipl6"></i></h3>
                    </a>
                    <h4 class="m-text-cut"><span class="time">4小时前</span> <span class="from"> 来自 iPhone客户端</span>

                    </h4>
                </div>
            </div>
            <div callback="follow()" class="m-add-box m-followBtn"><span class="m-add-box"><i class="m-font m-font-plus"></i>
                    <h4>关注</h4>
                </span></div>
        </header>
    </div>
    <article class="weibo-main">
        <div class="card-wrap">
            <div class="weibo-og">
                <div class="weibo-text">妹妹给我俩买的帽子，要求我每天戴着上班。 </div>
                <div>
                    <div class="weibo-media-wraps weibo-media f-media media-b">
                        <ul class="m-auto-list">
                            <li @click="showGallery(['https://wx4.sinaimg.cn/orj360/005F4Uyxgy1fwth6xk99pj31400u0dlt.jpg'],0)" class="m-auto-box2">
                                <div class="m-img-box m-imghold-4-3">
                                    <img src="https://wx4.sinaimg.cn/orj360/005F4Uyxgy1fwth6xk99pj31400u0dlt.jpg" class="f-bg-img">

                                </div>
                            </li>
                            <li class="m-auto-box2">
                                <div class="m-img-box m-imghold-4-3">
                                    <img src="https://wx3.sinaimg.cn/orj360/005F4Uyxgy1fwth6yfx7mj31400u0dli.jpg" class="f-bg-img">

                                </div>
                            </li>
                            <li class="m-auto-box2">
                                <div class="m-img-box m-imghold-4-3">
                                    <img src="https://wx3.sinaimg.cn/orj360/005F4Uyxgy1fwth6wkxh8j31400u0teq.jpg" class="f-bg-img">

                                </div>
                            </li>
                            <li class="m-auto-box2">
                                <div class="m-img-box m-imghold-4-3">
                                    <img src="https://wx2.sinaimg.cn/orj360/005F4Uyxgy1fwth6z1xwjj31400u07a6.jpg" class="f-bg-img">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </article>
</div>    
    <!-- <div class="card m-panel card9 f-weibo">
        <div class="card-wrap">
            <header class="weibo-top m-box">
                <div class="m-avatar-box m-box-center"><a href="/profile/1880246651" class="m-img-box"><img src="https://tva1.sinaimg.cn/crop.0.0.720.720.180/7012497bjw8ecdruvodihj20k00k0750.jpg">
                        <i class="m-icon m-icon-goldv-static"></i></a></div>
                <div class="m-box-dir m-box-col m-box-center">
                    <div class="m-text-box"><a href="/profile/1880246651" class="">
                            <h3 class="m-text-cut">胡军
                                <i class="m-icon m-icon-vipl6"></i></h3>
                        </a>
                        <h4 class="m-text-cut"><span class="time">18小时前</span> <span class="from"> 来自 iPhone 7 Plus</span>
                        </h4>
                    </div>
                </div>
                <div callback="follow()" class="m-add-box m-followBtn"><span class="m-add-box"><i class="m-font m-font-plus"></i>
                        <h4>关注</h4>
                    </span></div>
            </header>
        </div>
        <article class="weibo-main">
            <div class="card-wrap">
                <div class="weibo-og">
                    <div class="weibo-text">这是在金庸老先生家我们<a href="/n/黄晓明">@黄晓明</a> <a href="/n/一号立井">@一号立井</a> <a href="/n/张纪中">@张纪中</a>
                        给他过90岁生日的那一年。临走，金老先生非要送我们上电梯。在门口的这一挥手竟成了永别……金老先生，您一路走好🙏🙏🙏🙏🙏🙏🙏 </div>
                    <div>
                        <div class="weibo-media-wraps weibo-media f-media media-b">
                            <ul class="m-auto-list">
                                <li class="m-auto-box2">
                                    <div class="m-img-box m-imghold-4-3">
                                        <img src="https://wx2.sinaimg.cn/orj360/7012497bly1fwqjd1aufbj20qo0f03zh.jpg"
                                            class="f-bg-img">
                                    </div>
                                </li>
                                <li class="m-auto-box2">
                                    <div class="m-img-box m-imghold-4-3">
                                        <img src="https://wx2.sinaimg.cn/orj360/7012497bly1fwqixkqas3j20f00qo75a.jpg"
                                            class="f-bg-img">
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </div> -->
</div>
</template>
<script>
export default {
    methods:{
        showGallery(arr,index){
            // 把数据交给仓库，更改仓库的信息
            this.$store.dispatch("setGallery",{
                isShowGallery: true,
                galleryImg:arr,
                index
            })
        }
    }
}
</script>

<style scoped>
/* @import url("../assets/cards.css"); */
/* @import url("../assets/app.css"); */
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


/* weibo css */

</style>

