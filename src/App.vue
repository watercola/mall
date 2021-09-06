<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/mianTabBar/MainTabBar";

import {getBrowserInterfaceSize} from "common/utils";

export default {
  name: 'App',
  components: {
    MainTabBar
  },
  created() {
    getBrowserInterfaceSize()
  }
}


</script>

<style>
@import "assets/css/base.css";

#app html, body {
  height: 100%;
}
</style>
