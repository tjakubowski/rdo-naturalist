<template>
  <v-menu bottom offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn dark v-bind="attrs" depressed v-on="on">
        {{ currentLanguge }}
      </v-btn>
    </template>

    <v-list nav dense>
      <v-list-item
        v-for="language in languages"
        :key="language.code"
        @click="$i18n.setLocale(language.code)"
      >
        <v-list-item-title>{{ language.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'LanguageSelector',
  computed: {
    currentLanguge() {
      return this.$i18n.locale;
    },
    languages() {
      return this.$i18n.locales;
    },
  },
};
</script>

<style scoped></style>
