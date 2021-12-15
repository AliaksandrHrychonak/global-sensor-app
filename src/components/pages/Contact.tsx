import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import ContactInfo from "../ContactInfo/ContactInfo";
import ContainerContact from "../Containers/ContainerContact";
import Footer from "../Footer/Footer";
import ContactForm from "../Forms/ContactForm/ContactForm";
import Header from "../Header/Header";

interface ContactProps {
  isMobile: boolean;
  toggleMenu: (e: React.MouseEvent<HTMLElement>) => void;
}

export const Contact: FC<ContactProps> = ({isMobile, toggleMenu}) => {
  const {t} = useTranslation()
  console.log(typeof t);
  
  return (
    <>
      <Header isMobile={isMobile} toggleMenu={toggleMenu}/>
      <main className="main main_type_contact">
        <ContainerContact>
          <ContactInfo t={t}/>
          <ContactForm />
        </ContainerContact>
      </main>
      <Footer />
    </>
  );
};
