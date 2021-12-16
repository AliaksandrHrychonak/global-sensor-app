import React, { FC } from 'react'
import './AccountBar.scss'
import { Link } from 'react-router-dom'
import accountUserIcon from '../../images/icons/account-user.svg';
import avatarUserIcon from '../../images/icons/avatar.svg'
import store from '../../store'

interface AccountBarProps {
  isMobile: boolean,
  toggleMenu: React.MouseEventHandler
}

export const AccountBar: FC<AccountBarProps> = ({ isMobile, toggleMenu,  }) => {
  const state = store.getState()
  
  return (
    <div className="account-bar">
     { 
        false ?
        <>
          {
            true && isMobile ?
            <button className="acccount-bar__burger-button" onClick={toggleMenu}>
              <span className="acccount-bar__burger-button_line"/>
            </button>
            :
            <Link to="/profile" className="account-bar__link" >
              <button className="account-bar__button account-bar__button_type_account" onClick={toggleMenu} style={{backgroundImage: `url(${avatarUserIcon})`}} />
            </Link>
          }
        </>
      : 
      <>
        <Link to="/sign-in" className="account-bar__link">
          <button className="account-bar__button account-bar__button_type_signin" style={{backgroundImage: `url(${accountUserIcon})`}}>Войти</button>
        </Link>
      </>
    }
    </div>
  )
}

