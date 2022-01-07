import React, { FC } from 'react'
import './Logo.scss'
import { useTranslation } from 'react-i18next';
import logo from '../../../images/icons/logo.svg';
import { Link } from 'react-router-dom';
interface LogoProps {
  type?: string
}

const Logo: FC<LogoProps> = ({ type }) => {
  const {t} = useTranslation()
  return (
    <Link to='/' className='logo-link'>
      <img alt={t('logo')} className={`logo logo_type_${type}`} src={logo} />
    </Link>
  )
}

export default Logo
