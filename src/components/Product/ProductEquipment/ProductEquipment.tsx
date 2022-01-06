import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import './ProductEquipment.scss'

interface ProductEquipmentProps {
  data: Array<string>;
}

const ProductEquipment: FC<ProductEquipmentProps> = ({ data }) => {
  const {t} = useTranslation()

  return (
    <ul className='product__equipment'>
      <h2 className='product__equipment_title'>{t("module-includes")}</h2>
      {
       data.map((equipment: string) => 
        <li className="product__equipment_item" key={equipment}>
          <p className="product__equipment_subtitle">{t(equipment)}</p>
        </li>
       )
      }
      <hr className='product__equipment_line'/>
    </ul>
  )
}

export default ProductEquipment
