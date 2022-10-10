import Vue from "vue";

import { DateManager } from "@/core/utils/dateManager";

Vue.filter("formatDate", (val) => DateManager.format(val));
