import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Logo from "../Icons/Logo/Logo";
import fb from "../../images/icons/fb.svg";
import instagram from '../../images/icons/instagram.svg'
import linkedin from "../../images/icons/linkedin.svg"
import "./Footer.scss";
interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  const { t } = useTranslation();
  const footerList: any = [
    {
      title: "footer-service",
      items: [
        {
          name: "footer-support",
          path: "mailto: info@globalsensor.com",
        },
        {
          name: "footer-contact",
          path: "/contact",
        },
        {
          name: "footer-be-dealer",
          path: "/contact",
        },
      ],
    },
    {
      title: "footer-module",
      items: [
        {
          name: "GS2100",
          path: "/gs2100",
        },
        {
          name: "GS2101",
          path: "/gs2100-01",
        },
        {
          name: "GS2102",
          path: "/gs2100-02",
        },
        {
          name: "GS450",
          path: "/gs450",
        },
        {
          name: "GS500",
          path: "/gs500",
        },
      ],
    },
    {
      title: "footer-social-network",
      items: [
        {
          name: "footer-social-fb",
          path: "s",
          image: fb
        },
        {
          name: "footer-social-inst",
          path: "s",
          image: instagram
        },
        {
          name: "footer-social-link",
          path: "linkedin",
          image: linkedin
        },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <Logo />
          {footerList.map((item: { title: any; items: any[]; }) => (
            <ul key={item.title} className="footer__list">
              <h4 className="footer__title">{t(item.title)}</h4>
              {item.items.map((e) => (
                <li key={e.name} className="footer__list_item">
                  <a href={e.path} className="footer__link">
                    { e.image && <img  alt={e.name} src={e.image} className="footer__social_icon"/> }
                    <p className="footer__subtitle">{t(e.name)}</p>
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="footer__content footer__content_theme_line">
          <span className="footer__copyright">
            Copyright &copy; 2021 GLOBAL SENSOR ltd. All rights reserved.
          </span>

          <Link to="/terms">
            <p className="footer__terms">{t("footer-terms")}</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
