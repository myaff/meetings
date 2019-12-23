export default {
  add(state, user) {
    state.list.push(user);
  },
  update(state, payload) {
    let user = {
      ...state.list[payload.index],
      ...payload.props
    };
    state.list.splice(payload.index, 1, user);
  },
  delete(state, index) {
    state.list.splice(index, 1);
  }
};
