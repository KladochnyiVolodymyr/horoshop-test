<template>
  <router-link :to="editLink" class="card">
    <div class="card__img" :style="{'background-image': `url(${img})`}"></div>
    <div class="card-data">
      <div class="card-data__id">{{id}}</div>
      <div class="card-data__title">{{title}}</div>
    </div>
  </router-link>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    id: {
      type: String
    },
    img: {
      type: String
    }
  },
  computed: {
    editLink() {
      return `/edit/${this.id}`;
    }
  }
};
</script>
<style lang="scss" scoped>
.card {
  &__img {
    margin-bottom: 16px;
    width: 300px;
    height: 400px;
    background-size: cover;
    background-repeat: no-repeat;
  }
  &-data {
    display: flex;
    &__id {
      background: #fff;
      border-radius: 8px;
      font-size: 11px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px 8px;
      margin-right: 8px;
    }
    &__title {
      color: #fff;
    }
  }
}
</style>