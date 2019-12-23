<template>
  <div class="empty-page">
    <div class="empty-page__content">
      <div class="empty-page__title tp-heading--medium">
        <slot name="title">Sorry, there is nothing here yet!</slot>
      </div>
      <div class="empty-page__desc">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EmptyPage",
  computed: {},

  data() {
    return {};
  }
};
</script>

<style src="./EmptyPage.styl" lang="stylus"></style>
