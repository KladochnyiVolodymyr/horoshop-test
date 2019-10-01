<template>
  <div class="add-picture">
    <div class="add-picture__empty">
      <img src="@/assets/svg/empty-img.svg" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.add-picture {
  &__empty {
    width: 100%;
    height: 120px;
    border: 2px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    border-radius: 3px;
    border-style: dotted;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>