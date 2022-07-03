<template>
  <router-view></router-view>
</template>

<script setup lang="ts"></script>

<style>
#app {
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 强制修改路由跳转顶部进度条 */
#nprogress .bar {
  height: 3px !important;
  background-image:
    linear-gradient(
      to right,
      #f16f5c 0%,
      #f16f5c 12.5%,
      #5b56dd 12.5%,
      #5b56dd 25%,
      #e15ced 25%,
      #e15ced 37.5%,
      #27e559 37.5%,
      #27e559 50%,
      #18c8c9 50%,
      #18c8c9 62.5%,
      #dc8987 62.5%,
      #dc8987 75%,
      #bb83d6 75%,
      #bb83d6 87.5%,
      #e774bd 87.5%,
      #e774bd 100%
    ) !important;
}
</style>
