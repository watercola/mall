<template>
  <div class="backtop">
    <img src="~assets/img/common/top.png">
  </div>
</template>

<script>
export default {
  name: "BackTop"
}
</script>

<style scoped>
  .backtop {
    position: fixed;
    right: 10px;
    bottom: 55px;
  }
  .backtop img {
    width: 40px;
    height: 40px;
  }
</style>
