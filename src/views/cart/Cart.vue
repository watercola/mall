<template>
  <div class="cart">
    <nav-bar class="navbar">
      <div slot="center">购物车({{cartlenght}})</div>
    </nav-bar>
    <cart-list/>
    <bottom-bar/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import Scroll from "components/common/scroll/Scroll";

  import CartList from "./childcpns/CartList";
  import BottomBar from "./childcpns/BottomBar";

  import {mapGetters} from 'vuex'

  export default {
    name: "Cart",
    components: {
      NavBar,
      Scroll,
      CartList,
      BottomBar,
    },
    computed: {
      ...mapGetters(['cartlenght']),
      cartlenght() {
        return this.$store.state.cartlist.length
      }
    },
    activated() {
    }
  }
</script>

<style scoped>
  .cart {
    height: 100vh;
  }
  .navbar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 600;
  }
</style>
