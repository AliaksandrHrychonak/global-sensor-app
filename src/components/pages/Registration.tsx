import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { availableLanguages } from '../../i18n'
import ContainerAuth from '../Containers/ContainerAuth'
import RegistrationForm from '../Forms/RegistrationForm/RegistrationForm'
import { SwitchLanguageButton } from '../Icons/SwitchLanguageButton/SwitchLanguageButton'
import SignInWithSocial from '../SignInWithSocial/SignInWithSocial'

interface RegistrationProps {
  
}

export const Registration: FC = () => {
  const {i18n} = useTranslation()
  return (
    <main className="main main_type_auth">
      <SwitchLanguageButton i18n={i18n} availableLanguages={availableLanguages} type="auth"/>
      <ContainerAuth title="registration-title">
        <SignInWithSocial />
        <RegistrationForm />
      </ContainerAuth>
    </main>
  )
}
