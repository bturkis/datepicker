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
    // Resolve the package root (one level up from src/)
    const pkgRoot = resolve(__dirname, "..");

    // Inject component CSS from dist
    const cssPath = resolve(pkgRoot, "dist/bt-datepicker.css");
    nuxt.options.css.push(cssPath);

    // Register component — point to the source .vue file
    // We include src/DatePicker.vue + src/components/ in the published package
    const componentPath = resolve(pkgRoot, "src/DatePicker.vue");

    addComponent({
      name: "BtDatePicker",
      filePath: componentPath,
      mode: "client",
    });

    addComponent({
      name: "DatePicker",
      filePath: componentPath,
      mode: "client",
    });

    // Backward compatibility
    addComponent({
      name: "StitchDatePicker",
      filePath: componentPath,
      mode: "client",
    });
  },
});
