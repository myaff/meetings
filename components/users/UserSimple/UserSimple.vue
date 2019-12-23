<template>
  <div class="user-simple">
    <div class="user-simple__name">
      {{ name }}
    </div>
    <div v-if="role" class="user-simple__role tp--label">
      {{ role }}
    </div>
  </div>
</template>
<script>
export default {
  name: "UserSimple",
  props: {
    name: String,
    role: String
  }
};
</script>

<style src="./UserSimple.styl" lang="stylus"></style>
