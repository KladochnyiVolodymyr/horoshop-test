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
body {
  margin: 0;
  height: 100%;
}
html,
#app {
  height: 100%;
}
a {
  text-decoration: none;
}
</style>
