export const state = () => ({
  searchText: '',
});

export const getters = {
  getSearchText: (state) => state.searchText || '',
};

export const mutations = {
  SET_SEARCH_TEXT(state, searchText) {
    state.searchText = searchText;
  },
};

export const actions = {
  setSearchText({ state, commit }, searchText) {
    commit('SET_SEARCH_TEXT', searchText);
  },
};
