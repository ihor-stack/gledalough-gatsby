import React, { useState } from 'react';
// import PageScroll from 'react-page-scroll';
import PageScroll from '../components/PageScroll';
//import NavComponent from '../components/NavComponent';
import CocktailsSlider from '../components/CocktailsSlider';
import Hero from '../components/Hero';
import HeroVideo from '../components/HeroVideo';
import DrinksPanel from '../components/DrinksPanel';
import SliderPanel from '../components/SliderPanel';
import Footer from '../components/Footer';
import { CONTENT } from '../constants';
import { cocktails, slider_items } from '../constants/menu_items';

//import useLatestData from '../utils/useLatestData'; // use when API is available

const Home = () => {
  //const { homeContent } = useLatestData(); // use when API is available

  return (
    <>
      {/* <NavComponent pageClass={pageClass} /> */}
      <PageScroll width="100vw" height="100vh">
        <HeroVideo id='HeroVideo' className='page' page='home' title="Glendalough Distillery" />
        <Hero id='Hero' className='page' title={CONTENT.home_intro} />
        <DrinksPanel id='DrinksPanel' className='page' />
        <SliderPanel id='SliderPanel' className='page' page='home' items={slider_items} />
        <CocktailsSlider id='CocktailsSlider' className='page' theme='' items={cocktails.gin.slice(0, 3)} />
        <Footer id='Footer' className='page' />
      </PageScroll>
    </>
  )
};

export default Home;