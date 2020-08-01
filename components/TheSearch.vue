<template>
  <v-text-field v-model="searchText" rounded dense hide-details filled />
</template>

<script>
import { mapActions } from 'vuex';
import debounce from 'lodash.debounce';
export default {
  name: 'TheSearch',
  props: {
    debounceTime: {
      type: Number,
      default: 500,
    },
  },
  computed: {
    searchText: {
      get() {
        return this.$store.state.search.searchText;
      },
      set: debounce(function (value) {
        this.setSearchText(value);
      }, this.debounceTime),
    },
  },
  methods: {
    ...mapActions('search', ['setSearchText']),
  },
};
</script>
