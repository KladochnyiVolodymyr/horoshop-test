<template>
  <div class="add-picture">
    <div class="add-picture__empty" v-if="isEmpty">
      <img src="@/assets/svg/empty-img.svg" />
    </div>
    <div class="add-picture__images" v-else>
      <div class="picture-item" v-for="img in images" :key="img.id">
        <img class="picture-item__img" :src="img.src" />
      </div>
      <div class="add-picture__new">
        <input type="file" @change="addNewImg" id="file" />
        <label for="file">
          <img src="@/assets/svg/add.svg" />
        </label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    images: {
      type: Array
    }
  },
  computed: {
    isEmpty() {
      return !this.images.length;
    }
  },
  methods: {
    addNewImg(event) {
      let file = event.target.files[0];
      const _PREVIEW_URL = URL.createObjectURL(file);
      this.$store.dispatch("addNewImg", _PREVIEW_URL);
    }
  }
};
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
  &__images {
    display: flex;
  }
  &__new {
    input {
      width: 0px;
      height: 0px;
      position: absolute;
    }
    label {
      width: 120px;
      height: 120px;
      border: 2px solid rgba(0, 0, 0, 0.1);
      border-style: dotted;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
.picture-item {
  margin-right: 8px;
  &__img {
    max-width: 120px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    border-radius: 3px;
    &:hover {
      box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
      cursor: pointer;
    }
  }
}
</style>