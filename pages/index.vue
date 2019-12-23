<template>
  <div class="page page--home">
    <empty-page>
      <template #title>
        <h2>There's nothing here yet</h2>
      </template>
      <p>
        But there might be a dashboard with summary info or something else.
        <br />
        In the meantime, go to the meetings or users section using the left
        nav-panel
      </p>
    </empty-page>
  </div>
</template>
<script>
import { EmptyPage } from "~/components/layout";
export default {
  name: "Home",
  components: {
    EmptyPage
  },
  computed: {}
};
</script>

<style src="~/assets/stylus/pages/home.styl" lang="stylus"></style>
