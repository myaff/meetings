<template>
  <div class="app-nav-panel">
    <nav class="app-nav-panel__nav">
      <div
        v-for="(item, index) in navList"
        :key="index"
        class="app-nav-panel__nav-item"
      >
        <nuxt-link :to="item.path" class="app-nav-panel__nav-link">
          <svg-icon
            :name="item.icon"
            class="app-nav-panel__nav-icon icon--block"
          />
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavPanel",
  computed: {},

  data() {
    return {
      navList: [
        {
          path: "/meetings",
          title: "Meetings Planner",
          icon: "meetings"
        },
        {
          path: "/users",
          title: "Users",
          icon: "users"
        }
      ]
    };
  }
};
</script>

<style src="./AppNavPanel.styl" lang="stylus"></style>
