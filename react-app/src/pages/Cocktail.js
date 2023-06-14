import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// import PageScroll from 'react-page-scroll';
import PageScroll from '../components/PageScroll';
import NavComponent from '../components/NavComponent';
import HeroVideo from '../components/HeroVideo';
import FeatureSlider from '../components/FeatureSlider';
import DualPanelCocktail from '../components/DualPanelCocktail';
import Footer from '../components/Footer';

import { CONTENT } from '../constants';
import { cocktails as menuItems } from '../constants/menu_items';
// import useLatestData from '../utils/useLatestData'; // use when API is available

const CocktailsHome = () => {
  // const { homeContent } = useLatestData(); // use when API is available 
  const [currentPage, setCurrentPage] = useState(0);
  const pageClass = `cocktail-page-${currentPage}`;
  const { slug } = useParams('slug');
  const data = CONTENT.cocktails;
  const cocktail = data[slug];
  // const location = useLocation();

  return (
    <>
      <NavComponent pageClass={pageClass} />
      <PageScroll width="100vw" height="100vh" onScrollStart={({ targetIndex }) => setCurrentPage(targetIndex)}>
        <HeroVideo className='page' page='cocktails' title={cocktail.title} />
        <DualPanelCocktail className='page' cocktail={cocktail} />
        <FeatureSlider className='page' category='occasion' items={menuItems.occasion} bgColor='offwhite' />
        <Footer className='page' />
      </PageScroll>
    </>
  )
};

export default CocktailsHome; 