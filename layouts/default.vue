<template>
  <v-app dark>
    <v-app-bar fixed app>
      <the-search class="mr-3" />
      <platform-switcher />
      <language-selector />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import PlatformSwitcher from '@/components/PlatformSwitcher';
import TheSearch from '~/components/TheSearch';
import LanguageSelector from '~/components/LanguageSelector';

export default {
  components: { PlatformSwitcher, LanguageSelector, TheSearch },
};
</script>
