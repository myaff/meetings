<template>
  <div class="page page--meetings">
    <div v-if="meetings.length" class="meetings">
      <div v-bar>
        <div class="vb-content">
          <div class="meetings__content">
            <flip-list :list="meetings" mode="grid">
              <template v-slot:item="{ item }">
                <meeting-card :meeting="item" />
              </template>
            </flip-list>
          </div>
        </div>
      </div>
    </div>
    <empty-page v-else>
      <template #title>
        <h2>Sorry, there are no meetings found!</h2>
      </template>
      <p>Press big blue button to add</p>
    </empty-page>
    <base-button
      shape="circle"
      size="big"
      class="meetings__action-btn"
      @click="addMeeting"
    >
      <svg-icon name="add" />
    </base-button>
    <meeting-add :active.sync="addingMeeting" />
  </div>
</template>
<script>
import { EmptyPage, FlipList } from "~/components/layout";
import { MeetingAdd, MeetingCard } from "~/components/meetings";
export default {
  name: "Meetings",
  components: {
    EmptyPage,
    FlipList,
    MeetingAdd,
    MeetingCard
  },
  computed: {
    meetings() {
      return this.$store.state.meetings.list;
    }
  },

  data() {
    return {
      addingMeeting: false
    };
  },

  methods: {
    addMeeting() {
      this.addingMeeting = true;
    }
  }
};
</script>

<style src="~/assets/stylus/pages/meetings.styl" lang="stylus"></style>
