<template>
  <v-col cols="12" sm="6" md="4" lg="3" xl="2">
    <v-card :class="computedClasses">
      <v-img
        :src="`/images/animals/${animal.id}.png`"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      >
        <v-card-title class="animal-category__item-title">
          <span v-if="!animal.isLocked">{{ $t(`animals.${animal.id}`) }}</span>
          <v-icon v-else>mdi-lock</v-icon>
        </v-card-title>
      </v-img>

      <v-progress-linear :value="progressPercentage" height="3" color="white" />

      <v-card-actions>
        <tooltip-button
          :disabled="animal.samples < 1"
          tooltip="animal.decrease_samples"
          @click="decreaseSamples(animal.id)"
        >
          <v-icon small>mdi-minus</v-icon>
        </tooltip-button>

        <v-chip class="mx-2" small>
          {{ animal.samples }}
        </v-chip>

        <tooltip-button
          tooltip="animal.increase_samples"
          @click="increaseSamples(animal.id)"
        >
          <v-icon small>mdi-plus</v-icon>
        </tooltip-button>

        <v-spacer></v-spacer>

        <tooltip-button
          v-if="!animal.stamped"
          :disabled="!canBeStamped"
          tooltip="animal.mark_as_stamped"
          @click="stampSample(animal.id)"
        >
          <v-icon small>mdi-stamper</v-icon>
        </tooltip-button>

        <tooltip-button
          v-else
          tooltip="animal.undo_stamp"
          @click="revertStamp(animal.id)"
        >
          <v-icon small>mdi-restore</v-icon>
        </tooltip-button>

        <animal-category-item-progress
          :progress="animal.progress"
          @change="setProgress({ id: animal.id, progress: $event })"
        />
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import { mapActions } from 'vuex';
import AnimalCategoryItemProgress from '@/components/AnimalCategoryItemProgress';
import TooltipButton from '~/components/TooltipButton';

export default {
  name: 'AnimalCategoryItem',
  components: { AnimalCategoryItemProgress, TooltipButton },
  props: {
    animal: {
      type: Object,
      required: true,
    },
  },
  computed: {
    progressStatsCompletedCount() {
      return Object.values(this.animal.progress).reduce(
        (previous, current) => previous + current,
        0
      );
    },
    progressStatsCount() {
      return Object.keys(this.animal.progress).length;
    },
    progressPercentage() {
      return (this.progressStatsCompletedCount / this.progressStatsCount) * 100;
    },
    canBeStamped() {
      return (
        !this.animal.stamped && this.animal.samples > 0 && !this.animal.isLocked
      );
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
      'setProgress',
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
.animal-category__item-title {
  word-break: normal;
  word-break: break-word;
}
</style>
