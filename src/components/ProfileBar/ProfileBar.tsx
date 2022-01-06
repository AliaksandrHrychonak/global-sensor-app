import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import SideBarButtonArrow from '../Icons/SideBarButtonArrow/SideBarButtonArrow'
import './ProfileBar.scss'
interface ProfileBarProps {
  isOpen: boolean,
  toggleSideBar: () => void 
}

const ProfileBar:FC<ProfileBarProps> = ({isOpen, toggleSideBar}) => {
  return (
    <aside className={`profile-bar ${isOpen ? 'profile-bar_type_active': 'profile-bar_type_hidden' }`}>
      <div className="profile-bar__head">
        <SideBarButtonArrow isOpen={isOpen} toggleSideBar={toggleSideBar}/>
      </div>
      <div className='profile-bar__content'>
        <h2>Menu</h2>
        <nav className="profile-bar__navigation">
          <ul className="profile-bar__list">
            <li className="profile-bar__element">
              <NavLink to="/profile" className={({ isActive }) => isActive ? 'profile-bar__link profile-bar__link_type_active' : 'profile-bar__link'} end>Profile</NavLink>
            </li>
            <li className="profile-bar__element">
              <NavLink to="/profile/me" className={({ isActive }) => isActive ? 'profile-bar__link profile-bar__link_type_active' : 'profile-bar__link'}>Me</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="profile-bar__bottom">
        <button>Logout</button>
      </div>
    </aside>
  )
}

export default ProfileBar
