<template>
  <div>
    {{ animal.name | translate }}
  </div>
</template>

<script>
export default {
  name: 'AnimalCategoryItem',
  props: {
    animal: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss"></style>
