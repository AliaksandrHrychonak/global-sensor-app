import React, { FC } from 'react'
import "./MenuIcon.scss"
interface MenuIconProps {
  isMobile: boolean,
  toggleMenu: (e: React.MouseEvent<HTMLElement>) => void
}

export const MenuIcon: FC<MenuIconProps> = ({toggleMenu, isMobile}) => {
  return (
    <button onClick={toggleMenu} className={`button-menu ${isMobile ? 'button-menu_type_visible' : 'button-menu_type_hidden'}`} >
      <span></span>
      </button>
  )
}
