import React, { useState }  from 'react';
// import PageScroll from 'react-page-scroll';
import PageScroll from '../components/PageScroll';
import CocktailsPanel from '../components/CocktailsPanel';
import Hero from '../components/Hero';
import HeroVideo from '../components/HeroVideo';
import DrinksPanel from '../components/DrinksPanel';
import SliderPanel from '../components/SliderPanel';
import NavPanel  from '../components/NavPanel';
import NavMobile  from '../components/NavMobile';
import Footer  from '../components/Footer';
import { CONTENT } from '../constants';
import { cocktails, slider_items } from '../constants/menu_items';

//import useLatestData from '../utils/useLatestData'; // use when API is available

const Home = () => {
  //const { homeContent } = useLatestData(); // use when API is available
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
    <NavPanel currentPage={`home-page-${currentPage}`} />
    <NavMobile currentPage={`home-page-${currentPage}`} />
      <PageScroll width="100vw" height="100vh" onScrollStart={({ targetIndex }) => setCurrentPage(targetIndex)}>
        <HeroVideo className='page' page='home' title="Glendalough Distillery" />
        <Hero className='page' title={CONTENT.home_intro} />
        <DrinksPanel className='page' />
        <SliderPanel className='page' page='home' items={slider_items} /> 
        <CocktailsPanel className='page' theme='' items={cocktails.gin.slice(0,3)} />
        <Footer className='page' />
      </PageScroll>
    </>
)};

export default Home;