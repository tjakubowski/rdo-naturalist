export const state = () => ({
  searchText: '',
});

export const getters = {};

export const mutations = {
  SET_SEARCH_TEXT(state, searchText) {
    state = searchText;
  },
};

export const actions = {
  setSearchText({ state, commit }, searchText) {
    commit('SET_SEARCH_TEXT', searchText);
  },
};
