<template>
  <div>
    <v-btn color="error" class="mx-3" outlined @click="resetCategories">{{
      $i18n.t('reset_categories')
    }}</v-btn>
    <the-category-filters :categories="categories" />
    <animal-category
      v-for="category in categories"
      v-show="
        animalsFiltered(category.id).length > 0 &&
        !isCategoryFiltered(category.id)
      "
      :key="category.id"
      :category="category"
      :animals="animals(category.id)"
      :animals-filtered="animalsFiltered(category.id)"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import TheCategoryFilters from '@/components/TheCategoryFilters';
import AnimalCategory from '~/components/AnimalCategory';

export default {
  components: { TheCategoryFilters, AnimalCategory },
  computed: {
    ...mapState('filters', ['searchText']),
    ...mapGetters({
      categories: 'categories/getCategories',
      searchText: 'filters/getSearchText',
      categoryFilters: 'filters/getCategoryFilters',
    }),
  },
  methods: {
    ...mapActions('categories', ['resetCategories']),
    animals(category) {
      return this.$store.getters['animals/getAnimalsWithCategory'](category);
    },
    animalsFiltered(category) {
      return this.animals(category)
        .filter((animal) =>
          this.$i18n
            .t(`animals.${animal.id}`)
            .toLowerCase()
            .includes(this.searchText.toLowerCase())
        )
        .map((animal) => animal.id);
    },
    isCategoryFiltered(category) {
      return !(
        this.categoryFilters === null ||
        this.categoryFilters.length === 0 ||
        this.categoryFilters.includes(category)
      );
    },
  },
};
</script>
