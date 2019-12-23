import Vue from "vue";

const localDate = function(value, opts) {
  if (!value) return "";
  let dateObj = new Date(value);
  let options = {};
  let presets = {
    date: {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    },
    time: {
      hour: "numeric",
      minute: "numeric"
    }
  };
  if (opts && typeof opts === "string") {
    if (presets[opts]) {
      options = {
        ...options,
        ...presets[opts]
      };
    } else {
      console.error(
        "Preset not found. Please, use full options Object (see documentation for Date.toLocalString()) or add preset to filter LocalDate in ~plugins/filters.js"
      );
    }
  }
  if (opts && typeof opts === "object") {
    options = {
      ...options,
      ...opts
    };
  }
  return dateObj.toLocaleString("ru-Ru", options);
};

Vue.filter("localDate", localDate);
