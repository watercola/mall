<template>
  <div class="toast" v-show="isshow">
    {{message}}
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: '',
      isshow: false
    }
  },
  methods: {
    show(message, duration=2000) {
      this.isshow = true
      this.message = message

      setTimeout(() => {
        this.isshow = false
        this.message = ''
      },duration)
    }
  }
}
</script>

<style scoped>
  .toast {
    position: fixed;
    z-index: 999;
    top: 50%;
    left: 50%;
    border-radius: 5px;
    transform: translate(-50%, -50%);
    padding: 6px 10px;
    color: #ffffff;
    background-color: rgba(0,0,0,.6);
  }
</style>
