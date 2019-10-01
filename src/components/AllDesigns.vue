<template>
  <div class="designs">
    <div class="designs__header">
      <h1 class="designs__title">Все дизайны</h1>
      <PositiveBtn title="Добавити дизайн" />
    </div>
    <div class="designs__list">
      <DesignsCard
        v-for="card in designsCards"
        :key="card.id"
        :title="card.title"
        :id="card.id"
        :img="card.img"
      />
    </div>
  </div>
</template>
<script>
import PositiveBtn from "./PositiveBtn";
import DesignsCard from "./DesignsCard";

export default {
  name: "app",
  components: {
    PositiveBtn,
    DesignsCard
  },
  data() {
    return {
      designsCards: [
        {
          id: 105,
          title: "Ostrov",
          img: "card-img"
        },
        {
          id: 104,
          title: "Ostrov",
          img: "card-img"
        },
        {
          id: 103,
          title: "Ostrov",
          img: "card-img"
        },
        {
          id: 102,
          title: "Ostrov",
          img: "card-img"
        },
        {
          id: 101,
          title: "Ostrov",
          img: "card-img"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.designs {
  background: #2c3d39;
  padding: 24px 32px;
  &__title {
    font-size: 24px;
    color: #fff;
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  &__list {
    display: grid;
    grid-template-columns: 300px 300px 300px 300px;
    grid-column-gap: 20px;
    grid-row-gap: 40px;
  }
}
</style>