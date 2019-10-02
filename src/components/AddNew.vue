<template>
  <div class="add-page">
    <div class="add-page__back">
      <img src="@/assets/svg/back-arrow.svg" />
    </div>
    <section class="fields">
      <div class="fields-header">
        <div class="fields__id">
          <Input placeholder="###" />
          <span class="fields__icon">№</span>
        </div>
        <div class="fields__title">
          <Input placeholder="Design Title" />
        </div>
      </div>
      <div class="fields-images">
        <AddPicture :images="getCurrentDesign.images" />
      </div>
      <div class="fields-footer">
        <div class="fields__link">
          <Input placeholder="https://design###.horoshop.ua/" />
          <img class="fields__icon" src="@/assets/svg/link.svg" />
        </div>
      </div>
    </section>
    <div class="add-page__btns">
      <DeleteBtn />
      <PrimaryBtn title="Сохранить и закрыть" />
    </div>
  </div>
</template>
<script>
import DeleteBtn from "./buttons/DeleteBtn";
import PrimaryBtn from "./buttons/PrimaryBtn";
import Input from "./Input";
import AddPicture from "./AddPicture";
export default {
  components: {
    PrimaryBtn,
    DeleteBtn,
    Input,
    AddPicture
  },
  data() {
    return {};
  },
  mounted() {
    const id = this.$route.params.id;
    if (id) {
      this.$store.dispatch("getCurrentDesign", id);
    }
  },
  computed: {
    getCurrentDesign() {
      return this.$store.state.currentDesign;
    }
  }
};
</script>
<style lang="scss" scoped>
.add-page {
  padding: 24px 32px 0px 37px;
  display: flex;
  position: relative;
  justify-content: space-between;
  &__btns {
    :first-child {
      margin-right: 8px;
    }
  }
  &__back {
    position: absolute;
    top: 30px;
    left: 37px;
  }
}
.fields {
  margin-left: 85px;
  width: 600px;
  padding-top: 4px;
  &-header {
    display: flex;
    margin-bottom: 28px;
  }
  &-images {
    margin-bottom: 26px;
  }
  &__id {
    margin-right: 8px;
    max-width: 80px;
    position: relative;
  }
  &__title {
    width: 100%;
  }
  &__link {
    position: relative;
  }
  &__icon {
    position: absolute;
    left: -25px;
    top: 8px;
  }
}
</style>