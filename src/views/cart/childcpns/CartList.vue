<template>
  <div class="cart-list">
    <scroll class="content" :probe-type="3" ref="scroll">
      <ListItem v-for="(item, index) in cartlist"
                :product="item"
                :key="index"></ListItem>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";

  import ListItem from "./ListItem";

  import {mapGetters} from 'vuex'

  export default {
    name: "cartlist",
    components: {
      Scroll,
      ListItem,
    },
    computed: {
      ...mapGetters(['cartlist'])
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .cart-list {
    height: calc(100% - 49px - 44px );
  }
  .content {
    width: 100%;
    overflow: hidden;
    height: calc(100% - 40px);
  }
</style>
