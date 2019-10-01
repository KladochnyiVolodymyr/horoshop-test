<template>
  <div class="card">
    <img class="card__img" :src="require(`../assets/img/${img}.png`)" />
    <div class="card-data">
      <div class="card-data__id">{{id}}</div>
      <div class="card-data__title">{{title}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    id: {
      type: Number
    },
    img: {
      type: String
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