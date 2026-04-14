import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container">
        <p className="m-0 text-center">{t('footer.copyright')}</p>
      </div>
    </footer>
  );
}
