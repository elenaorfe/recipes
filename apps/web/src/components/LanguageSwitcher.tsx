import React, { useState } from "react";
import i18next from "i18next";

const LanguageSwitcher: React.FC = () => {
  const [language, setLanguage] = useState<string>(i18next.language);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    i18next.changeLanguage(lang);
  };

  return (
    <select
      value={language}
      onChange={(e) => handleLanguageChange(e.target.value)}
      className="px-2 rounded-md text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer border border-gray-300"
    >
      <option value="en-US">English</option>
      <option value="es-ES">Español</option>
    </select>
  );
};

export default LanguageSwitcher;
