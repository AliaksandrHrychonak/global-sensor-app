import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import "./TermsList.scss";
interface TermsListProps {
  terms: any;
}

const TermsList: FC<TermsListProps> = ({ terms }) => {
  const { t } = useTranslation();
  return (
    <>
      {terms.map((item: any) => (
        <div key={item.title} className="terms">
          <h2 className="terms__title">{t(item.title)}</h2>
          {item.subtitles.map((element: any, index: any) => (
            <p key={index} className="terms__subtitle">
              {t(element.text)}
            </p>
          ))}
        </div>
      ))}
    </>
  );
};

export default TermsList;
