import i18n from "i18next";
import backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(backend)
  .use(initReactI18next)
  .init({
    lng: "en-US",
    fallbackLng: "en-US",
    debug: true,
    supportedLngs: ["en", "en-US", "nl"],
    interpolation: {
      escapeValue: false,
      formatSeparator: ","
    },
    react: {
      bindI18n: "languageChanged loaded",
      bindStore: "added removed",
      nsMode: "default"
    }
  });

export default i18n;
