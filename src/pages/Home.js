import React from 'react';
import PageScroll from 'react-page-scroll';
import NewsPanel from '../components/NewsPanel';
import CocktailsPanel from '../components/CocktailsPanel';
import Hero from '../components/Hero';
import HeroVideo from '../components/HeroVideo';
import DualPanel from '../components/DualPanel';
import SliderPanel from '../components/SliderPanel';
// import image from '../assets/placeholder.png';

const Home = () => (
      <PageScroll width="100vw" height="100vh">
        <HeroVideo className='page' title="Handcrafted" />
        <Hero className='page' title="Home hero panel" />
        <DualPanel className='page' />
        <SliderPanel className='page' />
        <CocktailsPanel className='page' />
        <NewsPanel className='page' />
      </PageScroll>
);

export default Home;

/*
Nav
Hero
SubHero
Drinks (Gin|Whiskey)
OurStory
Cocktails
News
Footer
 */
