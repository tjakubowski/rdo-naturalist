<template>
  <v-app dark>
    <v-app-bar fixed app>
      <h4 class="d-none d-sm-inline mr-3">RDO Animal Guide</h4>
      <animal-name-filter />

      <dropdown-button
        :items="availablePlatforms"
        prepend-item-translation="platforms"
        btn-class="ml-3"
        emit-attribute="id"
        icon-attribute="icon"
        tooltip-id="settings.change_platform"
        close-on-content-click
        @click="setPlatform"
      >
        <v-icon small>{{ platform.icon }}</v-icon>
      </dropdown-button>

      <dropdown-button
        :items="languages"
        emit-attribute="code"
        id-attribute="code"
        translation-attribute="name"
        tooltip-id="settings.change_language"
        close-on-content-click
        @click="$i18n.setLocale"
      >
        {{ currentLanguge }}
      </dropdown-button>

      <dropdown-button
        icon
        close-on-content-click
        tooltip-id="category.options"
        :items="options"
        icon-attribute="icon"
        method-attribute="method"
      >
        <v-icon>mdi-dots-vertical</v-icon>
      </dropdown-button>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer>
      <v-row no-gutters>
        <v-col class="text-center">
          <v-btn
            mx-3
            depressed
            text
            href="https://github.com/tjakubowski/rdo-naturalist"
          >
            <v-icon left>mdi-github</v-icon> github
          </v-btn>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import DropdownButton from '@/components/common/DropdownButton';
import { mapActions, mapGetters } from 'vuex';
import AnimalNameFilter from '@/components/filters/AnimalNameFilter';

export default {
  components: { DropdownButton, AnimalNameFilter },
  data() {
    return {
      options: [
        {
          id: 'category.complete_progress_all',
          method: this.completeCategoriesProgress,
          icon: 'mdi-check-all',
        },
        {
          id: 'category.reset_progress_all',
          method: this.resetCategoriesProgress,
          icon: 'mdi-restore',
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      platform: 'platform/getPlatform',
      availablePlatforms: 'platform/getAvailablePlatforms',
    }),
    currentLanguge() {
      return this.$i18n.locale;
    },
    languages() {
      return this.$i18n.locales;
    },
  },
  methods: {
    ...mapActions('categories', [
      'completeCategoriesProgress',
      'resetCategoriesProgress',
    ]),
    ...mapActions('platform', ['setPlatform']),
  },
};
</script>
