import { createContext, useContext, useState } from "react";
import enUS from "./en-US";
import zhCN from "./zh-CN";

export const i18n = {
  "en-US": enUS,
  "zh-CN": zhCN,
};

/**
 * @typedef {keyof i18n} Language
 */

export const languageLabels = {
  "en-US": "English",
  "zh-CN": "中国人",
};

const i18nContext = createContext({
  language: navigator.language,
  /**
   * @type {typeof i18n["en-US"]}
   */
  text: i18n[navigator.language],
  /**
   *
   * @param {Language} language
   */
  changeLanguage: (language) => {
    console.log("language", language);
  },
});

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState(navigator.language);

  function changeLanguage(ln) {
    setLanguage(ln);
  }

  return (
    <i18nContext.Provider
      value={{
        language,
        text: i18n[language],
        changeLanguage,
      }}
    >
      {children}
    </i18nContext.Provider>
  );
}

export const useI18nText = () => useContext(i18nContext).text;
export const useI18nLanguage = () => useContext(i18nContext).language;
export const useChangeI18nLanguage = () =>
  useContext(i18nContext).changeLanguage;
export const useI18n = () => useContext(i18nContext);
