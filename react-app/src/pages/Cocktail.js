import React, { useState }  from 'react';
import PageScroll from 'react-page-scroll';
import NavPanel  from '../components/NavPanel';
import HeroVideo from '../components/HeroVideo';
import FeatureSlider from '../components/FeatureSlider';
import DualPanelCocktail from '../components/DualPanelCocktail';
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
    <NavPanel currentPage={`cocktails-page-${currentPage}`}/>
      <PageScroll width="100vw" height="100vh" onScrollStart={({ targetIndex }) => setCurrentPage(targetIndex)}>
        <HeroVideo className='page' page='cocktails' title='Glendalough Distillery' />
        <DualPanelCocktail className='page' content={cocktails} />
        <FeatureSlider className='page' category='occasion' items={cocktails.occasion} bgColor='offwhite' />
        <Footer className='page' />
      </PageScroll>
    </>
)}; 

export default CocktailsHome;