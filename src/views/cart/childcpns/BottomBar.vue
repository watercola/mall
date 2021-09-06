<template>
  <div class="bottom-bar">
    <div class="left">
      <div class="check-content">
        <CheckButton class="check-botton" :class="{total : istotal}" @click.native="allcheck(istotal)"/>
        <span>全选</span>
      </div>
      <div class="totalprice">
        合计: {{'￥' + totalprice.toFixed(2)}}
      </div>
    </div>
    <div class="calculate right" @click="shop">
      去计算({{checkLength}})
    </div>
  </div>
</template>

<script>
  import CheckButton from "components/content/chechbutton/CheckButton";

  import {mapGetters} from "vuex";

  export default {
    name: "BottomBar",
    components: {
      CheckButton,
    },
    computed: {
      ...mapGetters(['cartlist']),
      totalprice() {
        return this.cartlist.filter(item => {
          return item.check
        }).reduce((prevalue, item) => {
          return prevalue + item.price * item.count
        },0)
      },
      checkLength() {
        return this.cartlist.filter(item => (item.check)).length
      },
      istotal() {
        if (this.cartlist.length != 0) {
          return this.cartlist.filter(item => (!item.check)).length > 0 ? false : true
        }else {
          return false
        }
      }
    },
    methods: {
      shop() {

      },
      allcheck(value) {
        if (this.cartlist.length != 0) {
          console.log('1');
          this.cartlist.forEach(item => item.check = !value)
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    font-size: 14px;
    height: 50px;
    width: 100%;
    background-color: #eee;
    position: relative;
    bottom: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left {
    display: flex;
  }
  .check-content, .totalprice {
    display: flex;
    align-items: center;
  }
  .check-botton {
    width: 25px;
    height: 25px;
    margin-left: 10px;
    margin-right: 5px;
  }
  .totalprice {
    margin-left: 20px;
  }
  .calculate {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    width: 90px;
    height: 100%;
    color: #fff;
  }
  .total {
    background-color: red;
    border-color: red;
  }
</style>
