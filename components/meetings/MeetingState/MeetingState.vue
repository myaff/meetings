<template>
  <div class="meeting-state" :class="`--${state}`">
    {{ state }}
  </div>
</template>
<script>
export default {
  name: "MeetingState",
  props: {
    id: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true,
      validator: function(value) {
        return ["now", "planned", "done"].indexOf(value) !== -1;
      }
    },
    start: {
      type: Number,
      required: true
    },
    end: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      timerId: null,
      delay: 0
    };
  },

  methods: {
    difFromNow(value) {
      return value - Date.now();
    },
    watchState() {
      this.timerId = setTimeout(() => {
        if (this.state === "done") {
          clearTimeout(this.timerId);
          return;
        }
        if (this.difFromNow(this.end) < 0 && this.state !== "done") {
          this.setState("done");
          clearTimeout(this.timerId);
          return;
        }
        if (this.difFromNow(this.start) < 0) {
          if (this.state !== "now") {
            this.setState("now");
          }
        }
        let dif =
          this.state === "now"
            ? this.difFromNow(this.end)
            : this.difFromNow(this.start);
        if (dif >= 1000 * 60 * 60) {
          this.delay = 1000 * 60 * 60; // an hour
        } else if (dif >= 1000 * 60 * 10) {
          this.delay = 1000 * 60 * 10; // 10 minutes
        } else if (dif >= 1000 * 60) {
          this.delay = 1000 * 60; // a minute
        } else {
          this.delay = dif;
        }
        this.watchState();
      }, this.delay);
    },
    setState(value) {
      this.updateInStore({
        id: this.id,
        props: { state: value }
      });
    },
    // store actions
    updateInStore(payload) {
      this.$store.dispatch("meetings/update", payload);
    }
  },

  mounted() {
    this.watchState();
  },

  beforeDestroy() {
    clearTimeout(this.timerId);
  }
};
</script>

<style src="./MeetingState.styl" lang="stylus"></style>
