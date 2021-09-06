<template>
  <nav-bar>
    <div slot="left" class="back" @click="backclick">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="center">
      <span v-for="(item, index) in types"
            style="flex: 1"
            @click="itemclick(index)"
            :class="{active: currentIndex === index}">{{item}}</span>
    </div>
  </nav-bar>

</template>

<script>
  import NavBar from "components/common/navbar/NavBar";


  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        types: ['商品','参数','评论','推荐'],
        currentIndex: 0,
        detial: null,
      }
    },
    methods: {
      itemclick(index) {
        this.currentIndex = index
        this.$emit('itemclick', index)
      },
      backclick() {
        this.$router.go(-1)
      }
    },
  }
</script>

<style scoped>
  .center {
    display: flex;
    text-align: center;
    font-size: 13px;
  }

  .active {
    color: var(--color-high-text);
  }

  .back img{
    margin-top: 15px;
    width: 15px;
    height: 15px;
  }

</style>
