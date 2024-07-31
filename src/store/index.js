import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
  },
  state() {},
  getters: {},
  mutations: {},
  actions: {},
});

export default store;
