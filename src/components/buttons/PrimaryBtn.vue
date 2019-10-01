<template>
  <button class="positive-btn">{{title}}</button>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.positive-btn {
  background: #418af2;
  color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-radius: 3px;
  padding: 7px 11px;
  cursor: pointer;
  font-size: 14px;
}
</style>