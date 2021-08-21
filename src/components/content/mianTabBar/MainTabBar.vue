<template>
  <div id="maintabbar">
    <router-view/>
    <TabBar>
      <TabBarItem path="/home" activecolor="deepred">
        <template #item-icon><img  src="~assets/img/tabbar/home.svg" ></template>
        <template #item-active-icon><img src="~assets/img/tabbar/home_active.svg"></template>
        <template #item-text><div>首页</div></template>
      </TabBarItem>
      <TabBarItem path="/home" activecolor="deepred">
        <template #item-icon><img  src="~assets/img/tabbar/home.svg" ></template>
        <template #item-active-icon><img src="~assets/img/tabbar/home_active.svg"></template>
        <template #item-text><div>首页</div></template>
      </TabBarItem>
      <TabBarItem path="/home" activecolor="deepred">
        <template #item-icon><img  src="~assets/img/tabbar/home.svg" ></template>
        <template #item-active-icon><img src="~assets/img/tabbar/home_active.svg"></template>
        <template #item-text><div>首页</div></template>
      </TabBarItem>
      <TabBarItem path="/home" activecolor="deepred">
        <template #item-icon><img  src="~assets/img/tabbar/home.svg" ></template>
        <template #item-active-icon><img src="~assets/img/tabbar/home_active.svg"></template>
        <template #item-text><div>首页</div></template>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  }
}
</script>

<style scoped>

</style>
