<template>
  <v-app dark>
    <v-app-bar fixed app>
      <the-search />
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

export default {
  components: { TheSearch },
};
</script>
