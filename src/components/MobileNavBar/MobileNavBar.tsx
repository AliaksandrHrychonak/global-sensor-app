import React, { FC } from 'react'
import "./MobileNavBar.scss"
import { IRoutes } from '../../types'
import NavBar from '../NavBar/NavBar'
import CloseButton from '../pages/CloseButton/CloseButton'

interface MobileNavBarProps {
  routes: Array<IRoutes>,
  toggleMenu: () => void,
  isOpen: boolean,
  isMobile: boolean,
}

export const MobileNavBar: FC<MobileNavBarProps> = ({isOpen, isMobile, routes, toggleMenu}) => {
  return (
    <aside className={`menu ${isOpen && isMobile ? "menu_type_visible" : "menu_type_hidden" }`}>
      <div className="menu__lens" onClick={toggleMenu}></div>
      <div className="menu__content">
        <CloseButton closeEvent={toggleMenu} />
        <div className="menu__content-head">head</div>
        <NavBar rowLink={false} routes={routes} isMobile={isMobile} toggleMenu={toggleMenu}/>
      </div>
    </aside>
  )
}
