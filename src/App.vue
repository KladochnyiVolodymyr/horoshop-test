<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style lang="scss">
@import "./assets/scss/reset";
body,
#app {
  min-height: 100vh;
}
a {
  text-decoration: none;
}
</style>
