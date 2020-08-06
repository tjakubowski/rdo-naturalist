<template>
  <div>
    <v-chip-group
      v-model="categoryFilters"
      multiple
      show-arrows
      active-class="success--text"
    >
      <v-chip
        v-for="category in categories"
        :key="category.id"
        outlined
        :value="category.id"
      >
        {{ $i18n.t(`categories.${category.id}`) }}
      </v-chip>
    </v-chip-group>
  </div>
</template>

<script>
export default {
  name: 'CategoryFilters',
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  computed: {
    categoryFilters: {
      get() {
        return this.$store.getters['filters/getCategoryFilters'];
      },
      set(categories) {
        this.$store.dispatch('filters/setCategoryFilters', categories);
      },
    },
  },
};
</script>
