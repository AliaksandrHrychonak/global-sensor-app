import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import SideBarButtonArrow from '../Icons/SideBarButtonArrow/SideBarButtonArrow'
import logoutIcon from '../../images/icons/sign-out.svg'
import './ProfileBar.scss';
import Logo from '../Icons/Logo/Logo';
import panelIcon from '../../images/icons/home.svg'
import settingsIcon from '../../images/icons/settings.svg'
import docIcon from '../../images/icons/bisness.svg'

interface ProfileBarProps {
  isOpen: boolean,
  toggleSideBar: () => void 
}

const ProfileBar:FC<ProfileBarProps> = ({isOpen, toggleSideBar}) => {
  return (
    <aside className={`profile-bar ${isOpen ? 'profile-bar_type_active': 'profile-bar_type_hidden' }`}>
      <div className="profile-bar__head">
        {isOpen && <Logo type="profile" />}
        <SideBarButtonArrow isOpen={isOpen} toggleSideBar={toggleSideBar}/>
      </div>
      <div className='profile-bar__content'>
        {isOpen && <h2 className='profile-bar__title'>Menu</h2>}
        <nav className="profile-bar__navigation">
          <ul className="profile-bar__list">
            <li className="profile-bar__element">
              <NavLink to="/profile" className={({ isActive }) => isActive ? 'profile-bar__link profile-bar__link_type_active' : 'profile-bar__link'} end>
                <div className="profile-bar__link-icon" style={{backgroundImage: `url(${settingsIcon})`, backgroundColor: "#9471f6"}}/>
                {isOpen && "Profile"}
              </NavLink>
            </li>
            <li className="profile-bar__element">
              <NavLink to="/profile/me" className={({ isActive }) => isActive ? 'profile-bar__link profile-bar__link_type_active' : 'profile-bar__link'}>
                <div className="profile-bar__link-icon" style={{backgroundImage: `url(${docIcon})`, backgroundColor: "#22b07d"}}/>
                {isOpen && "Me"}
              </NavLink>
            </li>
            <li className="profile-bar__element">
              <NavLink to="/profile/dashboard" className={({ isActive }) => isActive ? 'profile-bar__link profile-bar__link_type_active' : 'profile-bar__link'}>
                <div className="profile-bar__link-icon" style={{backgroundImage: `url(${panelIcon})`, backgroundColor: "#6969df"}}/>
                {isOpen && "Dashboard"}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="profile-bar__bottom">
        <button className="profile-bar__button-logout" style={{backgroundImage: `url(${logoutIcon})`}}>{isOpen && "Logout"}</button>
      </div>
    </aside>
  )
}

export default ProfileBar
