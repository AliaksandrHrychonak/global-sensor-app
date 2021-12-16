import * as React from 'react';
import "./Header.scss"
import NavBar from '../NavBar/NavBar';
import { availableLanguages } from "../../i18n";
import { useTranslation } from 'react-i18next';
import { SwitchLanguageButton } from '../Icons/SwitchLanguageButton/SwitchLanguageButton';
import { AccountBar } from '../AccountBar/AccountBar';
import Logo from '../Icons/Logo/Logo';

export interface IHeaderProps {
  isMobile: boolean,
  toggleMenu: React.MouseEventHandler
}

const Header: React.FunctionComponent<IHeaderProps> = ({ isMobile, toggleMenu }) => {
  const {i18n} = useTranslation()
  return (
    <header className={`header ${isMobile ? "header_type_reverse" : "" }`}>
      <div className="header__content">
        <Logo />
        {!isMobile && <NavBar rowLink={true} isMobile={isMobile} toggleMenu={toggleMenu} /> }
        <div className='header__tools'>
          { !isMobile && <SwitchLanguageButton i18n={i18n} availableLanguages={availableLanguages} type="header" /> }
          <AccountBar isMobile={isMobile} toggleMenu={toggleMenu}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
