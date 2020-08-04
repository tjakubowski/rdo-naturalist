<template>
  <v-combobox
    v-model="categoryFilters"
    :items="categories"
    chips
    clearable
    deletable-chips
    hide-selected
    hide-details
    multiple
    prepend-icon="mdi-filter-variant"
    item-value="id"
    solo
    :return-object="false"
  >
    <template v-slot:item="{ item }">
      {{ $i18n.t(`categories.${item.id}`) }}
    </template>
    <template v-slot:selection="data">
      <v-chip
        :key="data.item"
        close
        v-bind="data.attrs"
        :input-value="data.selected"
        :disabled="data.disabled"
        @click:close="data.parent.selectItem(data.item)"
      >
        {{ $i18n.t(`categories.${data.item}`) }}
      </v-chip>
    </template>
  </v-combobox>
</template>

<script>
export default {
  name: 'TheCategoryFilters',
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
