<template>
  <div class="designs">
    <div class="designs__header">
      <h1 class="designs__title">Все дизайны</h1>
      <router-link to="/add" class="designs__add-btn">
        <PrimaryBtn title="Добавити дизайн" @click.native="cleanCurrentDesign" />
      </router-link>
    </div>
    <section class="designs__list">
      <DesignsCard
        v-for="card in getDataTable"
        :key="card.id"
        :title="card.name"
        :id="card.id"
        :img="card.images[0].src"
      />
    </section>
  </div>
</template>
<script>
import PrimaryBtn from "./buttons/PrimaryBtn";
import DesignsCard from "./DesignsCard";

export default {
  name: "app",
  components: {
    PrimaryBtn,
    DesignsCard
  },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getData");
  },
  computed: {
    getDataTable() {
      return this.$store.state.designsData;
    }
  },
  methods: {
    cleanCurrentDesign() {
      this.$store.dispatch("cleanCurrentDesign");
    }
  }
};
</script>
<style lang="scss" scoped>
.designs {
  background: #2c3d39;
  padding: 24px 32px;
  min-height: 100vh;
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
    justify-content: center;
    @media (max-width: 1324px) {
      grid-template-columns: 300px 300px 300px;
    }
    @media (max-width: 1024px) {
      grid-template-columns: 300px 300px;
    }
    @media (max-width: 700px) {
      grid-template-columns: 300px;
    }
  }
}
</style>