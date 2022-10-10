import Vue from "vue";

import { DateManager } from "../utils/dateManager";

Vue.filter("formatDatetime", function (value) {
  return DateManager.format(value);
});
