<template>
  <div>
    <v-row>
      <v-col>
        <category-filters :categories="categories" />
      </v-col>
    </v-row>

    <animal-category
      v-for="category in categories"
      v-show="animalsInCategoryFilteredList(category.id).length > 0"
      :key="category.id"
      :category="category"
      :animals="animalsInCategory(category.id)"
      :animals-filtered="animalsInCategoryFilteredList(category.id)"
    />

    <v-row v-show="animalsFiltered.length === 0">
      <v-col class="text-center my-5">
        <p>{{ $i18n.t('filters.no_animals') }}</p>
        <v-btn depressed @click="resetFilters">
          {{ $i18n.t('filters.reset_filters') }}
        </v-btn>
      </v-col>
    </v-row>
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
      animals: 'animals/getAnimals',
      categories: 'categories/getCategories',
      animalNameFilter: 'filters/getAnimalNameFilter',
      categoryFilters: 'filters/getCategoryFilters',
    }),
    animalsFiltered() {
      return this.animals.filter((animal) => {
        if (
          this.categoryFilters.length > 0 &&
          !this.categoryFilters.includes(animal.category)
        )
          return false;
        return this.$i18n
          .t(`animals.${animal.id}`)
          .toLowerCase()
          .includes(this.animalNameFilter.toLowerCase());
      });
    },
  },
  methods: {
    ...mapActions('filters', ['resetFilters']),
    animalsInCategory(category) {
      return this.$store.getters['animals/getAnimalsWithCategory'](category);
    },
    animalsInCategoryFilteredList(category) {
      return this.animalsFiltered
        .filter((animal) => animal.category === category)
        .map((animal) => animal.id);
    },
  },
};
</script>
