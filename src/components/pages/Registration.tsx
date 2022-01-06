import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { availableLanguages } from '../../i18n'
import ContainerAuth from '../Containers/ContainerAuth'
import RegistrationForm from '../Forms/RegistrationForm/RegistrationForm'
import Logo from '../Icons/Logo/Logo'
import { SwitchLanguageButton } from '../Icons/SwitchLanguageButton/SwitchLanguageButton'

interface RegistrationProps {
  onSubmit: any
  onAcessWithGoogle: any
}

export const Registration: FC<RegistrationProps> = ({ onSubmit, onAcessWithGoogle }) => {
  const { i18n } = useTranslation()
  return (
    <main className="main main_type_auth">
      <div className='main__head'>
        <Logo />
        <SwitchLanguageButton i18n={i18n} availableLanguages={availableLanguages} type="black"/>
      </div>
      <ContainerAuth title="registration-title">
        {/* <SignInWithSocial onAccess={onAcessWithGoogle}/> */}
        <RegistrationForm onSubmit={onSubmit}/>
      </ContainerAuth>
    </main>
  )
}
