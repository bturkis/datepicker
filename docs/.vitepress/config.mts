import { defineConfig } from "vitepress";

const shared = {
  base: "/datepicker/" as const,
  appearance: "dark" as const,
  head: [
    [
      "link",
      { rel: "icon", type: "image/svg+xml", href: "/datepicker/favicon.svg" },
    ],
    [
      "script",
      {
        defer: "",
        src: "https://umami.neisterse.com/script.js",
        "data-website-id": "f08f01d5-0f1d-40b7-a8d0-9efcc0fadfd8",
      },
    ],
  ] as any,
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "@bturkis/datepicker",
    socialLinks: [
      { icon: "github", link: "https://github.com/bturkis/datepicker" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "© 2025-2026 bturkis",
    },
    search: { provider: "local" },
  } as any,
};

/* ------------------------------------------------------------------ */
/*  prefix = "" for root (English), "/tr" for Turkish, "/de" for DE…  */
/* ------------------------------------------------------------------ */

function nav(
  prefix: string,
  guide: string,
  demos: string,
  api: string,
  changelog: string,
) {
  return [
    { text: guide, link: `${prefix}/guide/getting-started` },
    { text: demos, link: `${prefix}/guide/demos` },
    { text: api, link: `${prefix}/api/props` },
    {
      text: "v1.3.0",
      items: [
        { text: changelog, link: `${prefix}/changelog` },
        {
          text: "npm",
          link: "https://www.npmjs.com/package/@bturkis/datepicker",
        },
      ],
    },
  ];
}

function sidebar(
  prefix: string,
  guide: string,
  gettingStarted: string,
  demos: string,
  localization: string,
  api: string,
  propsEvents: string,
  changelog: string,
) {
  return [
    {
      text: guide,
      items: [
        { text: gettingStarted, link: `${prefix}/guide/getting-started` },
        { text: demos, link: `${prefix}/guide/demos` },
        { text: localization, link: `${prefix}/guide/localization` },
      ],
    },
    {
      text: api,
      items: [{ text: propsEvents, link: `${prefix}/api/props` }],
    },
    { text: changelog, link: `${prefix}/changelog` },
  ];
}

