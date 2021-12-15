import React from 'react'
import './Logo.scss'
import { useTranslation } from 'react-i18next';
import logo from '../../../images/icons/logo.svg';
const Logo = () => {
  const {t} = useTranslation()
  return (
    <img alt={t('logo')} className="logo" src={logo} />
  )
}

export default Logo
