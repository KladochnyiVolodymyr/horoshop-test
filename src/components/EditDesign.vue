<template>
  <div class="add-page">
    <router-link to="/" class="add-page__back">
      <img src="@/assets/svg/back-arrow.svg" />
    </router-link>
    <section class="fields">
      <div class="fields-header">
        <div class="fields__id">
          <Input placeholder="###" :value="getCurrentDesign.id" :update-value="updateIdValue" />
          <span class="fields__icon">№</span>
        </div>
        <div class="fields__title">
          <Input
            placeholder="Design Title"
            :value="getCurrentDesign.name"
            :update-value="updateTitleValue"
          />
        </div>
      </div>
      <div class="fields-images">
        <ManagePictures :images="getCurrentDesign.images" />
      </div>
      <div class="fields-footer">
        <div class="fields__link">
          <Input
            placeholder="https://design###.horoshop.ua/"
            :value="getCurrentDesign.link"
            :update-value="updateLinkValue"
          />
          <img class="fields__icon" src="@/assets/svg/link.svg" />
        </div>
      </div>
    </section>
    <div class="add-page__btns">
      <DeleteBtn @click.native="deleteDesign" />
      <PrimaryBtn title="Сохранить и закрыть" @click.native="addNewDesign" />
      <!-- saveDesign -->
    </div>
  </div>
</template>
<script>
import DeleteBtn from "./buttons/DeleteBtn";
import PrimaryBtn from "./buttons/PrimaryBtn";
import Input from "./Input";
import ManagePictures from "./ManagePictures";
export default {
  components: {
    PrimaryBtn,
    DeleteBtn,
    Input,
    ManagePictures
  },
  data() {
    return {};
  },
  mounted() {
    const _id = this.$route.params.id;
    if (_id) {
      this.$store.dispatch("getCurrentDesign", _id);
    }
  },
  computed: {
    getCurrentDesign() {
      return this.$store.state.currentDesign;
    }
  },
  methods: {
    updateIdValue(value) {
      this.$store.dispatch("updateCurrentValue", { name: "id", value: value });
    },
    updateTitleValue(value) {
      this.$store.dispatch("updateCurrentValue", {
        name: "name",
        value: value
      });
    },
    updateLinkValue(value) {
      this.$store.dispatch("updateCurrentValue", {
        name: "link",
        value: value
      });
    },
    saveDesign() {
      this.$store.dispatch("sendData", this.getCurrentDesign);
      this.$router.push("/");
    },
    deleteDesign() {
      this.$store.dispatch("deleteDesign", this.getCurrentDesign._id);
      this.$router.push("/");
    },
    addNewDesign() {
      this.$store.dispatch("addDesign", this.getCurrentDesign);
      this.$router.push("/");
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