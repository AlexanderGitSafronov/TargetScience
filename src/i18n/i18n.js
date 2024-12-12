import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { LOCALS } from "./constants";
import { en } from "./copies/en";
import { ru } from "./copies/ru";

const resources = {
  [LOCALS.EN]: {
    translation: en,
  },
  [LOCALS.RU]: {
    translation: ru,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    supportedLngs: ["ru", "en"],
    resources,
    // lng: "ru",

    fallbackLng: LOCALS.EN,

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
