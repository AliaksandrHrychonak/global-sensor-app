import React, { FC } from "react";
import ContainerProduct from "../Containers/ContainerProduct";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ProductEquipment from "../Product/ProductEquipment/ProductEquipment";
import ProductFeature from "../Product/ProductFeature/ProductFeature";
import ProductSlider from "../Product/ProductSlider/ProductSlider";
import ProductSpecification from "../Product/ProductSpecification/ProductSpecification";
import ProductFacts from "../Product/ProductFacts/ProductFacts";
import { dataModuleDetector } from "../../utils/pmData";


interface PM2100Props {
  isMobile: boolean;
  toggleMenu: (e: React.MouseEvent<HTMLElement>) => void;
  titleModule: string;
  productSpecification: any;
  moduleEquipments: any
  dataModule: any
  dataImages: any
}

const PM2100: FC<PM2100Props> = ({ isMobile, toggleMenu, titleModule, productSpecification, moduleEquipments, dataModule, dataImages }) => {

  

  return (
    <>
      <Header isMobile={isMobile} toggleMenu={toggleMenu} />
      <main className="main main_type_product">
        <ContainerProduct
          name="promo"
          children={
            <>
              <ProductSlider data={dataImages} /> <ProductSpecification data={productSpecification} title={titleModule} />
            </>
          }
        />
        <ContainerProduct name="equipment" children={<ProductEquipment data={moduleEquipments} />} />
        <ContainerProduct
          name="feature"
          children={
            <>
              <ProductFeature
                name="module"
                title="pm2100-parametr"
                data={dataModule}
              />
              <ProductFeature
                name="detector"
                title="detector-parametr"
                data={dataModuleDetector}
              />
            </>
          }
        />
        <ContainerProduct name="facts" children={<ProductFacts isMobile={isMobile} />} />
      </main>
      <Footer />
    </>
  );
};

export default PM2100;
