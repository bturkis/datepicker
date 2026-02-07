# Degisiklik Gunlugu

Bu projedeki tum onemli degisiklikler burada belgelenir.

## [1.3.0] -- 2026-02-07

### Yeni Ozellikler

- **Nuxt 3 / Nuxt 4 Modulu** -- `@bturkis/datepicker/nuxt` bileseni otomatik kaydeder ve CSS enjekte eder
- **SSR Destegi** -- Tum tarayici API cagrilari sunucu tarafi render icin korunur
- **Acik / Koyu Tema** -- `data-theme`, `.light`/`.dark` siniflari ve `prefers-color-scheme` otomatik algilama ile CSS degisken sistemi
- **Yeni CSS Degiskenleri** -- `--sdp-hover-bg`, `--sdp-hover-border`, `--sdp-focus-shadow`, `--sdp-shadow`

### Degisiklikler

- Tum kodlanmis `rgba()` hover degerleri CSS degiskenleri ile degistirildi
- CI is akisi yayinlamadan once Vitest testlerini calistirir

---

## [1.2.0] -- 2026-02-07

### Yeni Ozellikler

- **Bagimsiz Saat Secici** -- Yalnizca saat secimi icin `type="time"` modu
- **12 Saat AM/PM Formati** -- AM/PM degistirme dugmeleri ile `hour-format="12"` prop'u
- **Tarih-Saat Secici** -- `type="datetime-local"` tarih ve saati bir secicide birlestirir
- **15 Dil Destegi** -- Yerlesik diller: TR, EN, DE, FR, ES, IT, PT, RU, AR, JA, ZH, KO, NL, PL, UK
- **Ozel Dil Kaydi** -- Ozel diller eklemek icin `registerLocale()` API'si
- **Mobil Bottom Sheet** -- Mobil cihazlari otomatik algilar ve dokunmatik uyumlu alt sayfa olarak gosterir
- **Dakika Adimi** -- Ozel dakika artimlari icin `minute-step` prop'u
- **VitePress Dokumantasyon** -- Etkilesimli demolar ile kapsamli dokumantasyon sitesi

---

## [1.1.0] -- 2026-02-05

### Yeni Ozellikler

- Gorsel vurgulama ile tarih araligi secimi
- Token destekli ozel format prop'u (`YYYY`, `MM`, `DD`, vb.)
- Min/Max tarih kisitlamalari
- Tam ozellestirme icin CSS ozel ozellikleri

---

## [1.0.0] -- 2026-02-04

### Ilk Surum

- Glassmorfizm tasarimli tekli tarih secici
- Varsayilan koyu mod
- Turkce dil destegi
- Vue 3 + TypeScript
- Sifir calistirma zamani bagimsiligi
