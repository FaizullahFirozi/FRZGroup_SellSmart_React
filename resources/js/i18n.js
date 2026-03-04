import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // Import the language detector
import en from '@lang/en.json';
import ps from '@lang/ps.json';
import dr from '@lang/dr.json';

i18n
  .use(LanguageDetector) // Use the language detector
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
        en: { translation: en },
        ps: { translation: ps },
        dr: { translation: dr },
    },
    fallbackLng: "dr", // Default language if no language is detected
    detection: {
      order: ['cookie', 'localStorage', 'navigator', 'htmlTag'], // Detection order
      caches: ['cookie'], // Save the selected language in a cookie
    },
    interpolation: {
      escapeValue: false // React already safes from XSS
    }
  });

export default i18n;