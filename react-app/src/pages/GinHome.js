import React from "react"
import PageScroll from "../components/PageScroll"
import HeroVideo from "../components/HeroVideo"
import ProductIntro from "../components/ProductIntro"
import ProductSlider from "../components/ProductSlider"
import FeaturesPanel from "../components/FeaturesPanel"
import DualPanelStory from "../components/DualPanelStory"
import Footer from "../components/Footer"
import { CONTENT } from "../constants"
import { gins as productItems } from "../constants/menu_items"
import { botanicals as featureItems } from "../constants/menu_items"
import photo_gin_article from "../assets/photo_gin_article.jpg"
// import useLatestData from '../utils/useLatestData'; // use when API is available

const GinHome = () => {
  // const { homeContent } = useLatestData(); // use when API is available
  return (
    <>
      <PageScroll className="gins-page" width="100vw" height="100vh">
        <HeroVideo className="page" page="gin_home" title="Gin" />
        <ProductIntro className="page" content={CONTENT.gin_intro} bgColor="cream" />
        <ProductSlider className="page" product="gin" items={productItems} activeUrl="/gin" bgColor="cream" />
        <FeaturesPanel
          className="page"
          content={CONTENT.gin_botanicals_intro}
          items={featureItems}
          bgColor="beige"
          subcontent={CONTENT.gin_features}
        />
        <DualPanelStory className="page" bgColor="cream" content={CONTENT.gin_article} photo={photo_gin_article} />
        <Footer />
      </PageScroll>
    </>
  )
}

export default GinHome
