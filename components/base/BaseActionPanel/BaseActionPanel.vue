<template>
  <div class="base-action-panel" v-click-outside="close">
    <div class="base-action-panel__heandler" @click="open">
      <slot name="handler">
        <base-button
          shape="square"
          theme="transparent"
          icon="menu"
        ></base-button>
      </slot>
    </div>
    <transition name="fade" appear>
      <div v-if="active" class="base-action-panel__popup" @click.stop="close">
        <div class="base-action-panel__content">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "BaseActionPanel",
  computed: {},

  data() {
    return {
      active: false
    };
  },

  methods: {
    open() {
      this.active = true;
    },
    close() {
      this.active = false;
    }
  }
};
</script>

<style src="./BaseActionPanel.styl" lang="stylus"></style>
