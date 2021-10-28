import * as React from 'react';
import "./Header.scss"
import { IRoutes } from '../../types';
import NavBar from '../NavBar/NavBar';
import { routes } from '../utils/routes';

export interface IHeaderProps {
  logo: string,
  isMobile: boolean,
  routes: Array<IRoutes>, 
  toggleMenu: () => void,
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  
  return (
    <header className={`header ${props.isMobile ? "header_type_reverse" : "" }`}>
      <img src={props.logo} alt='логотип' className="header__logo" />
      {
        props.isMobile 
        ?
        <button onClick={props.toggleMenu} className={`header__button-menu ${props.isMobile ? 'header__button-menu_type_visible' : 'header__button-menu_type_hidden'}`} ><span></span></button>
        :
        <NavBar routes={routes} rowLink={true} isMobile={props.isMobile} toggleMenu={props.toggleMenu}/> 
      }
      
      
    </header>
  );
};

export default Header;
