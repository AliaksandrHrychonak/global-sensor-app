import React from 'react'
import './Logo.scss'
import { useTranslation } from 'react-i18next';
import logo from '../../../images/icons/logo.svg';
import { Link } from 'react-router-dom';
const Logo = () => {
  const {t} = useTranslation()
  return (
    <Link to='/' className='logo-link'>
      <img alt={t('logo')} className="logo" src={logo} />
    </Link>
  )
}

export default Logo
