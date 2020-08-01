<template>
  <div>
    <h2>{{ category.name | translate }}</h2>

    <AnimalCategoryItem
      v-for="animal in animals"
      :key="animal.id"
      :animal="animal"
    />
  </div>
</template>

<script>
import AnimalCategoryItem from '~/components/AnimalCategoryItem';
export default {
  name: 'AnimalCategory',
  components: { AnimalCategoryItem },
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  computed: {
    animals() {
      return this.$store.getters['animals/getAnimalsWithCategory'](
        this.category.id
      );
    },
  },
};
</script>

<style lang="scss"></style>
