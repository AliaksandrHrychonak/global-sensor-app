import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import "./ProductFeature.scss";
interface ProductFeatureProps {
  name: string;
  title: string;
  data: Array<moduleCharacteristicsType>
}

type moduleCharacteristicsType =  {
  name: string,
  value?: string
  isExtra?: boolean
  list?: Array<moduleCharacteristicsExtraType>
}
type moduleCharacteristicsExtraType =  {
  name: string,
}

const ProductFeature: FC<ProductFeatureProps> = ({ name, title, data }) => {
  const {t} = useTranslation()
  return (
    <ul className={`product__feature product__feature_type_${name}`}>
      <h3 className="product__feature_title">{t(title)}</h3>
      {data.map((item) => (
          <li className="product__feature-element" key={item.name}>
            <div className={`product__feature_item product__feature_item_type_${!item.isExtra ? 'default' : 'extra' } `}>
              <p className={`product__feature_subtitle product__feature_subtitle_type_${name}`}>{t(item.name)}</p>
              {item.value && <p className={`product__feature_subtitle  product__feature_subtitle_type_${name} product__feature_subtitle_type_${item.value ? !item.isExtra ? 'value' : 'extra' : 'last'}`}>
                {t(item.value)}
              </p>}
            </div>
          </li>
      ))}
    </ul>
  );
};

export default ProductFeature;
