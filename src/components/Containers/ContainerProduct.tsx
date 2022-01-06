import React, { FC } from 'react'

interface ContainerProductProps {
  name: string,
  children: React.ReactNode
}

const ContainerProduct: FC<ContainerProductProps> = ({ name, children }) => {
  return (
    <section className={`container container_type_${name}`}>
      <div className={`container__content container__content_type_${name}`}>
        {children}
      </div>
    </section>
  )
}

export default ContainerProduct
