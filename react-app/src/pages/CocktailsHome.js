import React, { useState }  from 'react';
//import PageScroll from 'react-page-scroll';
import PageScroll from '../components/PageScroll';
import NavPanel  from '../components/NavPanel';
import NavMobile  from '../components/NavMobile';
import HeroVideo from '../components/HeroVideo';
import FeatureSlider from '../components/FeatureSlider';
import SliderPanel from '../components/SliderPanel';
import Footer  from '../components/Footer';
// import { CONTENT } from '../constants';
// import { gins as productItems } from '../constants/menu_items';
import { cocktails, slider_items } from '../constants/menu_items';
// import useLatestData from '../utils/useLatestData'; // use when API is available

const CocktailsHome = () => {
  // const { homeContent } = useLatestData(); // use when API is available 
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
    <NavPanel currentPage={`cocktails-page-${currentPage}`} />
    <NavMobile currentPage={`cocktails-page-${currentPage}`} />
      <PageScroll width="100vw" height="100vh" onScrollStart={({ targetIndex }) => setCurrentPage(targetIndex)}>
        <HeroVideo className='page' page='cocktails' title='Cocktails' />
        <FeatureSlider className='page' category='gin' items={cocktails.gin} bgColor='beige' />
        <FeatureSlider className='page' category='whiskey' items={cocktails.whiskey} bgColor='cream' />
        <FeatureSlider className='page' category='occasion' items={cocktails.occasion}  bgColor='offwhite' />
        <SliderPanel className='page' page='cocktails' items={slider_items} />
        <Footer className='page' />
      </PageScroll>
    </> 
)}; 

export default CocktailsHome;