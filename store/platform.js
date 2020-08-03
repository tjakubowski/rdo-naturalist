export const state = () => ({
  availablePlatforms: {
    pc: { id: 'pc', icon: 'mdi-laptop-chromebook' },
    ps4: { id: 'ps4', icon: 'mdi-sony-playstation' },
    xboxone: { id: 'xboxone', icon: 'mdi-microsoft-xbox' },
  },
  availablePlatformsList: ['pc', 'ps4', 'xboxone'],
  platform: 'pc',
});

export const getters = {
  isPlaystation: (state) => state.platform === state.availablePlatforms.ps4.id,
  getPlatform: (state) => state.availablePlatforms[state.platform],
  getAvailablePlatforms: (state) =>
    state.availablePlatformsList.map((id) => state.availablePlatforms[id]),
};

export const mutations = {
  SET_PLATFROM(state, platform) {
    state.platform = platform;
  },
};

export const actions = {
  setPlatform({ getters, commit }, platform) {
    if (
      !getters.getAvailablePlatforms
        .map((platform) => platform.id)
        .includes(platform)
    )
      return;

    commit('SET_PLATFROM', platform);
  },
};
