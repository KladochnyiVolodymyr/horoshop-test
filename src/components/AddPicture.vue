<template>
  <div class="add-picture">
    <div class="add-picture__empty" v-if="isEmpty">
      <img src="@/assets/svg/empty-img.svg" />
    </div>
    <div v-else>
      <img v-for="img in images" :key="img.id" :src="img.src" />
      <input type="file" @change="addNewImg" />
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
    addNewImg() {
      console.log(this.files);
      /* let file = this.files[0];
      const _PREVIEW_URL = URL.createObjectURL(file);
      console.log(_PREVIEW_URL); */
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
}
</style>