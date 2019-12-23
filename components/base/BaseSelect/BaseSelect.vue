<template>
  <div class="base-select">
    <label v-if="label" class="base-select__label">
      {{ label }}
      <span v-if="required" class="required-star">*</span>
    </label>
    <v-select
      v-bind="$attrs"
      :options="options"
      v-on="$listeners"
      :label="as"
      class="base-select__select"
      :class="[{ 'vs--top': isOut }, `vs--${mode}`]"
      :maxHeight="maxHeight"
      ref="vselect"
    ></v-select>
  </div>
</template>
<script>
import vSelect from "vue-select";
export default {
  name: "BaseSelect",
  components: {
    vSelect
  },
  inheritAttrs: false,
  props: {
    label: String,
    options: Array,
    as: String
  },
  computed: {
    required() {
      return this.$attrs.required !== undefined;
    },
    maxHeight() {
      let immediate = window.innerHeight / 2 - 100;
      immediate = immediate - (immediate % 30);
      return immediate;
    },
    realHeight() {
      return Math.min(this.maxHeight, this.options.length * 30);
    },
    mode() {
      return this.$attrs.multiple !== undefined ? "multiple" : "single";
    }
  },

  data() {
    return {
      isOut: false
    };
  },

  methods: {
    checkHeight() {
      let dropdownBottom =
        this.$refs.vselect.$el.getBoundingClientRect().bottom + this.realHeight;
      if (dropdownBottom > window.innerHeight) {
        this.isOut = true;
      }
    }
  },

  watch: {
    options: function() {
      this.checkHeight();
    }
  },

  mounted() {
    setTimeout(() => {
      this.checkHeight();
    });
  }
};
</script>

<style src="./BaseSelect.styl" lang="stylus"></style>
