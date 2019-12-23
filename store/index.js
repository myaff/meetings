export const state = () => ({
  MeetingsUsers: []
});

export const mutations = {
  addMURecords(state, records) {
    for (let record of records) {
      state.MeetingsUsers.push(record);
    }
  },
  deleteMuRecords(state, id) {
    state.MeetingsUsers = state.MeetingsUsers.filter(item => {
      return item.mid !== id;
    });
  }
};

export const getters = {
  getMURecordByParam: state => (param, value) => {
    return state.MeetingsUsers.filter(item => {
      return item[param] === value;
    });
  },
  getRecordsByMeetingId: state => id => {
    return getters.getMURecordByParam(state)("mid", id);
  },
  getRecordsByUserId: state => id => {
    return getters.getMURecordByParam(state)("uid", id);
  },
  getFreeUsersByDate: state => (start, end) => {
    let freeUsers = [...state.users.list];
    // no time = no busy users
    if (!start || !end) return freeUsers;
    // no meetings = no busy users
    if (!state.meetings.list.length) return freeUsers;
    // else continue
    let intersectionMeetings = [];
    intersectionMeetings = state.meetings.list.filter(item => {
      if (end < item.start || start > item.end) return;
      return item;
    });
    // no intersection meetings = no busy users
    if (!intersectionMeetings.length) return freeUsers;
    // else continue
    let busyUsers = state.MeetingsUsers.filter(function(muRecord) {
      return _.find(this, item => {
        return muRecord.mid === item.id;
      });
    }, intersectionMeetings).map(item => {
      return item.uid;
    });
    freeUsers = freeUsers.filter(function(user) {
      return this.indexOf(user.id) < 0;
    }, busyUsers);
    return freeUsers;
  }
};
