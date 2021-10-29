import * as React from 'react';
import "./Header.scss"
import { IRoutes } from '../../types';
import NavBar from '../NavBar/NavBar';
import { BackButton } from '../Icons/Buttons/BackButton/BackButton';
import { MenuIcon } from '../Icons/MenuIcon/MenuIcon';

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
        <MenuIcon isMobile={isMobile} toggleMenu={toggleMenu} />
        :
        <NavBar routes={routes} rowLink={true} isMobile={isMobile} toggleMenu={toggleMenu}/> 
      }

    </header>
  );
};

export default Header;
