import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { animated, useTransition } from '@react-spring/web';
import { ParallaxProvider } from 'react-scroll-parallax';
import ScrollToTop from './utils/ScrollToTop';
import NavComponent from './components/NavComponent';
import Cocktail from './pages/Cocktail';
import CocktailsHome from './pages/CocktailsHome';
import ContactUs from './pages/ContactUs';
import Feature from './pages/Feature';
import Features from './pages/FeaturesHome';
import Gin from './pages/Gin';
import GinHome from './pages/GinHome';
import Home from './pages/Home';
import Layout from './templates/Layout';
import NotFound from './pages/NotFound';
import OurEthos from './pages/OurEthos';
import OurStory from './pages/OurStory';
import Privacy from './pages/PrivacyPage';
import StoryArticle from './pages/StoryArticle';
import Terms from './pages/Terms';
import Tours from './pages/Tours';
import Whiskey from './pages/Whiskey';
import WhiskeyHome from './pages/WhiskeyHome';

const AppRoutes = () => {
  const location = useLocation();

  // const transitions = useTransition(location, {
  //   from: { opacity: 0, height: 0, transform: 'translate3D(0, -100vh, 0)' },
  //   enter: { opacity: 1, height: "auto", transform: 'translate3D(0, 0, 0)' },
  //   leave: { opacity: 0, height: 0, transform: 'translate3D(0, -100vh, 0)' },
  //   config: {
  //     duration: 400 
  //   }
  // });

  const transitions = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 200 
    }
  });


  return (
      <Fragment>
          <ParallaxProvider>
          <ScrollToTop />
          <NavComponent pathname={location.pathname} />
          {transitions((styles, item) => (
            <animated.div style={styles} className='router-transition'>
              <Routes location={item}>
                <Route path='/' element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path='*' element={<NotFound />} />
                  <Route path='cocktail/:slug' element={<Cocktail />} />
                  <Route path='cocktails' element={<CocktailsHome />} />
                  <Route path='contact-us' element={<ContactUs />} />
                  <Route path='feature/:slug' element={<Feature />} />
                  <Route path='features' element={<Features />} />
                  <Route path='gin/:slug' element={<Gin />} />
                  <Route path='gin' element={<GinHome />} />
                  <Route path='our-ethos' element={<OurEthos />} />
                  <Route path='our-story' element={<OurStory />} />
                  <Route path='privacy' element={<Privacy />} />
                  <Route path='story/:slug' element={<StoryArticle />} />
                  <Route path='terms-and-conditions' element={<Terms />} />
                  <Route path='tours' element={<Tours />} />
                  <Route path='whiskey/:slug' element={<Whiskey />} />
                  <Route path='whiskey' element={<WhiskeyHome />} />
                </Route>
              </Routes>
            </animated.div>
          ))}
        </ParallaxProvider>
      </Fragment>
  )
};

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
