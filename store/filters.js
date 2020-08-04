export const state = () => ({
  animalNameFilter: '',
  categoryFilters: [],
});

export const getters = {
  getAnimalNameFilter: (state) => state.animalNameFilter || '',
  getCategoryFilters: (state) => state.categoryFilters || [],
};

export const mutations = {
  SET_ANIMAL_NAME_FILTER(state, animalNameFilter) {
    state.animalNameFilter = animalNameFilter;
  },
  SET_CATEGORY_FILTERS(state, categoryFilters) {
    state.categoryFilters = categoryFilters;
  },
};

export const actions = {
  setAnimalNameFilter({ state, commit }, animalNameFilter) {
    commit('SET_ANIMAL_NAME_FILTER', animalNameFilter);
  },
  setCategoryFilters({ state, commit }, categoryFilters) {
    commit('SET_CATEGORY_FILTERS', categoryFilters);
  },
};
