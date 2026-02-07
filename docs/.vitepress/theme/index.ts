import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import DatePicker from "../../../src/DatePicker.vue";
import "../../../src/style.css";
import "./custom.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("StitchDatePicker", DatePicker);
  },
} satisfies Theme;
