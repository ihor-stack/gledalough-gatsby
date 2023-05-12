import React, { useState }  from 'react';
import PageScroll from 'react-page-scroll';
import NewsPanel from '../components/NewsPanel';
import CocktailsPanel from '../components/CocktailsPanel';
import Hero from '../components/Hero';
import HeroVideo from '../components/HeroVideo';
import DualPanel from '../components/DualPanel';
import SliderPanel from '../components/SliderPanel';
import NavPanel  from '../components/NavPanel';
import Footer  from '../components/Footer';
// import image from '../assets/placeholder.png';
import useLatestData from '../utils/useLatestData';

const Home = () => {
  const { homeContent } = useLatestData();
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
    <NavPanel currentPage={currentPage}/>
      <PageScroll width="100vw" height="100vh" onScrollStart={({ targetIndex }) => setCurrentPage(targetIndex)}>
        <HeroVideo className='page' title="Glendalough Distillery" />
        { homeContent && <Hero className='page' title={homeContent.home_intro} />}
        <DualPanel className='page' />
        <SliderPanel className='page' />
        <CocktailsPanel className='page' />
        <NewsPanel className='page' />
        <Footer className='page' />
      </PageScroll>
    </>
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
