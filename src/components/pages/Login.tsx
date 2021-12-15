import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { availableLanguages } from '../../i18n'
import ContainerAuth from '../Containers/ContainerAuth'
import LoginForm from '../Forms/LoginForm/LoginForm'
import { SwitchLanguageButton } from '../Icons/SwitchLanguageButton/SwitchLanguageButton'
import SignInWithSocial from '../SignInWithSocial/SignInWithSocial'

interface LoginProps {
  
}

export const Login: FC<LoginProps> = () => {
  const {i18n}= useTranslation()
  return (
    <main className="main main_type_auth">
      <SwitchLanguageButton i18n={i18n} availableLanguages={availableLanguages} type="auth"/>
      <ContainerAuth title="login-title">
        <SignInWithSocial />
        <LoginForm />
      </ContainerAuth>
    </main>
  )
}
