<template>
  <div class="user-card" v-on="$listeners">
    <div class="user-card__content">
      <div class="user-card__name">{{ fullName }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserCard",
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    }
  },

  data() {
    return {};
  }

  /*
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
  */
};
</script>

<style src="./UserCard.styl" lang="stylus"></style>
