import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import './ProductSpecification.scss'
interface ProductSpecificationProps {
  title: string,
  data: Array<string>
}

const ProductSpecification: FC<ProductSpecificationProps> = ({title, data}) => {
  const {t} = useTranslation()
  return (
    <article className='product__specification'>
      <h1 className='product__specification-title'>{t(title)}</h1>
      {
        data.map((item: string) => 
        <p className="product__specification-subtitle" key={item}>{t(item)}</p>
        )
      }
    </article>
  )
}

export default ProductSpecification
