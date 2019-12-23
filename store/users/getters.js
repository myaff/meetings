export default {
  getById: state => id => {
    return _.find(state.list, user => {
      return user.id === id;
    });
  },
  getIndexById: state => id => {
    return _.findIndex(state.list, user => {
      return user.id === id;
    });
  },
  getByMeetingId: (state, getters, rootState, rootGetters) => id => {
    return rootGetters.getRecordsByMeetingId(id).map(item => {
      return {
        ...getters.getById(item.uid),
        role: item.role
      };
    });
  }
};
