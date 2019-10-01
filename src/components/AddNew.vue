<template>
  <div class="add">
    <div class="add__btns">
      <DeleteBtn />
      <PositiveBtn title="Сохранить и закрыть" />
    </div>
  </div>
</template>
<script>
import DeleteBtn from "./buttons/DeleteBtn";
import PositiveBtn from "./buttons/PositiveBtn";
export default {
  components: {
    PositiveBtn,
    DeleteBtn
  }
};
</script>
<style lang="scss" scoped>
</style>