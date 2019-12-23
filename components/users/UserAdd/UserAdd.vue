<template>
  <base-popup :active.sync="active" size="small" @close="cancel">
    <template #title>Add User</template>
    <div class="user-add">
      <form class="user-add__form" @submit.prevent="submit" novalidate="true">
        <base-input
          class="user-add__field"
          label="First name"
          v-model="user.firstName"
          required
          focused
        />
        <base-input
          class="user-add__field"
          label="Last name"
          v-model="user.lastName"
          required
        />
        <div class="user-add__form-btns">
          <base-button
            type="submit"
            :disabled="!isValid"
            class="user-add__form-btn"
            >Submit</base-button
          >
          <base-button
            type="reset"
            theme="light"
            class="user-add__form-btn"
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
  name: "UserAdd",
  props: {
    active: Boolean
  },
  computed: {
    normalizedUser() {
      return {
        firstName: this.user.firstName.trim(),
        lastName: this.user.lastName.trim()
      };
    },
    isValid() {
      return (
        this.normalizedUser.firstName.length &&
        this.normalizedUser.lastName.length
      );
    }
  },

  data() {
    return {
      user: {
        firstName: "",
        lastName: ""
      }
    };
  },

  methods: {
    clear() {
      this.user = {
        id: "",
        firstName: "",
        lastName: ""
      };
    },
    cancel() {
      this.close();
      this.clear();
    },
    add() {
      this.addUser({
        ...this.user,
        ...this.normalizedUser
      });
    },
    submit() {
      if (this.isValid) {
        this.add();
        this.close();
        this.clear();
      }
    },
    close() {
      this.$emit("update:active", false);
    },
    // store actions
    addUser(payload) {
      this.$store.dispatch("users/add", payload);
    }
  }
};
</script>

<style src="./UserAdd.styl" lang="stylus"></style>
