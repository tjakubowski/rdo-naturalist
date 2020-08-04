<template>
  <div>
    <v-row>
      <v-col class="text-right">
        <v-btn color="error" text @click="resetCategoriesProgress">{{
          $i18n.t('category.reset_progress_all')
        }}</v-btn></v-col
      >
    </v-row>
    <v-row
      ><v-col><category-filters :categories="categories" /></v-col
    ></v-row>
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
import CategoryFilters from '@/components/filters/CategoryFilters';
import AnimalCategory from '~/components/AnimalCategory';

export default {
  components: { CategoryFilters, AnimalCategory },
  computed: {
    ...mapState('filters', ['animalNameFilter']),
    ...mapGetters({
      categories: 'categories/getCategories',
      animalNameFilter: 'filters/getAnimalNameFilter',
      categoryFilters: 'filters/getCategoryFilters',
    }),
  },
  methods: {
    ...mapActions('categories', ['resetCategoriesProgress']),
    animals(category) {
      return this.$store.getters['animals/getAnimalsWithCategory'](category);
    },
    animalsFiltered(category) {
      return this.animals(category)
        .filter((animal) =>
          this.$i18n
            .t(`animals.${animal.id}`)
            .toLowerCase()
            .includes(this.animalNameFilter.toLowerCase())
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
