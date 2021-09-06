<template>
  <div v-if="Object.keys(goods).length != 0" class="base">
    <div class="goods-title">{{goods.title}}</div>
    <div class="good-price">
      <span class="newprice">{{goods.newPrice}}</span>
      <span class="oldprice">{{goods.oldPrice}}</span>
      <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div class="goods-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="service">
      <span v-for="index in goods.services.length-1">
        <img src="goods.services[index-1].icon" alt="">
        {{goods.services[index-1].name}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
}
</script>

<style scoped>
  .base {
    padding: 0 8px;
    margin-top: 15px;
    color: #888;
    border-bottom: 4px solid rgba(100, 100, 100, .1);
  }
  .goods-title {
    color: #222;
  }
  .good-price {
    margin-top: 13px;
  }
  .newprice {
    color: var(--color-high-text);
    font-size: 24px;
  }
  .oldprice {
    margin-left: 8px;
    font-size: 13px;
    text-decoration: line-through;
  }
  .discount {
    background-color: var(--color-high-text);
    padding: 2px 5px;
    border-radius: 10px;
    font-size: 12px;
    color: white;
    margin-left: 5px;
    position: relative;
    top: -8px;
  }
  .goods-other {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 13px;
    font-size: 13px;
    line-height: 30px;
    border-bottom: 1px solid rgba(100,  100, 100, .1);
  }
  .service {
    font-size: 15px;
    color: black;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
  }
  .service img{
    width: 10px;
    height: 10px;
  }
</style>
