import * as React from 'react';
import "./Header.scss"
import NavBar from '../NavBar/NavBar';
import logo from '../../images/icons/logo.svg';
import { MenuButton } from '../Icons/MenuButton/MenuButton';
import { availableLanguages } from "../../i18n";
import { useTranslation } from 'react-i18next';
import { SwitchLanguageButton } from '../Icons/SwitchLanguageButton/SwitchLanguageButton';
import { AccountBar } from '../AccountBar/AccountBar';

export interface IHeaderProps {
  isMobile: boolean,
  toggleMenu: React.MouseEventHandler
}

const Header: React.FunctionComponent<IHeaderProps> = ({ isMobile, toggleMenu }) => {
  const {t, i18n} = useTranslation()
  return (
    <header className={`header ${isMobile ? "header_type_reverse" : "" }`}>
      <img alt={t('logo')} className="header__logo" src={logo} />
      {
        isMobile
        ?
        <MenuButton isMobile={isMobile} toggleMenu={toggleMenu} />
        :
        <NavBar rowLink={true} isMobile={isMobile} toggleMenu={toggleMenu} /> 
      }
      { !isMobile && <SwitchLanguageButton i18n={i18n} availableLanguages={availableLanguages} /> }
      <AccountBar isMobile={isMobile} toggleMenu={toggleMenu}/>
    </header>
  );
};

export default Header;
