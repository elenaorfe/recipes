import React, { useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const [language, setLanguage] = useState<string>(i18next.language);
  const { t } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    i18next.changeLanguage(lang);
  };

  return (
    <select
      id="language-switcher"
      value={language}
      onChange={(e) => handleLanguageChange(e.target.value)}
      className="px-2 rounded-md text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer border border-gray-300"
      aria-label={t("language_switcher.label")}
    >
      <option value="en-US">English</option>
      <option value="es-ES">Español</option>
    </select>
  );
};

export default LanguageSwitcher;
