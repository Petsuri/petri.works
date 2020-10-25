import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationFI from './locales/fi/translation.json';
import translationEN from './locales/en/translation.json';


const translations = {
    fi: {
        translation: translationFI,
    },
    en: {
        translation: translationEN,
    },
};

i18n
.use(initReactI18next)
.init({
    resources: translations,
    lng: 'fi',
    fallbackLng: 'en',
    debug: false,
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
        useSuspense: false,
    },
});

export default i18n;
