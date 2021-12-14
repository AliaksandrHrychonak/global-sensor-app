import React, { FC } from 'react';
import './MobileMenu.scss';
import NavBar from '../NavBar/NavBar';
import CloseButton from '../Icons/CloseButton/CloseButton';

interface MobileMenuProps {
  toggleMenu: () => void,
  isOpen: boolean,
  isMobile: boolean,
}

export const MobileMenu: FC<MobileMenuProps> = ({isOpen, isMobile, toggleMenu}) => {
  return (
    <aside className={`menu ${isOpen && isMobile ? "menu_type_visible" : "menu_type_hidden" }`}>
      <div className="menu__lens" onClick={toggleMenu}></div>
      <div className="menu__content">
        <CloseButton closeEvent={toggleMenu} />
        <div className="menu__content-head">head</div>
        <NavBar rowLink={false} isMobile={isMobile} toggleMenu={toggleMenu}/>
      </div>
    </aside>
  )
}
