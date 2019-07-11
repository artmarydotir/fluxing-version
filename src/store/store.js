import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
  },
  getters: {
    doubleCounter: state => state.counter * 2,
    stingCounter: state => `${state.counter} Clicks`,
  },
  mutations: {
    // eslint-disable-next-line no-plusplus
    increment: state => state.counter++,
    // eslint-disable-next-line no-plusplus
    decrement: state => state.counter--,
  },
  actions: {

  },
});
