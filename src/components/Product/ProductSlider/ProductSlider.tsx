import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import SwiperCore, { Lazy, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/lazy/lazy.scss";
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss";
import "./ProductSlider.scss"

interface ProductSliderProps {
  data: any
}

const ProductSlider: FC<ProductSliderProps> = ({ data }) => {
  SwiperCore.use([Lazy,Pagination,Navigation]);
  
  return (
    <Swiper
      lazy={false}
      pagination={{ clickable: true }}
      navigation={true}
      className="product__slider"
    >
      {
        data.map((item: any) =>
          <SwiperSlide key={item.id}>
            <img
              alt={item.id}
              src={item.image}
              className="swiper-lazy product__slider_lazy"
            />
          </SwiperSlide>
        )
      }
    </Swiper>
  );
};

export default ProductSlider;
