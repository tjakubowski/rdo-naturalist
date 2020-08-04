<template>
  <dropdown-button
    icon
    close-on-content-click
    tooltip-id="category.options"
    :items="categoryOptions"
    method-attribute="method"
  >
    <v-icon>mdi-dots-vertical</v-icon>
  </dropdown-button>
</template>

<script>
import DropdownButton from '@/components/common/DropdownButton';
export default {
  name: 'AnimalCategoryOptions',
  components: { DropdownButton },
  data() {
    return {
      categoryOptions: [
        {
          id: 'category.complete_progress',
          method: this.completeCategoryProgress,
        },
        { id: 'category.reset_progress', method: this.resetCategoryProgress },
      ],
    };
  },
  methods: {
    resetCategoryProgress() {
      this.$emit('reset-progress');
    },
    completeCategoryProgress() {
      this.$emit('complete-progress');
    },
  },
};
</script>

<style scoped></style>
