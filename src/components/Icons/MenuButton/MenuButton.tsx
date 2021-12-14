import React, { FC } from 'react'
import "./MenuButton.scss"
interface MenuButtonProps {
  isMobile: boolean,
  toggleMenu: (e: React.MouseEvent<HTMLElement>) => void
}

export const MenuButton: FC<MenuButtonProps> = ({toggleMenu, isMobile}) => {
  return (
    <button onClick={toggleMenu} className={`button-menu ${isMobile ? 'button-menu_type_visible' : 'button-menu_type_hidden'}`} >
      <span></span>
      </button>
  )
}
