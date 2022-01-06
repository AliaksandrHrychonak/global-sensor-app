import React, { FC } from 'react';
import './MobileMenu.scss';
import NavBar from '../NavBar/NavBar';
import CloseButton from '../Icons/CloseButton/CloseButton';
import { SwitchLanguageButton } from '../Icons/SwitchLanguageButton/SwitchLanguageButton';
import { useTranslation } from 'react-i18next';
import { availableLanguages } from '../../i18n';
import AccountBar from '../AccountBar/AccountBar';

interface MobileMenuProps {
  toggleMenu: () => void,
  isOpen: boolean,
  isMobile: boolean,
}

export const MobileMenu: FC<MobileMenuProps> = ({isOpen, isMobile, toggleMenu}) => {
  const {i18n} = useTranslation()
  return (
    <aside className={`menu ${isOpen && isMobile ? "menu_type_visible" : "menu_type_hidden" }`}>
      <div className="menu__lens" onClick={toggleMenu}></div>
      <div className="menu__content">
        <CloseButton closeEvent={toggleMenu} />
        <div className="menu__content-head">
          <SwitchLanguageButton i18n={i18n} availableLanguages={availableLanguages} type="black"/>
        </div>
        <NavBar rowLink={false} isMobile={isMobile} toggleMenu={toggleMenu}/>
        <div className='menu__content-bottom'>
          <AccountBar isMobile={isMobile} toggleMenu={toggleMenu} locationMenu={true} />
        </div>
      </div>
    </aside>
  )
}
