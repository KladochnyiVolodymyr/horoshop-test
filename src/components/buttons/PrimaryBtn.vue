<template>
  <button class="positive-btn">{{title}}</button>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    url: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/helpers";
.positive-btn {
  @include btn;
  background: #418af2;
  color: #fff;
}
</style>