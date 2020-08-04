<template>
  <v-tooltip bottom :open-delay="openDelay">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        icon
        v-bind="attrs"
        :disabled="disabled"
        v-on="on"
        @click="$emit('click')"
      >
        <slot></slot>
      </v-btn>
    </template>
    <span>{{ $i18n.t(tooltip) }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'TooltipButton',
  props: {
    tooltip: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    openDelay: {
      type: Number,
      default: 500,
    },
  },
};
</script>
