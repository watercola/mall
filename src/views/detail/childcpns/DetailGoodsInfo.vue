<template>
  <div class="goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
      <div class="key">{{detailInfo.detailImage[0].key}}</div>
    </div>
    <div class="imglist">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" :key="index" :src="item" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      count: 0,
      imgloadlenght: 0,
    }
  },
  methods: {
    imgLoad() {
      if(++this.count === this.imgloadlenght){
        this.$emit('imgload')
      }
    }
  },
  watch: {
    detailInfo() {
      this.imgloadlenght = this.detailInfo.detailImage[0].list.length
    }
  },
}
</script>

<style scoped>
  .goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-desc {
    padding: 0 15px;
  }
  .start {
    float: left;
  }
  .end {
    float: right;
  }
  .start, .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }
  .start::before, .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }
  .end::after {
    right: 0;
  }
  .desc {
    padding: 15px 0;
    font-size: 15px;
  }
  .key {
    color: #333;
    margin: 5px 0;
  }
  .imglist img {
    width: 100%;
  }
</style>
