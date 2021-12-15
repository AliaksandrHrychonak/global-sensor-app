import React, { FC } from "react";
import mail from "../../images/icons/mail.svg";
import phone from "../../images/icons/phone.svg";
import location from "../../images/icons/location.svg";

import "./ContactInfo.scss";

interface ContactInfoProps {
  t: Function;
}

const ContactInfo: FC<ContactInfoProps> = ({ t }) => {
  const contactInfo = {
    title: "contact-title",
    number_ynp: "contact-number-ynp",
    location_href: "https://goo.gl/maps/13HtALmV24DZuEV99",
    location_country: "contact-location-country",
    location_index: "contact-location-index",
    location_adress: "contact-location-adress",
    tel_main: "+375291010216",
    tel_additional: "+375296458005",
    mail_main: "info@globalsensor.pro",
    mail_additional: "support@globalsensor.pro",
  };

  return (
    <article className="info">
      <div className="info__content info__content_type_head">
        <h2 className="info__title">{t(contactInfo.title)}</h2>
        <p className="info__subtitle">{t(contactInfo.number_ynp)}</p>
      </div>
      <div className="info__content info__content_type_mid">
        <a
          href={contactInfo.location_href}
          style={{ backgroundImage: `url(${location})` }}
          className="info__link-location"
          target="_blank"
          rel="noopener noreferrer"
        > </a>
        <div>
          <p className="info__location">{t(contactInfo.location_country)}</p>
          <p className="info__location">{t(contactInfo.location_index)}</p>
          <p className="info__location">{t(contactInfo.location_adress)}</p>
        </div>
      </div>
      <div className="info__content info__content_type_bottom">
        <div className="info__content_box">
          <img src={phone} alt="tel" className="info__icon" />
          <a href={`tel: ${contactInfo.tel_main}`} className="info__link" >{contactInfo.tel_main}</a>
          <hr className="info__line" />
          <a className="info__link" href={`tel: ${contactInfo.tel_additional}`}>
            {contactInfo.tel_additional}
          </a>
        </div>
        <div className="info__content_box">
          <img src={mail} alt="mail" className="info__icon" />
          <a className="info__link" href={`mailto:: ${contactInfo.mail_main}`}>
            {contactInfo.mail_main}
          </a>
          <hr className="info__line"/>
          <a className="info__link" href={`mailto:: ${contactInfo.mail_additional}`}>
            {contactInfo.mail_additional}
          </a>
        </div>
      </div>
    </article>
  );
};

export default ContactInfo;
