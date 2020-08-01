<template>
  <v-app dark>
    <v-app-bar fixed app>
      <the-search />
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
import TheSearch from '~/components/TheSearch';
import LanguageSelector from '~/components/LanguageSelector';

export default {
  components: { LanguageSelector, TheSearch },
};
</script>
