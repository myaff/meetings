<template>
  <transition name="fade" appear>
    <div v-if="active" class="base-popup" @click="close" @keyup.esc="close">
      <div class="base-popup__inner" v-bar>
        <div class="base-popup__scrollable">
          <div class="base-popup__window-wrapper">
            <div class="base-popup__window" :class="classObj" @click.stop>
              <base-button
                shape="square"
                theme="transparent"
                icon="close"
                @click="close"
                class="base-popup__close"
              />
              <div v-if="$slots.title" class="base-popup__title">
                <slot name="title"></slot>
              </div>
              <div class="base-popup__content">
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "BasePopup",
  props: {
    active: Boolean,
    size: {
      type: String,
      default: "medium"
    }
  },
  computed: {
    classObj() {
      return {
        [`size--${this.size}`]: true
      };
    }
  },

  data() {
    return {};
  },

  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style src="./BasePopup.styl" lang="stylus"></style>
