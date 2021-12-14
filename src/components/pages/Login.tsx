import React, { FC } from 'react'
import LoginForm from '../Forms/LoginForm/LoginForm'

interface LoginProps {
  
}

export const Login: FC<LoginProps> = () => {
  return (
    <section className="auth">
      <LoginForm />
    </section>
  )
}
