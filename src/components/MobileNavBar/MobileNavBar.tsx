import React, { FC } from 'react'
import "./MobileNavBar.scss"
import { IRoutes } from '../../types'
import NavBar from '../NavBar/NavBar'
import CloseButton from '../CloseButton/CloseButton'

interface MobileNavBarProps {
  routes: Array<IRoutes>,
  toggleMenu: () => void,
  isOpen: boolean,
  isMobile: boolean,
}

export const MobileNavBar: FC<MobileNavBarProps> = (props: MobileNavBarProps) => {
  return (
    <aside className={`menu ${props.isOpen && props.isMobile ? "menu_type_visible" : "menu_type_hidden" }`}>
      <div className="menu__lens" onClick={props.toggleMenu}></div>
      <div className="menu__content">
        <CloseButton closeEvent={props.toggleMenu} />
        <div className="menu__content-head">head</div>
        <NavBar rowLink={false} routes={props.routes} isMobile={props.isMobile} toggleMenu={props.toggleMenu}/>
      </div>
    </aside>
  )
}
