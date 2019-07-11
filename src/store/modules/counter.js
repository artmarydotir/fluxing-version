const state = {
  counter: 0,
};
const getters = {
  doubleCounter: state => state.counter * 2,
  stingCounter: state => `${state.counter} Clicks`,
};
const actions = {
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
};

const mutations = {
  increment: (state, payload) => {
    state.counter += payload;
  },
  // eslint-disable-next-line no-plusplus
  decrement: state => state.counter--,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
