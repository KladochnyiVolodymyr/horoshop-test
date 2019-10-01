<template>
  <input class="input" :placeholder="placeholder" />
</template>
<script>
export default {
  props: {
    placeholder: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
.input {
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-radius: 3px;
  padding: 7px 11px;
  outline: none;
  width: 100%;
}
</style>