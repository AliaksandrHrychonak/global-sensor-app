import React, { FC } from 'react'
import './AccountBar.scss'
import AccountBarProfileButton from '../Icons/AccountBarProfileButton/AccountBarProfileButton';
import { useSelector } from 'react-redux';
import { MenuButton } from '../Icons/MenuButton/MenuButton';
import SignInButton from '../Icons/SignInButton/SignInButton';

interface AccountBarProps {
  isMobile: boolean,
  toggleMenu: React.MouseEventHandler,
  locationMenu: boolean
}

const AccountBar: FC<AccountBarProps> = ({ isMobile, toggleMenu, locationMenu, }) => {
  const auth: any = useSelector<any>(state => state.auth );
  
  return (
    <div className={`account-bar ${isMobile ? 'account-bar_type_mobile' : 'account-bar_type_default' }`}>
     { 
        auth.isLoggedIn ?
        <>
          {
            isMobile && !locationMenu ?
              <MenuButton toggleMenu={toggleMenu}/>
              :
              <AccountBarProfileButton isMobile={isMobile} user={auth.user} toggleMenu={toggleMenu} />
            }          
        </>
      : 
      <>
       { 
         isMobile && !locationMenu ?
          <MenuButton toggleMenu={toggleMenu}/>
          :
          <SignInButton isMobile={isMobile} toggleMenu={toggleMenu}/>
        }
      </>
    }
    </div>
  )
}

export default AccountBar
