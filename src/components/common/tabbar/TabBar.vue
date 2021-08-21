<template>
  <div id="tarbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabber"
}
</script>

<style scoped>
#tarbar{
  display: flex;
  background: #f6f6f6;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: 0 -3px 1px rgba(100,100,100,.2);
}
</style>
