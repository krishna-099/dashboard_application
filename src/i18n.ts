import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import * as en from "./locales/en/index";

const translationsJson = {
  en: {
    translation: { ...en.translateEn },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: translationsJson,
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });
