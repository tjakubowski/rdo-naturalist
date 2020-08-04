<template>
  <v-row class="animal-category">
    <v-col cols="12" class="d-flex align-center">
      <h2 class="animal-category__header">
        {{ $t(`categories.${category.id}`) }}
      </h2>

      <v-chip class="mx-5" small>
        {{ animalsStampedCount }} / {{ animalsCount }}
      </v-chip>

      <v-spacer />

      <v-btn
        class="mr-3"
        color="success"
        :disabled="!isCompleted"
        @click="tradeInCategory(category.id)"
        >{{ $i18n.t('category.trade_in') }}</v-btn
      >

      <animal-category-options
        @reset-progress="resetCategoryProgress(category.id)"
        @complete-progress="completeCategoryProgress(category.id)"
      />
    </v-col>

    <animal-category-item
      v-for="animal in animals"
      v-show="animalsFiltered.includes(animal.id)"
      :key="animal.id"
      :animal="animal"
    />
  </v-row>
</template>

<script>
import { mapActions } from 'vuex';
import AnimalCategoryOptions from '@/components/AnimalCategoryOptions';
import AnimalCategoryItem from '~/components/AnimalCategoryItem';
export default {
  name: 'AnimalCategory',
  components: { AnimalCategoryOptions, AnimalCategoryItem },
  props: {
    category: {
      type: Object,
      required: true,
    },
    animals: {
      type: Array,
      required: true,
    },
    animalsFiltered: {
      type: Array,
      required: true,
    },
  },
  computed: {
    isCompleted() {
      return this.animals.every((animal) => animal.stamped);
    },
    animalsCount() {
      return this.animals.length;
    },
    animalsStampedCount() {
      return this.animals.filter((animal) => animal.stamped).length;
    },
  },
  methods: {
    ...mapActions('categories', [
      'tradeInCategory',
      'resetCategoryProgress',
      'completeCategoryProgress',
    ]),
  },
};
</script>

<style lang="scss">
.animal-category {
  &__header {
    display: inline-block;
  }
}
</style>
