import React, { useState }  from 'react';
// import PageScroll from 'react-page-scroll';
import PageScroll from '../components/PageScroll';
import HeroVideo from '../components/HeroVideo';
import NavPanel  from '../components/NavPanel';
import NavMobile  from '../components/NavMobile';
import ProductIntro  from '../components/ProductIntro';
import ProductSlider  from '../components/ProductSlider';
import FeaturesPanel  from '../components/FeaturesPanel';
import DualPanelStory  from '../components/DualPanelStory';
import Footer  from '../components/Footer';
import { CONTENT } from '../constants';
import { whiskeys as productItems } from '../constants/menu_items';
import { oaks as featureItems } from '../constants/menu_items';
import photo_whiskey_article from '../assets/photo_whiskey_article.jpg';
// import useLatestData from '../utils/useLatestData'; // use when API is available

const GinHome = () => {
  // const { homeContent } = useLatestData(); // use when API is available
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
    <NavPanel currentPage={`whiskeys-page-${currentPage}`} />
    <NavMobile currentPage={`whiskeys-page-${currentPage}`} />
      <PageScroll width="100vw" height="100vh" onScrollStart={({ targetIndex }) => setCurrentPage(targetIndex)}>
        <HeroVideo className='page' page='whiskey_home' title='Whiskey' />
        <ProductIntro className='page' content={CONTENT.whiskey_intro} bgColor='cream' />
        <ProductSlider className='page' product='whiskey' items={productItems} activeUrl='/whiskey' bgColor='cream' />
        <FeaturesPanel className='page' content={CONTENT.whiskey_oaks_intro} items={featureItems} bgColor='beige' subcontent={CONTENT.whiskey_features} />
        <DualPanelStory className='page' bgColor='cream' content={CONTENT.whiskey_article} photo={photo_whiskey_article} />
        <Footer className='page' />
      </PageScroll>
    </>
)};

export default GinHome;