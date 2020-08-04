<template>
  <v-text-field
    v-model="animalNameFilter"
    rounded
    dense
    hide-details
    filled
    prepend-inner-icon="mdi-magnify"
    clearable
    :placeholder="$i18n.t('filters.animal_filter')"
  />
</template>

<script>
import { mapActions } from 'vuex';
import debounce from 'lodash.debounce';
export default {
  name: 'AnimalNameFilter',
  computed: {
    animalNameFilter: {
      get() {
        return this.$store.state.filters.animalNameFilter;
      },
      set: debounce(function (value) {
        this.setAnimalNameFilter(value);
      }, 300),
    },
  },
  methods: {
    ...mapActions('filters', ['setAnimalNameFilter']),
  },
};
</script>
