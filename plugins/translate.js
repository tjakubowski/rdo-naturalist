import Vue from 'vue';

export default ({ app }) => {
  Vue.filter('translate', function (value) {
    return typeof value === 'string'
      ? value
      : value[app.i18n.locale] ||
          value[app.i18n.defaultLocale] ||
          value[Object.keys(value)[0]] ||
          '';
  });
};
