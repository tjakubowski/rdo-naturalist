export const state = () => ({
  categories: {
    farmland: {
      id: 'farmland',
      tradable: true,
    },
    desert: {
      id: 'desert',
      tradable: true,
    },
    wetland: {
      id: 'wetland',
      tradable: true,
    },
    mountain_and_grassland: {
      id: 'mountain_and_grassland',
      tradable: true,
    },
    forest_and_river: {
      id: 'forest_and_river',
      tradable: true,
    },
    common_critters: {
      id: 'common_critters',
      tradable: false,
    },
    legendary_dark: {
      id: 'legendary_dark',
      tradable: true,
    },
    legendary_light: {
      id: 'legendary_light',
      tradable: true,
    },
    legendary_red_and_blonde: {
      id: 'legendary_red_and_blonde',
      tradable: true,
    },
    legendary_patterned: {
      id: 'legendary_patterned',
      tradable: true,
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
