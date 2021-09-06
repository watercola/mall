<template>
  <div id="home">
    <nav-bar class="home_nav"><div slot="center">首页</div></nav-bar>
    <tab-control class="tab-control"
                 :titles="['流行','新款','精选']"
                 @tabclick="tabclick"
                 ref="toptabcontrol" v-show="isTabFixed"></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type=3
      @scroll="contentscroll"
      :pull-up-load="true" @pullingUp="loadimgmore">
      <home-swiper :banners="banner" @swiperimgload="swiperimgload"></home-swiper>
      <recommend-view :recommends="recommend"></recommend-view>
      <feature-view></feature-view>
      <tab-control
                   :titles="['流行','新款','精选']"
                   @tabclick="tabclick"
                   ref="tabcontrol"></tab-control>
      <goods-list :goods="showgoods"></goods-list>
    </scroll>
    <back-top @click.native="backclick" v-show="istopshow"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabcControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import HomeSwiper from "./childcpn/HomeSwiper";
import RecommendView from "./childcpn/RecommendView";
import FeatureView from "./childcpn/FeatureView";

import {getHomeMultidata, getHomeGoods} from "network/home";

import {itemlistenmixin, backTopMixin} from "common/mixin";

export default {
  name: "Home",
  components: {
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  data() {
    return {
      banner: null,
      recommend: null,
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      tabOffsetTop: 0,
      isTabFixed: false,
      remmenbery: null,
    }
  },
  computed: {
    showgoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    this.getHomeMultidata()

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.remmenbery, 0)
  },
  deactivated() {
    this.remmenbery = this.$refs.scroll.getScrollY()
    this.$bus.$off('imgLoad')
  },
  mixins: [itemlistenmixin, backTopMixin],
  methods: {
    //事件监听
    //监听tab选项
    tabclick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      console.log(this.$refs.tabcontrol);
      console.log(this.$refs.toptabcontrol);
      this.$refs.tabcontrol.currentindex = index
      this.$refs.toptabcontrol.currentindex = index
    },
    //监听滚动
    contentscroll(position) {
      //监听backtop按钮是否显示
      this.showbacktop(position, 1000)

      // 监听吸顶
      this.isTabFixed = (-position.y) >this.tabOffsetTop
    },
    //监听商品图片加载完成
    loadimgmore() {
      this.getHomeGoods(this.currentType)
    },
    //监听轮播图图片加载完成
    swiperimgload() {
      this.tabOffsetTop = this.$refs.tabcontrol.$el.offsetTop
    },

    //网络请求
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res.data.data);
        this.banner = res.data.data.banner.list
        this.recommend = res.data.data.recommend.list
      })
    },

    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.finishPullUp()
      })
    },

  }
}
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}

.home_nav {
  background-color: var(--color-tint);
  color: white;

  /*在使用原生的浏览器滚动时，为了防止导航跟着一起滚动*/
  /*position: fixed;*/
  /*top: 0;*/
  /*left: 0;*/
  /*right: 0;*/
  /*z-index: 9;*/
}

.tab-control {
  background-color: white;
  position: relative;
  z-index: 9;
}

.content {
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
}

</style>
