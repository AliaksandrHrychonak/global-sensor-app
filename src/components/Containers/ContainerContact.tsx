import React, { FC } from 'react'

interface ContainerContactProps {
  children: React.ReactNode
}

const ContainerContact: FC<ContainerContactProps> = ({children}) => {
  return (
    <section className='container container_type_contact'>
      {children}
    </section>
  )
}

export default ContainerContact
