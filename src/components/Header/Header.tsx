import * as React from 'react';
import "./Header.scss"
import { IRoutes } from '../../types';
import NavBar from '../NavBar/NavBar';
import { BackButton } from '../Buttons/BackButton/BackButton';

export interface IHeaderProps {
  logo: string,
  isMobile: boolean,
  routes: Array<IRoutes>, 
  toggleMenu: (e: React.MouseEvent<HTMLElement>) => void,
}

const Header: React.FunctionComponent<IHeaderProps> = ({logo, isMobile, routes, toggleMenu}) => {
  
  return (
    <header className={`header ${isMobile ? "header_type_reverse" : "" }`}>
      <BackButton />
      <img src={logo} alt='логотип' className="header__logo" />
      {
        isMobile 
        ?
        <button onClick={toggleMenu} className={`header__button-menu ${isMobile ? 'header__button-menu_type_visible' : 'header__button-menu_type_hidden'}`} ><span></span></button>
        :
        <NavBar routes={routes} rowLink={true} isMobile={isMobile} toggleMenu={toggleMenu}/> 
      }

    </header>
  );
};

export default Header;
