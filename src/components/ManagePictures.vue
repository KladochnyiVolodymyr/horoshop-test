<template>
  <div class="add-picture">
    <div class="add-picture__images">
      <div class="picture-item" v-for="img in images" :key="img.id">
        <img class="picture-item__img" :src="img.src" />
        <div class="picture-item__delete" @click="deleteImg(img.id)">
          <img src="@/assets/svg/delete.svg" />
        </div>
      </div>
      <div class="add-picture__new">
        <input type="file" @change="addNewImg" id="file" />
        <label for="file">
          <div class="add-picture__empty" v-if="isEmpty">
            <img src="@/assets/svg/empty-img.svg" />
          </div>
          <div class="add-picture__not-empty" v-else>
            <img src="@/assets/svg/add.svg" />
          </div>
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
    },
    deleteImg(id) {
      this.$store.dispatch("deleteImg", id);
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
  &__not-empty {
    width: 120px;
    height: 120px;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-style: dotted;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__images {
    display: flex;
  }
  &__new {
    width: 100%;
    input {
      width: 0px;
      height: 0px;
      position: absolute;
    }
  }
}
.picture-item {
  margin-right: 8px;
  position: relative;
  height: 100%;
  &:hover {
    cursor: pointer;
    .picture-item__delete {
      display: flex;
    }
    .picture-item__img {
      box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
      opacity: 0.3;
    }
  }
  &__img {
    max-width: 120px;
    border-radius: 3px;
  }
  &__delete {
    width: 24px;
    height: 24px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    right: 4px;
    bottom: 8px;
    display: none;
  }
}
</style>