import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { availableLanguages } from '../../i18n'
import ContainerAuth from '../Containers/ContainerAuth'
import LoginForm from '../Forms/LoginForm/LoginForm'
import Logo from '../Icons/Logo/Logo'
import { SwitchLanguageButton } from '../Icons/SwitchLanguageButton/SwitchLanguageButton'

interface LoginProps {
  onSubmit: any;
  onAcessWithGoogle: any
}

export const Login: FC<LoginProps> = ({ onSubmit, onAcessWithGoogle }) => {
  const {i18n}= useTranslation()
  return (
    <main className="main main_type_auth">
      <div className='main__head'>
        <Logo />
        <SwitchLanguageButton i18n={i18n} availableLanguages={availableLanguages} type="black"/>
      </div>
      <ContainerAuth title="login-title">
        {/* <SignInWithSocial onAccess={onAcessWithGoogle}/> */}
        <LoginForm onSubmit={onSubmit} />
      </ContainerAuth>
    </main>
  )
}
