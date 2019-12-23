<template>
  <div class="meeting-card">
    <base-action-panel class="meeting-card__action-panel">
      <base-button theme="light" icon="edit" shape="square" @click="edit" />
      <base-button shape="square" theme="danger" icon="delete" @click="del" />
    </base-action-panel>
    <div class="meeting-card__content">
      <meeting-state
        class="meeting-card__state"
        :state="meeting.state"
        :id="meeting.id"
        :start="meeting.start"
        :end="meeting.end"
      />
      <div class="meeting-card__title-wrapper" v-click-outside="cancel">
        <div
          class="meeting-card__title tp-heading--medium"
          :contenteditable="editable"
          ref="editable"
          @input="update"
          @keydown.enter.prevent
          @keyup.enter="save"
          @keyup.esc="cancel"
        >
          {{ meeting.theme }}
        </div>
        <base-button
          v-if="editable"
          theme="primary"
          icon="save"
          shape="square"
          :disabled="!isValid"
          @click="save"
          class="meeting-card__save-btn"
        />
      </div>
      <meeting-period
        :start="meeting.start"
        :end="meeting.end"
        class="meeting-card__datetime"
      />
      <div class="meeting-card__users">
        <svg-icon name="users" class="meeting-card__users-icon"></svg-icon>
        <div class="meeting-card__users-list">
          <user-simple
            v-for="user in users"
            :key="user.id"
            :name="`${user.firstName} ${user.lastName}`"
            :role="user.role"
            class="meeting-card__user"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MeetingPeriod from "../MeetingPeriod/MeetingPeriod.vue";
import MeetingState from "../MeetingState/MeetingState.vue";
import { UserSimple } from "~/components/users";
export default {
  name: "MeetingCard",

  components: {
    MeetingPeriod,
    MeetingState,
    UserSimple
  },

  props: {
    meeting: {
      type: Object,
      required: true
    }
  },

  computed: {
    users() {
      return this.$store.getters["users/getByMeetingId"](this.meeting.id);
    },
    isValid() {
      return this.editable && this.upd.theme.length;
    }
  },

  data() {
    return {
      editable: false,
      upd: {
        theme: ""
      }
    };
  },

  methods: {
    edit() {
      this.editable = true;
      this.upd.theme = this.meeting.theme;
    },
    update(event) {
      this.upd.theme = event.target.innerText.trim();
    },
    save() {
      if (this.isValid) {
        this.updateInStore({
          id: this.meeting.id,
          props: {
            ...this.upd
          }
        });
        this.editable = false;
      }
    },
    cancel() {
      if (!this.editable) return;
      this.upd.theme = "";
      this.editable = false;
      this.$refs.editable.innerText = this.meeting.theme;
    },
    del() {
      this.deleteFromStore(this.meeting.id);
    },
    // store actions
    updateInStore(payload) {
      this.$store.dispatch("meetings/update", payload);
    },
    deleteFromStore(payload) {
      this.$store.dispatch("meetings/delete", payload);
    }
  }
};
</script>

<style src="./MeetingCard.styl" lang="stylus"></style>
