import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import './Containers.scss'

interface ContainerAuthProps {
  children: React.ReactNode
  title: string
}

const ContainerAuth: FC<ContainerAuthProps> = ({ children, title }) => {
  const {t} = useTranslation()
  return (
    <section className='container container_type_auth'>
      <h1 className='container__title'>{t(title)}</h1>
      {children}
    </section>
  )
}

export default ContainerAuth
