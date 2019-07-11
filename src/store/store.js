import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    value: 0,
  },
  getters: {
    doubleCounter: state => state.counter * 2,
    stingCounter: state => `${state.counter} Clicks`,
    getValue: state => state.value,
  },
  // Sync-commit
  mutations: {
    increment: (state, payload) => {
      state.counter += payload;
    },
    // eslint-disable-next-line no-plusplus
    decrement: state => state.counter--,
    updatedVal: (state, payload) => {
      state.value = payload;
    },
  },
  // Async-dispatch
  actions: {
    // one way
    increment: (context, payload) => context.commit('increment', payload),
    decrement: context => context.commit('decrement'),
    // another way
    // increment: ({ commit }) => commit('increment'),
    asycIncrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit('increment', payload.by);
      }, payload.time);
    },
    asycDecrement: ({ commit }) => {
      setTimeout(() => {
        commit('decrement');
      }, 2000);
    },
    actionsValue: ({ commit }, payload) => {
      commit('updatedVal', payload);
    },
  },
});
