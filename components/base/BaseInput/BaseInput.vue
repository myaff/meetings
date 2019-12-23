<template>
  <div class="base-input">
    <label class="base-input__label">
      <div v-if="label" class="base-input__label-text">
        {{ label }}
        <span v-if="required" class="required-star">*</span>
      </div>
      <input
        v-bind="$attrs"
        :type="type"
        :value="value"
        v-on="inputListeners"
        ref="input"
        class="base-input__input"
      />
    </label>
  </div>
</template>
<script>
export default {
  name: "BaseInput",
  inheritAttrs: false,
  props: {
    label: String,
    value: String,
    type: {
      type: String,
      default: "text"
    }
  },
  computed: {
    inputListeners: function() {
      let vm = this;
      return Object.assign({}, this.$listeners, {
        input: function(event) {
          vm.$emit("input", event.target.value);
        }
      });
    },
    required() {
      return this.$attrs.required !== undefined;
    }
  },

  data() {
    return {};
  },

  mounted() {
    if (this.$attrs.focused !== undefined) {
      this.$refs.input.focus();
    }
  }
};
</script>

<style src="./BaseInput.styl" lang="stylus"></style>
