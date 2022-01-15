import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import SideBarButtonArrow from '../Icons/SideBarButtonArrow/SideBarButtonArrow'
import logoutIcon from '../../images/icons/sign-out.svg'
import './ProfileBar.scss'
import Logo from '../Icons/Logo/Logo'
import panelIcon from '../../images/icons/home.svg'
import settingsIcon from '../../images/icons/settings.svg'
import docIcon from '../../images/icons/bisness.svg'

interface ProfileBarProps {
  isOpen: boolean
  toggleSideBar: () => void,
  onLogout: () => void,
}

const ProfileBar: FC<ProfileBarProps> = ({ isOpen, toggleSideBar, onLogout }) => {
  return (
    <aside className={`profile-bar ${isOpen ? 'profile-bar_type_active' : 'profile-bar_type_hidden'}`}>
      <div className="profile-bar__head">
        {isOpen && <Logo type="profile" />}
        <SideBarButtonArrow isOpen={isOpen} toggleSideBar={toggleSideBar} />
      </div>
      <div className="profile-bar__content">
        <h2 className={`profile-bar__title ${!isOpen && 'profile-bar__title_type_hidden'}`}>Menu</h2>
        <nav className="profile-bar__navigation">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? 'profile-bar__link profile-bar__link_type_active' : 'profile-bar__link'
            }
            end
          >
            <div
              className="profile-bar__link-icon"
              style={{ backgroundImage: `url(${settingsIcon})`, backgroundColor: '#9471f6' }}
            />
            <p className={`profile-bar__link-title ${!isOpen && 'profile-bar__link-title_type_hidden'}`}>Profile</p>
          </NavLink>

          {/* <NavLink
            to="/profile/me"
            className={({ isActive }) =>
              isActive ? 'profile-bar__link profile-bar__link_type_active' : 'profile-bar__link'
            }
          >
            <div
              className="profile-bar__link-icon"
              style={{ backgroundImage: `url(${docIcon})`, backgroundColor: '#22b07d' }}
            />
            <p className={`profile-bar__link-title ${!isOpen && 'profile-bar__link-title_type_hidden'}`}>Me</p>
          </NavLink>

          <NavLink
            to="/profile/dashboard"
            className={({ isActive }) =>
              isActive ? 'profile-bar__link profile-bar__link_type_active' : 'profile-bar__link'
            }
          >
            <div
              className="profile-bar__link-icon"
              style={{ backgroundImage: `url(${panelIcon})`, backgroundColor: '#6969df' }}
            />
            <p className={`profile-bar__link-title ${!isOpen && 'profile-bar__link-title_type_hidden'}`}>Panel</p>
          </NavLink> */}
        </nav>
      </div>
      <div className="profile-bar__bottom">
        <button className={`profile-bar__logout ${!isOpen && 'profile-bar__logout_type_hidden'}`} onClick={onLogout}>
          <span className={`profile-bar__logout-title ${!isOpen && 'profile-bar__logout-title_type_hidden'}`}>
            Logout
          </span>
          <span className="profile-bar__logout-icon" style={{ backgroundImage: `url(${logoutIcon})` }} />
        </button>
      </div>
    </aside>
  )
}

export default ProfileBar
