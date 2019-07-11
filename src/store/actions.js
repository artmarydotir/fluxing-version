// this is for global actions that do not group by special category or modules

export const actionsValue = ({ commit }, payload) => {
  commit('updatedVal', payload);
};

export const anotherAction = () => {};
