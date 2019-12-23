<template>
  <base-popup :active.sync="active" @close="cancel">
    <template #title>Add meeting</template>
    <div class="meeting-add">
      <form
        class="meeting-add__form"
        @submit.prevent="submit"
        novalidate="true"
      >
        <base-input
          class="meeting-add__field"
          label="Theme"
          v-model="meeting.theme"
          required
          focused
        />
        <div class="meeting-add__double-field">
          <base-datetime
            class="meeting-add__field"
            label="Start date"
            :minute-step="5"
            v-model="meeting.start"
            required
          />
          <base-datetime
            class="meeting-add__field"
            label="End date"
            :minute-step="5"
            v-model="meeting.end"
            required
          />
        </div>
        <base-select
          class="meeting-add__field"
          label="Facilitator"
          :options="freeUsersFiltered"
          as="name"
          :key="1"
          v-model="meeting.facilitator"
          required
        ></base-select>
        <base-select
          class="meeting-add__field"
          label="Secretary"
          :options="freeUsersFiltered"
          as="name"
          :key="2"
          v-model="meeting.secretary"
          required
        ></base-select>
        <base-select
          class="meeting-add__field"
          label="Users"
          :options="freeUsersFiltered"
          :key="3"
          as="name"
          multiple
          v-model="meeting.users"
        ></base-select>
        <div class="meeting-add__form-btns">
          <base-button
            type="submit"
            :disabled="!isValid"
            class="meeting-add__form-btn"
            >Submit</base-button
          >
          <base-button
            type="reset"
            theme="light"
            class="meeting-add__form-btn"
            @click.stop="cancel"
            >Cancel</base-button
          >
        </div>
      </form>
    </div>
  </base-popup>
</template>
<script>
export default {
  name: "MeetingAdd",
  props: {
    active: Boolean
  },
  computed: {
    freeUsers() {
      return this.$store.getters
        .getFreeUsersByDate(
          this.normalizedMeeting.start,
          this.normalizedMeeting.end
        )
        .map(item => {
          return {
            name: `${item.firstName} ${item.lastName}`,
            id: item.id
          };
        });
    },
    freeUsersFiltered() {
      return this.freeUsers.filter(item => {
        let res = true;
        if (
          this.meeting.facilitator &&
          item.id === this.meeting.facilitator.id
        ) {
          res = false;
        }
        if (this.meeting.secretary && item.id === this.meeting.secretary.id) {
          res = false;
        }
        return res;
      }, this);
    },
    normalizedMeeting() {
      return {
        theme: this.meeting.theme.trim(),
        start: Date.parse(this.meeting.start),
        end: Date.parse(this.meeting.end)
      };
    },
    normalizedUsers() {
      return [
        {
          id: this.meeting.facilitator.id,
          role: "facilitator"
        },
        {
          id: this.meeting.secretary.id,
          role: "secretary"
        },
        ...this.meeting.users.map(item => {
          return { id: item.id };
        })
      ];
    },
    isValid() {
      return (
        this.normalizedMeeting.theme.length &&
        this.normalizedMeeting.start &&
        this.normalizedMeeting.end &&
        this.normalizedMeeting.end > this.normalizedMeeting.start &&
        this.meeting.facilitator &&
        this.meeting.secretary
      );
    }
  },

  data() {
    return {
      meeting: {
        theme: "",
        start: "",
        end: "",
        facilitator: "",
        secretary: "",
        users: []
      }
    };
  },

  methods: {
    clear() {
      this.meeting = {
        theme: "",
        start: "",
        end: "",
        facilitator: "",
        secretary: "",
        users: []
      };
    },
    cancel() {
      this.close();
      this.clear();
    },
    close() {
      this.$emit("update:active", false);
    },
    submit() {
      if (this.isValid) {
        this.add();
        this.close();
        this.clear();
      }
    },
    add() {
      this.addToStore({
        meeting: {
          ...this.meeting,
          ...this.normalizedMeeting
        },
        users: [...this.normalizedUsers]
      });
    },
    // store actions
    addToStore(payload) {
      this.$store.dispatch("meetings/add", payload);
    }
  },

  watch: {
    freeUsers: function() {
      this.meeting.facilitator = "";
      this.meeting.secretary = "";
      this.meeting.users = [];
    }
  }
};
</script>

<style src="./MeetingAdd.styl" lang="stylus"></style>
