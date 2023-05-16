import React, { useState }  from 'react';
import PageScroll from 'react-page-scroll';
import CocktailsPanel from '../components/CocktailsPanel';
import Hero from '../components/Hero';
import HeroVideo from '../components/HeroVideo';
import DrinksPanel from '../components/DrinksPanel';
import SliderPanel from '../components/SliderPanel';
import NavPanel  from '../components/NavPanel';
import Footer  from '../components/Footer';
import { CONTENT } from '../constants';
//import useLatestData from '../utils/useLatestData'; // use when API is available

const Home = () => {
  //const { homeContent } = useLatestData(); // use when API is available
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
    <NavPanel currentPage={`home-page-${currentPage}`}/>
      <PageScroll width="100vw" height="100vh" onScrollStart={({ targetIndex }) => setCurrentPage(targetIndex)}>
        <HeroVideo className='page' page='home' title="Glendalough Distillery" />
        <Hero className='page' title={CONTENT.home_intro} />
        <DrinksPanel className='page' />
        <SliderPanel className='page' />
        <CocktailsPanel className='page' />
        <Footer className='page' />
      </PageScroll>
    </>
)};

export default Home;