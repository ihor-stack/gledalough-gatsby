import React, { useState } from 'react';
// import PageScroll from 'react-page-scroll';
import PageScroll from '../components/PageScroll';
import NavComponent from '../components/NavComponent';
import HeroVideo from '../components/HeroVideo';
import FeatureSlider from '../components/FeatureSlider';
import SliderPanel from '../components/SliderPanel';
import Footer from '../components/Footer';
// import { CONTENT } from '../constants';
// import { gins as productItems } from '../constants/menu_items';
import { features, slider_items } from '../constants/menu_items';
// import useLatestData from '../utils/useLatestData'; // use when API is available

const FeaturesHome = () => {
  // const { homeContent } = useLatestData(); // use when API is available  
  const [currentPage, setCurrentPage] = useState(0);
  const pageClass = `features-page-${currentPage}`;

  return (
    <>
      <NavComponent pageClass={pageClass} />
      <PageScroll width="100vw" height="100vh" onScrollStart={({ targetIndex }) => setCurrentPage(targetIndex)}>
        <HeroVideo className='page' page='features' title='Features' />
        <FeatureSlider className='page' category='foraging' items={features.foraging} bgColor='beige' />
        <FeatureSlider className='page' category='glendalough' items={features.glendalough} bgColor='cream' />
        <FeatureSlider className='page' category='sustainability' items={features.sustainability} bgColor='offwhite' />
        <SliderPanel className='page' page='features' items={slider_items} />
        <Footer className='page' />
      </PageScroll>
    </>
  )
};

export default FeaturesHome; 