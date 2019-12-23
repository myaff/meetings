<template>
  <div class="layout layout--default">
    <div class="layout__panel">
      <app-nav-panel />
    </div>
    <div class="layout__main">
      <Nuxt class="layout__page" />
    </div>
  </div>
</template>

<script>
import { AppNavPanel } from "~/components/layout";
export default {
  components: { AppNavPanel }
};
</script>
