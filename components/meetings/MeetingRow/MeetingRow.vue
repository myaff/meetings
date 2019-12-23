<template>
  <div class="meeting-row">
    <div class="meeting-row__info">
      <meeting-state
        class="meeting-row__state"
        :state="meeting.state"
        :id="meeting.id"
        :start="meeting.start"
        :end="meeting.end"
      />
      <div class="meeting-row__title tp-heading--medium">
        {{ meeting.theme }}
      </div>
      <div v-if="meeting.role" class="meeting-row__role tp--label">
        {{ meeting.role }}
      </div>
    </div>
    <div class="meeting-row__meta">
      <meeting-period
        :start="meeting.start"
        :end="meeting.end"
        class="meeting-row__datetime"
      />
    </div>
  </div>
</template>
<script>
import MeetingState from "../MeetingState/MeetingState.vue";
import MeetingPeriod from "../MeetingPeriod/MeetingPeriod.vue";
export default {
  name: "MeetingRow",

  components: {
    MeetingPeriod,
    MeetingState
  },

  props: {
    meeting: {
      type: Object,
      required: true
    }
  },

  computed: {},

  data() {
    return {};
  }
};
</script>

<style src="./MeetingRow.styl" lang="stylus"></style>
