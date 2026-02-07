import { defineNuxtModule, addComponent } from "@nuxt/kit";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineNuxtModule({
  meta: {
    name: "@bturkis/datepicker",
    configKey: "btDatepicker",
    compatibility: { nuxt: ">=3.0.0" },
  },
  defaults: {},
  setup(_options, nuxt) {
    // Inject component CSS
    const cssPath = resolve(__dirname, "./style.css");
    nuxt.options.css.push(cssPath);

    // Register component (client-only — uses Teleport + DOM APIs)
    addComponent({
      name: "BtDatePicker",
      filePath: resolve(__dirname, "./DatePicker.vue"),
      mode: "client",
    });

    addComponent({
      name: "DatePicker",
      filePath: resolve(__dirname, "./DatePicker.vue"),
      mode: "client",
    });

    // Backward compatibility
    addComponent({
      name: "StitchDatePicker",
      filePath: resolve(__dirname, "./DatePicker.vue"),
      mode: "client",
    });
  },
});
