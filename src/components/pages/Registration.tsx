import React, { FC } from 'react'
import ContainerAuth from '../Containers/ContainerAuth'
import RegistrationForm from '../Forms/RegistrationForm/RegistrationForm'

interface RegistrationProps {
  
}

export const Registration: FC = () => {
  return (
    <main className="main main_type_auth">
      <ContainerAuth>
        <h1>Hello Registration</h1>
        <RegistrationForm />
      </ContainerAuth>
    </main>
  )
}
