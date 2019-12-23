export default {
  add(state, meeting) {
    state.list.push(meeting);
  },
  update(state, payload) {
    let meeting = {
      ...state.list[payload.index],
      ...payload.props
    };
    state.list.splice(payload.index, 1, meeting);
  },
  delete(state, index) {
    state.list.splice(index, 1);
  }
};
