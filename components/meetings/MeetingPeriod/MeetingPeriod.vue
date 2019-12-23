<template>
  <div class="meeting-period">
    <div class="meeting-period__title">
      <slot name="title"></slot>
    </div>
    <div class="meeting-period__dates">
      <svg-icon name="date" class="meeting-period__dates-icon" />
      <div class="meeting-period__dates-info">
        <div class="meeting-period__date">
          {{ start | localDate("date") }}
        </div>
        <div class="meeting-period__date">
          {{ end | localDate("date") }}
        </div>
      </div>
    </div>
    <div class="meeting-period__times">
      <svg-icon name="time" class="meeting-period__times-icon" />
      <div class="meeting-period__time-info">
        <div class="meeting-period__time">
          {{ start | localDate("time") }}
        </div>
        <div class="meeting-period__time">
          {{ end | localDate("time") }}
        </div>
      </div>
    </div>
    <div v-if="$slots.default" class="meeting-period__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "MeetingPeriod",
  props: {
    start: {
      type: [String, Number, Date],
      required: true,
      validator: value => {
        if (typeof value === "string") {
          return !!Date.parse(value);
        } else {
          return true;
        }
      }
    },
    end: {
      type: [String, Number, Date],
      required: true,
      validator: value => {
        if (typeof value === "string") {
          return !!Date.parse(value);
        } else {
          return true;
        }
      }
    }
  }
};
</script>

<style src="./MeetingPeriod.styl" lang="stylus"></style>
