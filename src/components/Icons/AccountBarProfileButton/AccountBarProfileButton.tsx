import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import './AccountBarProfileButton.scss'
import defaultAvatar from '../../../images/icons/avatar.svg'
interface AccountBarProfileButtonProps {
  isMobile: boolean
  toggleMenu: React.MouseEventHandler,
  user: any
}

const AccountBarProfileButton: FC<AccountBarProfileButtonProps> = ({ isMobile, toggleMenu, user }) => {
  return (
    !isMobile ? 
      <Link to="/profile" className="account-bar__link-profile account-bar__link-profile_type_default">
        <button className="account-bar__button-profile account-bar__button-profile_type_default" 
          onClick={toggleMenu} 
          style={{backgroundImage: `url(${user.avatar || defaultAvatar})`}} 
        />
      </Link>
    : 
      <Link to="/profile" className="account-bar__link-profile account-bar__link-profile_type_mobile">
        <button className="account-bar__button-profile account-bar__button_type_mobile" 
          onClick={toggleMenu} 
          style={{backgroundImage: `url(${user.avatar || defaultAvatar})`}} 
        />
        <div className="account-bar__profile-info">
          <p className='account-bar__profile-info_name'>{`${user.name} ${user.surname}`}</p>
          <p className='account-bar__profile-info_email'>{user.email}</p>
        </div>
      </Link>
  )
}

export default AccountBarProfileButton
