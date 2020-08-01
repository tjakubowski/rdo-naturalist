export const state = () => ({
  categories: {
    '3Amt9rgxHxvUFsWn3Zi6c': {
      id: '3Amt9rgxHxvUFsWn3Zi6c',
      name: 'farmland',
    },
    e_Rd0rQ783aYdN193fkR_: {
      id: 'e_Rd0rQ783aYdN193fkR_',
      name: 'desert',
    },
    '6h9zXXHQfVBrhsticX1GO': {
      id: '6h9zXXHQfVBrhsticX1GO',
      name: 'wetland',
    },
    'gN64lMrUox3sMdkW7-fVU': {
      id: 'gN64lMrUox3sMdkW7-fVU',
      name: 'mountain_grassland',
    },
    '11WY3u8Dy-3sw-S9FA0ZX': {
      id: '11WY3u8Dy-3sw-S9FA0ZX',
      name: 'forest_river',
    },
  },
  categoriesList: [
    '3Amt9rgxHxvUFsWn3Zi6c',
    'e_Rd0rQ783aYdN193fkR_',
    '6h9zXXHQfVBrhsticX1GO',
    'gN64lMrUox3sMdkW7-fVU',
    '11WY3u8Dy-3sw-S9FA0ZX',
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
};
