export const state = () => ({
  categories: {
    farmland: {
      id: 'farmland',
    },
    desert: {
      id: 'desert',
    },
    wetland: {
      id: 'wetland',
    },
    mountain_and_grassland: {
      id: 'mountain_and_grassland',
    },
    forest_and_river: {
      id: 'forest_and_river',
    },
    common_critters: {
      id: 'common_critters',
    },
    legendary_dark: {
      id: 'legendary_dark',
    },
    legendary_light: {
      id: 'legendary_light',
    },
    legendary_red_and_blonde: {
      id: 'legendary_red_and_blonde',
    },
    legendary_patterned: {
      id: 'legendary_patterned',
    },
  },
  categoriesList: [
    'farmland',
    'desert',
    'wetland',
    'mountain_and_grassland',
    'forest_and_river',
    'common_critters',
    'legendary_dark',
    'legendary_light',
    'legendary_red_and_blonde',
    'legendary_patterned',
  ],
});

export const getters = {
  getCategories: (state) =>
    state.categoriesList.map((id) => state.categories[id]),
};

export const mutations = {};

export const actions = {
  tradeInCategory({ commit, rootGetters }, id) {
    const animals = rootGetters['animals/getAnimalsWithCategory'](id);

    if (!animals.every((animal) => animal.stamped)) return;

    animals.forEach((animal) =>
      commit(
        'animals/SET_STAMPED',
        { id: animal.id, value: false },
        { root: true }
      )
    );
  },
  completeCategoryProgress({ dispatch, rootGetters }, id) {
    const animals = rootGetters['animals/getAnimalsWithCategory'](id);

    animals.forEach((animal) =>
      dispatch('animals/completeAnimalProgress', animal.id, { root: true })
    );
  },
  completeCategoriesProgress({ dispatch, rootGetters }) {
    const animals = rootGetters['animals/getAnimals'];

    animals.forEach((animal) =>
      dispatch('animals/completeAnimalProgress', animal.id, { root: true })
    );
  },
  resetCategoryProgress({ dispatch, rootGetters }, id) {
    const animals = rootGetters['animals/getAnimalsWithCategory'](id);

    animals.forEach((animal) =>
      dispatch('animals/resetAnimalProgress', animal.id, { root: true })
    );
  },
  resetCategoriesProgress({ dispatch, rootGetters }) {
    const animals = rootGetters['animals/getAnimals'];

    animals.forEach((animal) =>
      dispatch('animals/resetAnimalProgress', animal.id, { root: true })
    );
  },
};
