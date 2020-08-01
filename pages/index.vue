<template>
  <div>
    <div v-for="animal in animals" :key="animal.id">
      <div>{{ animal.name | translate }}</div>
      <div>{{ animal.category }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      animals: 'animals/getAnimals',
    }),
  },
};
</script>
