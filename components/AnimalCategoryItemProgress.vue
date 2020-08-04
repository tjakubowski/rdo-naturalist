<template>
  <v-menu right top :close-on-content-click="false">
    <template v-slot:activator="{ on: menu, attrs }">
      <v-tooltip bottom open-delay="350">
        <template v-slot:activator="{ on: tooltip }">
          <v-btn icon v-bind="attrs" v-on="{ ...tooltip, ...menu }"
            ><v-icon small>mdi-dots-vertical</v-icon></v-btn
          >
        </template>
        <span>{{ $i18n.t('animal.progress') }}</span>
      </v-tooltip>
    </template>

    <v-list dense nav>
      <v-list-item-group v-model="progressValue" multiple>
        <v-list-item
          v-for="(value, statName) in progress"
          :key="statName"
          color="success"
          :value="statName"
        >
          <template v-slot:default="{ active, toggle }">
            <v-list-item-action>
              <v-checkbox
                :input-value="active"
                :true-value="statName"
                color="success"
                @click.stop="toggle"
              />
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                v-text="$i18n.t(`animal_stats.${statName}`)"
              ></v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'AnimalCategoryItemProgress',
  props: {
    progress: {
      type: Object,
      required: true,
    },
  },
  computed: {
    progressValue: {
      get() {
        return Object.keys(this.progress).filter(
          (statName) => this.progress[statName]
        );
      },
      set(newProgress) {
        this.$emit('change', newProgress);
      },
    },
  },
};
</script>
