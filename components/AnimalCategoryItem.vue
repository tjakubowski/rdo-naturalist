<template>
  <div>
    {{ $t(`animals.${animal.name}`) }}, {{ animal.samples }},
    {{ animal.stamped }}
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
