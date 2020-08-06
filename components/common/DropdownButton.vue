<template>
  <v-menu bottom offset-y :close-on-content-click="closeOnContentClick">
    <template v-slot:activator="{ on: menu, attrs }">
      <v-tooltip bottom :open-delay="openDelay">
        <template v-slot:activator="{ on: tooltip }">
          <v-btn
            :icon="icon"
            :text="text"
            :color="color"
            :class="btnClass"
            depressed
            v-bind="attrs"
            v-on="{ ...tooltip, ...menu }"
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
        @click="onClick(item)"
      >
        <v-list-item-icon v-if="iconAttribute !== null">
          <v-icon small v-text="item[iconAttribute]" />
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            {{ $i18n.t(getItemTranslationId(item[translationAttribute])) }}
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
    btnClass: {
      type: [Array, String, Object],
      default: null,
    },
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
      default: null,
    },
    methodAttribute: {
      type: String,
      default: null,
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
    closeOnContentClick: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: false,
    },
    text: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: null,
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
      return [this.prependItemTranslation, attribute].filter(Boolean).join('.');
    },
    onClick(item) {
      if (!!this.emitAttribute && !!item[this.emitAttribute])
        this.$emit('click', item[this.emitAttribute]);
      if (!!this.methodAttribute && !!item[this.methodAttribute])
        item[this.methodAttribute]();
    },
  },
};
</script>
