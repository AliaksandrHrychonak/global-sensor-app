import * as React from "react";
import { FC } from "react";
import AboutCompany from "../AboutCompany/AboutCompany";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";

interface IMainProps {
  isMobile: boolean;
  toggleMenu: (e: React.MouseEvent<HTMLElement>) => void;
}

export const Main: FC<IMainProps> = ({ isMobile, toggleMenu }) => {
  return (
    <>
      <Header isMobile={isMobile} toggleMenu={toggleMenu} />
      <main className="main">
        <Promo title="promo-title" subtitle="promo-subtitle" />
        <AboutCompany  title="about-company" />
      </main>
      <Footer />
    </>
  );
};
