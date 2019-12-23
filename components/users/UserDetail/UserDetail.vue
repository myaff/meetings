<template>
  <div class="user-detail">
    <div class="user-detail__actions">
      <base-action-panel class="user-detail__action-panel">
        <base-button theme="light" icon="edit" shape="square" @click="edit" />
        <base-button
          v-if="!userMeetings.length"
          theme="danger"
          @click="del"
          class="user-detail__delete"
          icon="delete"
          shape="square"
        />
      </base-action-panel>
      <base-button
        shape="square"
        theme="transparent"
        icon="close"
        class="user-detail__close"
        @click="close"
      />
    </div>
    <div class="user-detail__name-wrapper" v-click-outside="cancel">
      <div
        class="user-detail__name tp-heading--big"
        :contenteditable="editable"
        ref="editable"
        @input="update"
        @keydown.enter.prevent
        @keyup.enter="save"
        @keyup.esc="cancel"
      >
        {{ fullName }}
      </div>
      <base-button
        v-if="editable"
        theme="primary"
        icon="save"
        shape="square"
        :disabled="!isValid"
        @click="save"
        class="user-detail__save-btn"
      />
    </div>
    <div v-if="userMeetings.length" class="user-detail__meetings">
      <div class="user-detail__meetings-title">{{ meetingsTitle }}</div>
      <flip-list :list="userMeetingsSorted" class="user-detail__meetings-list">
        <template v-slot:item="{ item }">
          <meeting-row :meeting="item" />
        </template>
      </flip-list>
    </div>
    <div v-else class="user-detail__meetings-empty">
      <p>{{ noMeetingsTitle + " " + fullName }}</p>
    </div>
  </div>
</template>
<script>
import { FlipList } from "~/components/layout";
import MeetingRow from "~/components/meetings/MeetingRow/MeetingRow.vue";
export default {
  name: "UserDetail",
  components: {
    FlipList,
    MeetingRow
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    user() {
      return this.$store.getters["users/getById"](this.id);
    },
    userMeetings() {
      return this.$store.getters["meetings/getByUserId"](this.id);
    },
    userMeetingsSorted() {
      return this.$store.getters["meetings/getSortedList"](this.userMeetings);
    },
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
    isValid() {
      return (
        this.editable && this.upd.firstName.length && this.upd.lastName.length
      );
    }
  },

  data() {
    return {
      editable: false,
      upd: {
        firstName: "",
        lastName: ""
      },
      meetingsTitle: "Attends in:",
      noMeetingsTitle: "No meetings found with"
    };
  },

  methods: {
    edit() {
      this.editable = true;
      this.upd.firstName = this.user.firstName;
      this.upd.lastName = this.user.lastName;
    },
    update(event) {
      let updArr = event.target.innerText.trim().split(" ");
      this.upd.firstName = updArr[0] ? updArr[0] : "";
      this.upd.lastName = updArr[1] ? updArr[1] : "";
    },
    cancel() {
      if (!this.editable) return;
      this.upd.firstName = "";
      this.upd.lastName = "";
      this.editable = false;
      this.$refs.editable.innerText = this.fullName;
    },
    save() {
      if (this.isValid) {
        this.updateUser({ id: this.user.id, props: this.upd });
        this.editable = false;
      }
    },
    del() {
      this.$emit("deleted");
      setTimeout(() => {
        this.deleteUser(this.id);
      });
    },
    close() {
      this.$emit("close");
    },
    // store actions
    updateUser(payload) {
      this.$store.dispatch("users/update", payload);
    },
    deleteUser(payload) {
      this.$store.dispatch("users/delete", payload);
    }
  }
};
</script>

<style src="./UserDetail.styl" lang="stylus"></style>
