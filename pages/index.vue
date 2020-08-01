<template>
  <div>
    <AnimalCategory
      v-for="category in categories"
      :key="category.id"
      :category="category"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AnimalCategory from '~/components/AnimalCategory';

export default {
  components: { AnimalCategory },
  computed: {
    ...mapGetters({
      categories: 'animals/getCategories',
    }),
  },
};
</script>
