<template>
  <div class="tarbar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot  name="item-active-icon"></slot></div>
    <div :style="activestyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1
    },
    activestyle() {
      return this.isActive ? {color: this.activecolor} : {}
    }
  },
  props: {
    path: String,
    activecolor: {
      default: 'red',
      type: String,
    }
  },
  data() {
    return {
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
.tarbar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tarbar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-bottom: 2px;
}

</style>
