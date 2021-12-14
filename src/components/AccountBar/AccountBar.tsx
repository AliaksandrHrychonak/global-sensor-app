import React, { FC } from 'react'
import './AccountBar.scss'
import { Link } from 'react-router-dom'

interface AccountBarProps {
  isMobile: boolean,
  toggleMenu: React.MouseEventHandler
}

export const AccountBar: FC<AccountBarProps> = ({ isMobile, toggleMenu,  }) => {
  return (
    <div className="account-bar">
     { 
        false ?
        <>
          {
            isMobile && true ?
            <button className="acccount-bar__burger-button" onClick={toggleMenu}>
              <span className="acccount-bar__burger-button_line"/>
            </button>
            :
            <Link to="/profile" className="account-bar__link" >
              <button className="account-bar__button account-bar__button_type_account" onClick={toggleMenu}>
                <span className="account-bar__button-icon" />
                Аккаунт
              </button>
            </Link>
          }
        </>
      : 
      <>
        <Link to="/sign-up" className="account-bar__link">
          <button className="account-bar__button account-bar__button_type_signup">Регистрация</button>
        </Link>
        <Link to="/sign-in" className="account-bar__link">
          <button className="account-bar__button account-bar__button_type_signin">Войти</button>
        </Link>
      </>
    }
    </div>
  )
}
