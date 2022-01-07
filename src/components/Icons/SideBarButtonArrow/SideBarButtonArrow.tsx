import React, { FC } from 'react'
import './SideBarButtonArrow.scss'
interface SideBarButtonArrowProps {
  isOpen: boolean,
  toggleSideBar: () => void 
}

const SideBarButtonArrow: FC<SideBarButtonArrowProps> = ({isOpen, toggleSideBar}) => {
  return (
    <div className={`${isOpen ? 'sidebar-arrow' : 'sidebar-arrow sidebar-arrow_type_open'}`} onClick={toggleSideBar} /> 
  )
}

export default SideBarButtonArrow
