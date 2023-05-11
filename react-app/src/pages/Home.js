import React from 'react';
import PageScroll from 'react-page-scroll';
import NewsPanel from '../components/NewsPanel';
import CocktailsPanel from '../components/CocktailsPanel';
import Hero from '../components/Hero';
import HeroVideo from '../components/HeroVideo';
import DualPanel from '../components/DualPanel';
import SliderPanel from '../components/SliderPanel';
import Footer  from '../components/Footer';
// import image from '../assets/placeholder.png';
import useLatestData from '../utils/useLatestData';

const Home = () => {
  const { homeContent } = useLatestData();

  return (
      <PageScroll width="100vw" height="100vh">
        <HeroVideo className='page' title="Handcrafted" />
        { homeContent && <Hero className='page' title={homeContent.home_intro} />}
        <DualPanel className='page' />
        <SliderPanel className='page' />
        <CocktailsPanel className='page' />
        <NewsPanel className='page' />
        <Footer className='page' />
      </PageScroll>
)};

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
