import * as React from 'react';
import { IHeaderProps } from '../../types';
import NavBar from '../NavBar/NavBar';
import { routes } from '../utils/routes';

const Header: React.FunctionComponent<IHeaderProps> = (props: React.PropsWithChildren<IHeaderProps>) => {
  return (
    <header className="header">
      <img src={props.logo} alt="" className="header__logo" />
      <NavBar routes={routes} rowLink={true}/>
    </header>
  );
};

export default Header;
