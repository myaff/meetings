export default {
  add({ commit }, payload) {
    // prepearing
    let now = Date.now();
    let id = `m_${(~~(Math.random() * 1e8)).toString(16)}`;
    let meeting = {
      id: id,
      ...payload.meeting
    };
    if (meeting.start > now) {
      meeting.state = "planned";
    } else if (meeting.end < now) {
      meeting.state = "done";
    } else {
      meeting.state = "now";
    }
    let muRecords = payload.users.map(item => {
      let transformed = {
        mid: id,
        uid: item.id
      };
      if (item.role) {
        transformed.role = item.role;
      }
      return transformed;
    });
    commit("add", meeting);
    commit("addMURecords", muRecords, { root: true });
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
    commit("deleteMuRecords", id, { root: true });
  }
};
