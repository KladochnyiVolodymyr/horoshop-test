<template>
  <input class="input" :placeholder="placeholder" @input="getValue" />
</template>
<script>
export default {
  props: {
    placeholder: {
      type: String
    },
    updateValue: {
      type: Function
    }
  },
  methods: {
    getValue(e) {
      this.updateValue(e.target.value);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/helpers";
.input {
  border: $border;
  box-sizing: border-box;
  border-radius: 3px;
  padding: 7px 11px;
  outline: none;
  width: 100%;
}
</style>