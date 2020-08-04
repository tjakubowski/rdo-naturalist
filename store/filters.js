export const state = () => ({
  searchText: '',
  categoryFilters: [],
});

export const getters = {
  getSearchText: (state) => state.searchText || '',
  getCategoryFilters: (state) => state.categoryFilters || [],
};

export const mutations = {
  SET_SEARCH_TEXT(state, searchText) {
    state.searchText = searchText;
  },
  SET_CATEGORY_FILTERS(state, categoryFilters) {
    state.categoryFilters = categoryFilters;
  },
};

export const actions = {
  setSearchText({ state, commit }, searchText) {
    commit('SET_SEARCH_TEXT', searchText);
  },
  setCategoryFilters({ state, commit }, categoryFilters) {
    commit('SET_CATEGORY_FILTERS', categoryFilters);
  },
};
