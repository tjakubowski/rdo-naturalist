<template>
  <v-menu bottom offset-y>
    <template v-slot:activator="{ on: menu, attrs }">
      <v-tooltip bottom :open-delay="openDelay">
        <template v-slot:activator="{ on: tooltip }">
          <v-btn depressed v-bind="attrs" v-on="{ ...tooltip, ...menu }"
            ><slot></slot
          ></v-btn>
        </template>
        <span>{{ $i18n.t(tooltipId) }}</span>
      </v-tooltip>
    </template>

    <v-list nav dense>
      <v-list-item
        v-for="item in items"
        :key="item[idAttribute]"
        @click="$emit('click', item[emitAttribute])"
      >
        <v-list-item-icon v-if="iconAttribute !== null">
          <v-icon small v-text="item[iconAttribute]" />
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            <slot name="item" :item="item">
              {{ $i18n.t(getItemTranslationId(item[translationAttribute])) }}
            </slot>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'DropdownButton',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    tooltipId: {
      type: String,
      default: '',
    },
    prependItemTranslation: {
      type: String,
      default: null,
    },
    idAttribute: {
      type: String,
      default: 'id',
    },
    emitAttribute: {
      type: String,
      default: 'id',
    },
    translationAttribute: {
      type: String,
      default: 'id',
    },
    iconAttribute: {
      type: String,
      default: null,
    },
    openDelay: {
      type: Number,
      default: 500,
    },
  },
  computed: {
    ...mapGetters({
      platform: 'platform/getPlatform',
      availablePlatforms: 'platform/getAvailablePlatforms',
    }),
  },
  methods: {
    ...mapActions('platform', ['setPlatform']),
    getItemTranslationId(attribute) {
      return (
        (this.prependItemTranslation !== null
          ? `${this.prependItemTranslation}.`
          : '') + attribute
      );
    },
  },
};
</script>
