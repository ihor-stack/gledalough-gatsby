import React from 'react';
import PageScroll from '../components/PageScroll';
import FeaturePrimary from '../components/FeaturePrimary';
import FeatureSecondary from '../components/FeatureSecondary';
import SliderPanel from '../components/SliderPanel';
import Footer from '../components/Footer';

import { CONTENT } from '../constants';
// import { gins as productItems } from '../constants/menu_items';
import { slider_items } from '../constants/menu_items'; // features as menuItems, 
// import useLatestData from '../utils/useLatestData'; // use when API is available

const Feature = () => {
  // const { homeContent } = useLatestData(); // use when API is available 

  return (
    <>
      <PageScroll width="100vw" height="100vh">
        <FeaturePrimary className='page' bgColor='cream' content={CONTENT.features} />
        <FeatureSecondary className='page' bgColor='cream' content={CONTENT.features} />
        <SliderPanel className='page' page='features' items={slider_items} />
        <Footer className='page' />
      </PageScroll>
    </>
  )
};

export default Feature; 