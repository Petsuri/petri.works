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

const currentLocaleKey = 'locale.current.shortcode';
export const changeLocale = (locale: Locale): void => {
  i18n.changeLanguage(locale.shortCode);
  localStorage.setItem(currentLocaleKey, locale.shortCode);
}

export const getLocale = (): Locale => {
  const current = localStorage.getItem(currentLocaleKey) || '';
  return Locale.find(current);
}

i18n.use(initReactI18next).init({
  resources: translations,
  lng: getLocale().shortCode,
  fallbackLng: Locale.english().shortCode,
  debug: false,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
