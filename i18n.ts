// app/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './public/locales/en/common.json';
import ar from './public/locales/ar/common.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    lng: 'en', // default language
    fallbackLng: 'en', // if language is not available, fallback to English
    interpolation: {
      escapeValue: false, // React already escapes HTML
    },
  });

export default i18n;
