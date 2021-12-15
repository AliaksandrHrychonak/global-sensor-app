import React, { FC } from "react";
import "./AboutCompany.scss";
import idea from "../../images/icons/idea.svg";
import parament from "../../images/icons/parament.svg";
import option from "../../images/icons/option.svg";
import radiation from "../../images/icons/radiation.svg";
import { useTranslation } from "react-i18next";

interface AboutCompanyProps {
  title: string;
}

const AboutCompany: FC<AboutCompanyProps> = ({ title }) => {
  const { t } = useTranslation();
  return (
    <section className="about">
      <h2 className="about__title">{t(title)}</h2>
      <div className="facts">
        <div className="fact-main">
          <img src={radiation} alt="" className="fact__image fact__image_type_main" />
          <p className="fact__description fact__description_type_main">
           {t("about-fact-company")}
          </p>
        </div>
        <ul className="facts__group">
          <li className="fact">
            <img src={option} alt="" className="fact__image" />
            <p className="fact__description">
            {t("about-fact-integration")}
            </p>
          </li>
          <li className="fact">
            <img src={idea} alt="" className="fact__image" />
            <p className="fact__description">
            {t("about-fact-developers")}
            </p>
          </li>
          <li className="fact">
            <img src={parament} alt="" className="fact__image" />
            <p className="fact__description">
            {t("about-fact-protected")}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutCompany;
