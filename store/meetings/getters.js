export default {
  getById: state => id => {
    return _.find(state.list, meeting => {
      return meeting.id === id;
    });
  },
  getIndexById: state => id => {
    return _.findIndex(state.list, meeting => {
      return meeting.id === id;
    });
  },
  getByUserId: (state, getters, rootState, rootGetters) => id => {
    return rootGetters.getRecordsByUserId(id).map(item => {
      return {
        ...getters.getById(item.mid),
        role: item.role
      };
    });
  },
  getSortedList: (state, getters) => (list = state.list) => {
    let states = {
      done: 0,
      planned: 1,
      now: 2
    };
    let mapped = list.map((item, i) => {
      return {
        index: i,
        state: states[item.state],
        start: item.start,
        end: item.end
      };
    });
    mapped.sort((a, b) => {
      if (a.state !== b.state) {
        // now - first, then - planned, then - done
        if (a.state < b.state) {
          return 1;
        } else {
          return -1;
        }
      } else {
        if (a.state === 1 && b.state === 1) {
          // planned - chronological order
          if (a.start > b.start) return 1;
          else if (a.start < b.start) return -1;
          else {
            if (a.end < b.end) return 1;
            else return -1;
          }
        } else {
          // done - reverse chronological order
          if (a.start < b.start) return 1;
          else if (a.start > b.start) return -1;
          else {
            if (a.end < b.end) return 1;
            else return -1;
          }
        }
      }
    });
    return mapped.map(item => {
      return list[item.index];
    });
  }
};
