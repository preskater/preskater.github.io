import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en_cap.json';
import fr from './locales/fr_cap.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: fr
      },
      fr: {
        translation: en
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;