<template>
  <v-app dark>
    <v-app-bar fixed app>
      <animal-name-filter class="mr-3" />

      <dropdown-button
        :items="availablePlatforms"
        prepend-item-translation="platforms"
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
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import DropdownButton from '@/components/common/DropdownButton';
import { mapActions, mapGetters } from 'vuex';
import AnimalNameFilter from '@/components/filters/AnimalNameFilter';

export default {
  components: { DropdownButton, AnimalNameFilter },
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
    ...mapActions('platform', ['setPlatform']),
  },
};
</script>
