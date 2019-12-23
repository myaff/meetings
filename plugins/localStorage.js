import createPersistedState from "vuex-persistedstate";

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      paths: ["users.list", "meetings.list", "MeetingsUsers"]
    })(store);
  });
  window.addEventListener(
    "storage",
    function(e) {
      if (e.key !== "vuex") {
        // console.log('Ignored an event: ', e)
        return;
      }

      var vuexJSON = JSON.parse(localStorage["vuex"]);
      store.replaceState(vuexJSON);
    },
    false
  );
};
