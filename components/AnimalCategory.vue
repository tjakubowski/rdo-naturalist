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

      <dropdown-button
        icon
        clone-on-content-click
        tooltip-id="category.more"
        :items="categoryOptions"
      >
        <v-icon>mdi-dots-vertical</v-icon>
        <template v-slot:item="{ item }">
          <div @click="item.method(category.id)">{{ $i18n.t(item.id) }}</div>
        </template>
      </dropdown-button>
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
import DropdownButton from '@/components/DropdownButton';
import AnimalCategoryItem from '~/components/AnimalCategoryItem';
export default {
  name: 'AnimalCategory',
  components: { DropdownButton, AnimalCategoryItem },
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
  data() {
    return {
      categoryOptions: [
        { id: 'category.reset_progress', method: this.resetCategory },
      ],
    };
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
    ...mapActions('categories', ['tradeInCategory', 'resetCategory']),
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
