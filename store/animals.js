// import { nanoid } from 'nanoid';

export const state = () => ({
  animals: {
    Qg9XogHd97YQyDXkm4TD1: {
      id: 'Qg9XogHd97YQyDXkm4TD1',
      name: {
        en: 'Hello',
        pl: 'Cześć!',
      },
      category: 'AdSp4j5p34lpShgJ3j1',
    },
  },
  categories: {
    AdSp4j5p34lpShgJ3j1: {
      id: 'AdSp4j5p34lpShgJ3j1',
      name: {
        en: 'Farmland',
        pl: 'Udomowione',
      },
    },
  },
  animalsList: ['Qg9XogHd97YQyDXkm4TD1'],
  categoriesList: ['AdSp4j5p34lpShgJ3j1'],
});

export const getters = {
  getAnimals: (state) => state.animalsList.map((id) => state.animals[id]),
  getAnimalsWithCategory: (state, getters) => (category) =>
    getters.getAnimals.filter((animal) => animal.category === category),
};

export const mutations = {};

export const actions = {};
