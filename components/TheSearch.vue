<template>
  <v-text-field
    v-model="searchText"
    rounded
    dense
    hide-details
    filled
    prepend-inner-icon="mdi-magnify"
    clearable
    :placeholder="$i18n.t('filters.search_animals')"
  />
</template>

<script>
import { mapActions } from 'vuex';
import debounce from 'lodash.debounce';
export default {
  name: 'TheSearch',
  computed: {
    searchText: {
      get() {
        return this.$store.state.filters.searchText;
      },
      set: debounce(function (value) {
        this.setSearchText(value);
      }, 300),
    },
  },
  methods: {
    ...mapActions('filters', ['setSearchText']),
  },
};
</script>
