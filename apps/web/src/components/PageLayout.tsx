import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

interface PageLayoutProps {
  showBackLink?: boolean;
  header?: React.ReactNode;
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  showBackLink = false,
  header,
  children,
}) => {
  const { t } = useTranslation();

  return (
    <section className="max-w-4xl mx-auto p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        {showBackLink && (
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-800 mb-4 inline-flex items-center"
          >
            ← {t("recipe.action.back")}
          </Link>
        )}
        {header}
        <LanguageSwitcher />
      </div>
      {children}
    </section>
  );
};

export default PageLayout;
