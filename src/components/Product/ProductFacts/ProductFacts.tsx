import { FC } from 'react'
import './ProductFacts.scss'
import worldIcon from '../../../images/icons/world.svg';
import deathIcon from '../../../images/icons/death.svg';
import clackIcon from '../../../images/icons/clack.svg';
import { useTranslation } from 'react-i18next'
// Import Swiper styles
import "swiper/modules/effect-cards/effect-cards.scss"

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { EffectCards } from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCards]);


interface ProductFactsProps {
  isMobile: boolean;
}

const ProductFacts: FC<ProductFactsProps> = ({ isMobile }) => {
  const {t} = useTranslation()

  const moduleFacts = [
    { id: "1", image: worldIcon , alt: "world", value: "gs-facts-1"},
    { id: "2", image: deathIcon , alt: "death", value: "gs-facts-2"},
    { id: "3", image: clackIcon , alt: "clack", value: "gs-facts-3"},
  ]

  return (
    <>
      { !isMobile ?
        <>
          {
            moduleFacts.map((item) => 
              <article key={item.id} className='product__fact'>
                <img src={item.image} alt={item.alt} className='product__fact-image'/>
                <p className="product__fact-description">{t(item.value)}</p>
              </article>
            )
          }
        </>
        : 
        <Swiper effect={'cards'} grabCursor={true} className="product__fact-slider">
          {
            moduleFacts.map((item) =>
              <SwiperSlide key={item.id} className='product__fact-item'>
                <article className='product__fact'>
                  <img src={item.image} alt={item.alt} className='product__fact-image'/>
                  <p className="product__fact-description">{t(item.value)}</p>
                </article>
              </SwiperSlide>
            )
          }
        </Swiper>
      }
    </>
  )
}

export default ProductFacts
