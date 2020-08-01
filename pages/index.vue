<template>
  <div>
    <AnimalCategory
      v-for="category in categories"
      :key="category.id"
      :category="category"
      :animals="animals(category.id)"
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
      categories: 'categories/getCategories',
    }),
  },
  methods: {
    animals(category) {
      return this.$store.getters['animals/getAnimalsWithCategory'](category);
    },
  },
};
</script>
