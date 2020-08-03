<template>
  <v-menu bottom offset-y>
    <template v-slot:activator="{ on: menu, attrs }">
      <v-tooltip bottom>
        <template v-slot:activator="{ on: tooltip }">
          <v-btn icon dark v-bind="attrs" v-on="{ ...tooltip, ...menu }"
            ><v-icon small>{{ platform.icon }}</v-icon></v-btn
          >
        </template>
        <span>{{ $i18n.t('platform_switch') }}</span>
      </v-tooltip>
    </template>

    <v-list nav dense>
      <v-list-item
        v-for="platform in availablePlatforms"
        :key="platform.id"
        @click="setPlatform(platform.id)"
      >
        <v-list-item-title>{{
          $i18n.t(`platforms.${platform.id}`)
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'PlatformSwitcher',
  computed: {
    ...mapGetters({
      platform: 'platform/getPlatform',
      availablePlatforms: 'platform/getAvailablePlatforms',
    }),
  },
  methods: {
    ...mapActions('platform', ['setPlatform']),
  },
};
</script>
