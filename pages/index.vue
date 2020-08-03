<template>
  <div>
    <animal-category
      v-for="category in categories"
      v-show="animalsFiltered(category.id).length > 0"
      :key="category.id"
      :category="category"
      :animals="animals(category.id)"
      :animals-filtered="animalsFiltered(category.id)"
    />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import AnimalCategory from '~/components/AnimalCategory';

export default {
  components: { AnimalCategory },
  computed: {
    ...mapState('search', ['searchText']),
    ...mapGetters({
      categories: 'categories/getCategories',
    }),
  },
  methods: {
    animals(category) {
      return this.$store.getters['animals/getAnimalsWithCategory'](category);
    },
    animalsFiltered(category) {
      return this.animals(category).filter((animal) =>
        this.$i18n
          .t(`animals.${animal.id}`)
          .toLowerCase()
          .includes(this.searchText.toLowerCase())
      );
    },
  },
};
</script>
