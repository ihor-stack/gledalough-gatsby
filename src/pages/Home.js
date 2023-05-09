import React, { Component } from 'react';
import NewsPanel from '../components/NewsPanel';
import CocktailsPanel from '../components/CocktailsPanel';
import Hero from '../components/Hero';
import HeroVideo from '../components/HeroVideo';
import DualPanel from '../components/DualPanel';
import SliderPanel from '../components/SliderPanel';
// import image from '../assets/placeholder.png';

class Home extends Component {
  render() {
    return (
      <>
        <h1>Home</h1>
        <hr />
        {/* <div className="image">
          <img width="90" height="60" alt="" src={image} />
        </div> */}
        <HeroVideo title="Handcrafted" />
        <Hero title="Home hero panel" />
        <DualPanel />
        <SliderPanel />
        <CocktailsPanel />
        <NewsPanel />
      </>
    );
  }
}

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
