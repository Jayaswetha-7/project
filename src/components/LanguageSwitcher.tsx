import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="">
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
        className="text-center p-1 w-fit  outline-none  bg-white appearence-none  rounded-lg  text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option className="bg-white text-black"  value="en">
          En
        </option>
        <option className="bg-white text-black" value="ar">Ar</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
