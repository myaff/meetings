<template>
  <component
    :is="tag"
    v-bind="[props, $attrs]"
    class="base-button"
    :class="classObject"
    :style="styleObject"
    v-on="$listeners"
  >
    <svg-icon
      v-if="icon"
      :name="icon"
      class="base-button__icon"
      :style="iconStyles"
    />
    <span v-if="$slots.default" class="base-button__text"><slot></slot></span>
    <span v-if="notify" class="base-button__notify">{{ notify }}</span>
  </component>
</template>
<script>
export default {
  name: "BaseButton",
  props: {
    native: Boolean,
    nativeLink: Boolean,
    url: String,
    target: String,
    title: String,
    theme: {
      type: String,
      default: "primary"
    },
    size: String,
    shape: String,
    icon: String,
    iconSize: String,
    notify: String
  },
  computed: {
    classObject() {
      const obj = {};

      if (this.theme) {
        const theme = `theme--${this.theme}`;
        if (theme) {
          obj[theme] = true;
        }
      }

      if (this.size) {
        const size = `size--${this.size}`;
        if (size) {
          obj[size] = true;
        }
      }

      if (this.shape) {
        const shape = `shape--${this.shape}`;
        if (shape) {
          obj[shape] = true;
        }
      }

      return obj;
    },
    styleObject() {
      const obj = {};
      if (this.color) {
        obj.backgroundColor = this.color;
      }

      return obj;
    },
    iconStyles() {
      const obj = {};
      if (this.iconSize) {
        obj.fontSize = `${this.iconSize}px`;
      }

      return obj;
    },

    props() {
      const obj = {};
      if (!this.nativeLink && this.url) {
        obj.to = this.url;
        obj.target = this.target;
        obj.title = this.title;
      } else if (this.nativeLink) {
        obj.url = this.url;
        obj.target = this.target;
        obj.title = this.title;
      } else {
        obj.role = "button";
      }

      return obj;
    },
    tag() {
      if (this.url && this.nativeLink) {
        return "a";
      } else if (this.url) {
        return "nuxt-link";
      }

      return "button";
    }
  },

  data() {
    return {};
  }
};
</script>

<style src="./BaseButton.styl" lang="stylus"></style>