export default defineConfig({
  ...shared,
  title: "@bturkis/datepicker",
  description: "Premium glassmorphism DatePicker for Vue 3 / Nuxt 3 / Nuxt 4",

  locales: {
    root: {
      label: "English",
      lang: "en",
      themeConfig: {
        ...shared.themeConfig,
        nav: nav("", "Guide", "Demos", "API", "Changelog"),
        sidebar: sidebar(
          "",
          "Guide",
          "Getting Started",
          "Interactive Demos",
          "Localization",
          "API Reference",
          "Props & Events",
          "Changelog",
        ),
      },
    },
    tr: {
      label: "Turkce",
      lang: "tr",
      description: "Vue 3 / Nuxt 3 / Nuxt 4 icin premium DatePicker",
      themeConfig: {
        ...shared.themeConfig,
        nav: nav("/tr", "Rehber", "Demolar", "API", "Degisiklikler"),
        sidebar: sidebar(
          "/tr",
          "Rehber",
          "Baslangic",
          "Canli Demolar",
          "Dil Destegi",
          "API Referansi",
          "Proplar ve Eventler",
          "Degisiklikler",
        ),
      },
    },
    de: {
      label: "Deutsch",
      lang: "de",
      description: "Premium DatePicker fur Vue 3 / Nuxt 3 / Nuxt 4",
      themeConfig: {
        ...shared.themeConfig,
        nav: nav("/de", "Anleitung", "Demos", "API", "Anderungen"),
        sidebar: sidebar(
          "/de",
          "Anleitung",
          "Erste Schritte",
          "Interaktive Demos",
          "Lokalisierung",
          "API-Referenz",
          "Props & Events",
          "Anderungen",
        ),
      },
    },
    fr: {
      label: "Francais",
      lang: "fr",
      description: "DatePicker premium pour Vue 3 / Nuxt 3 / Nuxt 4",
      themeConfig: {
        ...shared.themeConfig,
        nav: nav("/fr", "Guide", "Demos", "API", "Changelog"),
        sidebar: sidebar(
          "/fr",
          "Guide",
          "Demarrage",
          "Demos Interactives",
          "Localisation",
          "Reference API",
          "Props & Evenements",
          "Changelog",
        ),
      },
    },
    es: {
      label: "Espanol",
      lang: "es",
      description: "DatePicker premium para Vue 3 / Nuxt 3 / Nuxt 4",
      themeConfig: {
        ...shared.themeConfig,
        nav: nav("/es", "Guia", "Demos", "API", "Cambios"),
        sidebar: sidebar(
          "/es",
          "Guia",
          "Inicio Rapido",
          "Demos Interactivos",
          "Localizacion",
          "Referencia API",
          "Props y Eventos",
          "Cambios",
        ),
      },
    },
    it: {
      label: "Italiano",
      lang: "it",
      description: "DatePicker premium per Vue 3 / Nuxt 3 / Nuxt 4",
      themeConfig: {
        ...shared.themeConfig,
        nav: nav("/it", "Guida", "Demo", "API", "Modifiche"),
        sidebar: sidebar(
          "/it",
          "Guida",
          "Primi Passi",
          "Demo Interattive",
          "Localizzazione",
          "Riferimento API",
          "Props ed Eventi",
          "Modifiche",
        ),
      },
    },
    pt: {
      label: "Portugues",
      lang: "pt",
      description: "DatePicker premium para Vue 3 / Nuxt 3 / Nuxt 4",
      themeConfig: {
        ...shared.themeConfig,
        nav: nav("/pt", "Guia", "Demos", "API", "Alteracoes"),
        sidebar: sidebar(
          "/pt",
          "Guia",
          "Inicio Rapido",
          "Demos Interativos",
          "Localizacao",
          "Referencia API",
          "Props e Eventos",
          "Alteracoes",
        ),
      },
    },
    nl: {
      label: "Nederlands",
      lang: "nl",
      description: "Premium DatePicker voor Vue 3 / Nuxt 3 / Nuxt 4",
      themeConfig: {
        ...shared.themeConfig,
        nav: nav("/nl", "Gids", "Demos", "API", "Wijzigingen"),
        sidebar: sidebar(
          "/nl",
          "Gids",
          "Aan de Slag",
          "Interactieve Demos",
          "Lokalisatie",
          "API-referentie",
          "Props & Gebeurtenissen",
          "Wijzigingen",
        ),
      },
    },
    ru: {
      label: "Russkiy",
      lang: "ru",
      description: "Premium DatePicker dlya Vue 3 / Nuxt 3 / Nuxt 4",
      themeConfig: {
        ...shared.themeConfig,
        nav: nav("/ru", "Rukovodstvo", "Demo", "API", "Izmeneniya"),
        sidebar: sidebar(
          "/ru",
          "Rukovodstvo",
          "Nachalo Raboty",
          "Interaktivnye Demo",
          "Lokalizatsiya",
          "Spravochnik API",
          "Svoystva i Sobytiya",
          "Izmeneniya",
        ),
      },
    },
    ar: {
      label: "العربية",
      lang: "ar",
      description: "DatePicker متميز لـ Vue 3 / Nuxt 3 / Nuxt 4",
      themeConfig: {
        ...shared.themeConfig,
        nav: nav("/ar", "الدليل", "العروض", "API", "التغييرات"),
        sidebar: sidebar(
          "/ar",
          "الدليل",
          "البداية",
          "عروض تفاعلية",
          "الترجمة",
          "مرجع API",
          "الخصائص والأحداث",
          "التغييرات",
        ),
      },
    },
    ja: {
      label: "日本語",
      lang: "ja",
      description: "Vue 3 / Nuxt 3 / Nuxt 4 向けプレミアムDatePicker",
      themeConfig: {
        ...shared.themeConfig,
        nav: nav("/ja", "ガイド", "デモ", "API", "変更履歴"),
        sidebar: sidebar(
          "/ja",
          "ガイド",
          "はじめに",
          "インタラクティブデモ",
          "多言語対応",
          "APIリファレンス",
          "プロパティとイベント",
          "変更履歴",
        ),
      },
    },
    ko: {
      label: "한국어",
      lang: "ko",
      description: "Vue 3 / Nuxt 3 / Nuxt 4용 프리미엄 DatePicker",
      themeConfig: {
        ...shared.themeConfig,
        nav: nav("/ko", "가이드", "데모", "API", "변경사항"),
        sidebar: sidebar(
          "/ko",
          "가이드",
          "시작하기",
          "인터랙티브 데모",
          "다국어 지원",
          "API 레퍼런스",
          "Props & 이벤트",
          "변경사항",
        ),
      },
    },
    zh: {
      label: "中文",
      lang: "zh",
      description: "Vue 3 / Nuxt 3 / Nuxt 4 的高级日期选择器",
      themeConfig: {
        ...shared.themeConfig,
        nav: nav("/zh", "指南", "演示", "API", "更新日志"),
        sidebar: sidebar(
          "/zh",
          "指南",
          "快速开始",
          "交互式演示",
          "国际化",
          "API参考",
          "属性与事件",
          "更新日志",
        ),
      },
    },
    pl: {
      label: "Polski",
      lang: "pl",
      description: "Premium DatePicker dla Vue 3 / Nuxt 3 / Nuxt 4",
      themeConfig: {
        ...shared.themeConfig,
        nav: nav("/pl", "Poradnik", "Demo", "API", "Zmiany"),
        sidebar: sidebar(
          "/pl",
          "Poradnik",
          "Pierwsze Kroki",
          "Interaktywne Demo",
          "Lokalizacja",
          "Dokumentacja API",
          "Propsy i Zdarzenia",
          "Zmiany",
        ),
      },
    },
    uk: {
      label: "Українська",
      lang: "uk",
      description: "Premium DatePicker dlya Vue 3 / Nuxt 3 / Nuxt 4",
      themeConfig: {
        ...shared.themeConfig,
        nav: nav("/uk", "Посібник", "Демо", "API", "Зміни"),
        sidebar: sidebar(
          "/uk",
          "Посібник",
          "Початок роботи",
          "Інтерактивні демо",
          "Локалізація",
          "Довідник API",
          "Властивості та події",
          "Зміни",
        ),
      },
    },
  },
});
