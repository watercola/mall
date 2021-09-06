<template>
  <div id="detail">
    <detail-nav-bar class="navbar" @itemclick="navclick" ref="nav"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :topimgs="topimgs" ref="swiper"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shopinfo"/>
      <detail-goods-info :detail-info="detailInfo" @imgload="imgLoad"/>
      <detail-param-info :params-info="paramsInfo" ref="param"/>
      <detail-comment-info :comment-info="commentInfo" ref="comment"/>
      <goods-list :goods="recommend" ref="recommend"/>
    </scroll>
    <detail-bottom-bar @addcart="addcart"/>
    <back-top v-show="istopshow" @click.native="backclick"></back-top>
  </div>
</template>

<script>
  import DetailNavBar from "./childcpns/DetailNavBar";
  import DetailSwiper from "./childcpns/DetailSwiper";
  import DetailBaseInfo from "./childcpns/DetailBaseInfo";
  import DetailShopInfo from "./childcpns/DetailShopInfo";
  import DetailGoodsInfo from "./childcpns/DetailGoodsInfo";
  import DetailParamInfo from "./childcpns/DetailParamInfo";
  import DetailCommentInfo from "./childcpns/DetailCommentInfo";
  import DetailBottomBar from "./childcpns/DetailBottomBar";

  import Scroll from "components/common/scroll/Scroll";
  import GoodsList from "components/content/goods/GoodsList";

  import {getDetail, goods, Shop, GooodsParams, getRecommend} from "network/detail";

  import {itemlistenmixin, backTopMixin} from "common/mixin";
  import BackTop from "../../components/content/backtop/BackTop";


  export default {
    name: "Detail",
    components: {
      BackTop,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      Scroll,
      GoodsList,
    },
    data() {
      return {
        iid: '',
        topimgs: [],
        shopinfo: {},
        goods: {},
        detailInfo: {},
        paramsInfo: {},
        commentInfo: {},
        recommend: [],
        themeTopYs: [0],
        currentindex: 0,
      }
    },
    methods: {
      imgLoad() {
        this.$refs.scroll.refresh()
        this.themeTopYs.push(this.$refs.param.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        this.themeTopYs.push(Number.MAX_VALUE)
        console.log(this.themeTopYs);
      },
      navclick(index) {
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 1000)
      },
      contentScroll(position) {
        let positiony = -position.y
        console.log(positiony);
        const lenght = this.themeTopYs.length
        for (let i = 0; i < lenght-1; i++) {
          if((this.currentindex != i) && (positiony >= this.themeTopYs[i] && positiony < this.themeTopYs[i+1])) {
            console.log(this.currentindex);
            this.currentindex = i
            this.$refs.nav.currentIndex =  this.currentindex
          }
        }

      //  监听backtop
        this.showbacktop(position, 500)
      },

    //  监听购物车
      addcart() {
        const product = {}
        product.image = this.topimgs[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.iid = this.iid
        this.$store.dispatch('addToCart',product).then(res => {
          this.$toast.show(res)
        })
      }
    },
    mixins: [itemlistenmixin, backTopMixin],
    mounted() {
    },
    created() {
      this.iid = this.$route.params.iid

      getDetail(this.iid).then(res => {
        //分离
        console.log(res);
        const data = res.data.result
        this.topimgs = data.itemInfo.topImages
        this.goods = new goods(data.itemInfo, data.columns, data.shopInfo.services)
        this.shopinfo = new Shop(data.shopInfo)
        this.detailInfo = data.detailInfo
        this.paramsInfo = new GooodsParams(data.itemParams.info, data.itemParams.rule)
        if(data.rate.cRate != 0){
          this.commentInfo = data.rate.list[0]
        }
      })
      getRecommend().then(res => {
        this.recommend = res.data.data.list
      })
    },
    destroyed() {
      this.$bus.$off('imgLoad')
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 10;
    background-color: #fff;
    height: 100vh;
  }
  .navbar {
    position: relative;
    z-index: 10;
    background-color: #fff;
  }
  .content {
    height: calc(100% - 44px);
  }
</style>
