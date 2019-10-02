<template>
  <router-link :to="editLink" class="card">
    <img class="card__img" :src="img" />
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
      width: 33px;
      margin-right: 8px;
    }
    &__title {
      color: #fff;
    }
  }
}
</style>