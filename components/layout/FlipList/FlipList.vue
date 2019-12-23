<template>
  <transition-group name="flip" appear :tag="tag" :class="`flip-${mode}`">
    <div :class="`flip-${mode}__item`" v-for="item in list" :key="item.id">
      <slot name="item" :item="item">{{ item }}</slot>
    </div>
  </transition-group>
</template>
<script>
export default {
  name: "FlipList",
  props: {
    list: {
      type: Array,
      required: true
    },
    tag: {
      type: String,
      default: "div"
    },
    mode: {
      type: String,
      default: "list",
      validator: function(value) {
        return ["list", "grid"].indexOf(value) !== -1;
      }
    }
  }
};
</script>

<style src="./FlipList.styl" lang="stylus"></style>
