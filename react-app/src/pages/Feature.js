import React, { useState }  from 'react';
import PageScroll from 'react-page-scroll';
import NavPanel  from '../components/NavPanel';
import FeaturePrimary from '../components/FeaturePrimary';
import FeatureSecondary from '../components/FeatureSecondary';
import SliderPanel from '../components/SliderPanel';
import Footer  from '../components/Footer';

import { CONTENT } from '../constants';
// import { gins as productItems } from '../constants/menu_items';
import { slider_items} from '../constants/menu_items'; // features as menuItems, 
// import useLatestData from '../utils/useLatestData'; // use when API is available

const Feature = () => {
  // const { homeContent } = useLatestData(); // use when API is available 
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
    <NavPanel currentPage={`feature-page-${currentPage}`}/>
      <PageScroll width="100vw" height="100vh" onScrollStart={({ targetIndex }) => setCurrentPage(targetIndex)}>
        <FeaturePrimary className='page' bgColor='cream' content={CONTENT.features} />
        <FeatureSecondary className='page' bgColor='cream' content={CONTENT.features} />
        <SliderPanel className='page' page='features' items={slider_items} />
        <Footer className='page' />
      </PageScroll>
    </>
)};  

export default Feature; 