<template>
  <div>
    <h2>{{ $t(`categories.${category.name}`) }}</h2>

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
    animals: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss"></style>
