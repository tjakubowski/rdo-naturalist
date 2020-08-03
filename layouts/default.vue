<template>
  <v-app dark>
    <v-app-bar fixed app>
      <the-search class="mr-3" />

      <dropdown-button
        :items="availablePlatforms"
        prepend-item-translation="platforms"
        icon-attribute="icon"
        tooltip-id="settings.change_platform"
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
        @click="$i18n.setLocale"
      >
        {{ currentLanguge }}
        <template v-slot:item="{ item }">
          {{ item.name }}
        </template>
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
import DropdownButton from '@/components/DropdownButton';
import { mapActions, mapGetters } from 'vuex';
import TheSearch from '~/components/TheSearch';

export default {
  components: { DropdownButton, TheSearch },
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
