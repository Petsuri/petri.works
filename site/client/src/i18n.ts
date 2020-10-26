import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationFI from "./locales/fi/translation.json";
import translationEN from "./locales/en/translation.json";
import { Locale } from "./locales/Locale";

const translations = {
  fi: {
    translation: translationFI,
  },
  en: {
    translation: translationEN,
  },
};

const languageKey = 'locale.current';

export const changeLanguage = (locale: Locale): void => {
  i18n.changeLanguage(locale.locale);
  localStorage.setItem(languageKey, locale.locale);
}

export const getLanguage = (): Locale => {
  const current = localStorage.getItem(languageKey) || '';
  return Locale.find(current);
}

i18n.use(initReactI18next).init({
  resources: translations,
  lng: getLanguage().locale,
  fallbackLng: "en",
  debug: false,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
