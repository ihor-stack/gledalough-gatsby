import React, { useState }  from 'react';
import PageScroll from 'react-page-scroll';
import HeroVideo from '../components/HeroVideo';
import NavPanel  from '../components/NavPanel';
import GinPanel  from '../components/GinPanel';
import ProductSlider  from '../components/ProductSlider';
import FeaturesPanel  from '../components/FeaturesPanel';
import DualPanelStory  from '../components/DualPanelStory';
import Footer  from '../components/Footer';
import { CONTENT } from '../constants';
import { gins as productItems } from '../constants/menu_items';
import { botanicals as featureItems } from '../constants/menu_items';
import photo_foraging_story from '../assets/photo_foraging_story.jpg';

//import useLatestData from '../utils/useLatestData'; // use when API is available

const GinHome = () => {
  //const { homeContent } = useLatestData(); // use when API is available
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
    <NavPanel currentPage={`gin-page-${currentPage}`}/>
      <PageScroll width="100vw" height="100vh" onScrollStart={({ targetIndex }) => setCurrentPage(targetIndex)}>
        <HeroVideo className='page' page='gin_home' title='Glendalough Distillery' />
        <GinPanel className='page' content={CONTENT.gin_intro} bgColor='cream' />
        <ProductSlider className='page' items={productItems} activeUrl='/gin' bgColor='cream' />
        <FeaturesPanel className='page' content={CONTENT.gin_botanicals_intro} items={featureItems} bgColor='beige' subcontent={CONTENT.gin_features} />
        <DualPanelStory className='page' bgColor='cream' content={CONTENT.gin_foraging} photo={photo_foraging_story} />
        <Footer className='page' />
      </PageScroll>
    </>
)};

export default GinHome;