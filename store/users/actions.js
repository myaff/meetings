export default {
  add({ commit }, payload) {
    let id = `u_${(~~(Math.random() * 1e8)).toString(16)}`;
    let user = {
      ...payload,
      id: id
    };
    commit("add", user);
  },
  update({ commit, getters }, payload) {
    payload = {
      ...payload,
      index: getters.getIndexById(payload.id)
    };
    commit("update", payload);
  },
  delete({ commit, getters }, id) {
    let index = getters.getIndexById(id);
    commit("delete", index);
  }
};
