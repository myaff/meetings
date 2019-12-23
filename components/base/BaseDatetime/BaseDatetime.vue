<template>
  <div class="base-datetime">
    <datetime
      v-bind="$attrs"
      :input-id="id"
      input-class="base-datetime__input"
      type="datetime"
      :minute-step="5"
      v-on="$listeners"
    >
      <label v-if="label" :for="id" class="base-datetime__label" slot="before">
        {{ label }}
        <span v-if="required" class="required-star">*</span>
      </label>
    </datetime>
  </div>
</template>
<script>
import { Datetime } from "vue-datetime";
export default {
  name: "BaseDatetime",
  inheritAttrs: false,
  props: {
    label: String
  },
  components: {
    Datetime
  },
  computed: {
    required() {
      return this.$attrs.required !== undefined;
    }
  },

  data() {
    return {
      id: `dt${(~~(Math.random() * 1e8)).toString(16)}`
    };
  }
};
</script>

<style src="./BaseDatetime.styl" lang="stylus"></style>
