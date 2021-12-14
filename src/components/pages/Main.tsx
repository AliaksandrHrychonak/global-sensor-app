import * as React from 'react';
import { FC } from 'react';
import Header from '../Header/Header';

interface IMainProps {
  isMobile: boolean,
  toggleMenu: (e: React.MouseEvent<HTMLElement>) => void,
}

export const Main: FC<IMainProps> = ({isMobile, toggleMenu }) => {
  return (
    <main className="main">
      <Header isMobile={isMobile} toggleMenu={toggleMenu} />
    </main>
  );
};



