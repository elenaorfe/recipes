import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { DEFAULT_LOCALE, translations } from "../lib/locales";

i18n.use(initReactI18next).init({
  resources: translations,
  fallbackLng: DEFAULT_LOCALE,
  lng: localStorage.getItem("locale") || navigator.language || DEFAULT_LOCALE,
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("locale", lng);
});

export default i18n;
