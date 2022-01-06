import React, { FC } from 'react'
import './SideBarButtonArrow.scss'
interface SideBarButtonArrowProps {
  isOpen: boolean,
  toggleSideBar: () => void 
}

const SideBarButtonArrow: FC<SideBarButtonArrowProps> = ({isOpen, toggleSideBar}) => {
  return (
    <div className={`${isOpen ? 'sidebar-arrow sidebar-arrow_type_open' : 'sidebar-arrow'}`} onClick={toggleSideBar}>
      <div className={`${isOpen ? 'sidebar-arrow_line-top' : "sidebar-arrow_top"}`}></div>
      <div className={`${isOpen ? 'sidebar-arrow_line-bottom' : "sidebar-arrow_bottom"}`}></div>
    </div>
  )
}

export default SideBarButtonArrow
