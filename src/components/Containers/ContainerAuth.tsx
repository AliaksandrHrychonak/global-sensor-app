import React, { FC } from 'react'
import './Containers.scss'

interface ContainerAuthProps {
  children: React.ReactNode
}

const ContainerAuth: FC<ContainerAuthProps> = ({ children }) => {
  return (
    <section className='container container_type_auth'>
      {children}
    </section>
  )
}

export default ContainerAuth
