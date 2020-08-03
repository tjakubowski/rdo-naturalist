<template>
  <v-col cols="12" sm="6" md="4" lg="3" xl="2">
    <v-card :class="computedClasses">
      <v-img
        :src="`/images/animals/${animal.id}.png`"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      >
        <v-card-title
          v-if="!animal.isLocked"
          v-text="$t(`animals.${animal.id}`)"
        ></v-card-title>
      </v-img>

      <v-card-actions>
        <tooltip-button
          :disabled="animal.samples < 1"
          tooltip="decrease_samples"
          @click="decreaseSamples(animal.id)"
        >
          <v-icon small>mdi-minus</v-icon>
        </tooltip-button>

        <v-chip class="mx-2" small>
          {{ animal.samples }}
        </v-chip>

        <tooltip-button
          tooltip="increase_samples"
          @click="increaseSamples(animal.id)"
        >
          <v-icon small>mdi-plus</v-icon>
        </tooltip-button>

        <v-spacer></v-spacer>

        <tooltip-button
          v-if="!animal.stamped"
          :disabled="!canBeStamped"
          tooltip="stamp_sample"
          @click="stampSample(animal.id)"
        >
          <v-icon small>mdi-stamper</v-icon>
        </tooltip-button>
        <tooltip-button
          v-else
          tooltip="revert_stamp"
          @click="revertStamp(animal.id)"
        >
          <v-icon small>mdi-restore</v-icon>
        </tooltip-button>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import { mapActions } from 'vuex';
import TooltipButton from '~/components/TooltipButton';

export default {
  name: 'AnimalCategoryItem',
  components: { TooltipButton },
  props: {
    animal: {
      type: Object,
      required: true,
    },
  },
  computed: {
    canBeStamped() {
      return !this.animal.stamped && this.animal.samples > 0;
    },
    computedClasses() {
      return {
        'animal-category__item': true,
        'animal-category__item--muted': this.animal.stamped,
      };
    },
  },
  methods: {
    ...mapActions('animals', [
      'decreaseSamples',
      'increaseSamples',
      'stampSample',
      'revertStamp',
    ]),
  },
};
</script>

<style lang="scss">
.animal-category__item {
  will-change: opacity;
  transition: opacity 0.2s;

  &--muted {
    opacity: 0.5;
  }
}
</style>
