import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { Container } from 'react-bootstrap';

import Cocktail from './pages/Cocktail';
import Cocktails from './pages/Cocktails';
import ContactUs from './pages/ContactUs';
import Feature from './pages/Feature';
import Features from './pages/Features';
import Gin from './pages/Gin';
import Gins from './pages/Gins';
import Home from './pages/Home';
import Layout from './templates/Layout';
import NotFound from './pages/NotFound';
import OurEthos from './pages/OurEthos';
import OurStory from './pages/OurStory';
import Privacy from './pages/Privacy';
import StoryArticle from './pages/StoryArticle';
import Terms from './pages/Terms';
import Tours from './pages/Tours';
import Whiskey from './pages/Whiskey';
import Whiskeys from './pages/Whiskeys';
//import Fullpage from './pages/Fullpage';

const App = () => (
  <Router>
    {/* <Container> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="cocktail/:slug" element={<Cocktail />} />
          <Route path="cocktails" element={<Cocktails />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="feature/:slug" element={<Feature />} />
          <Route path="features" element={<Features />} />
          <Route path="gin/:slug" element={<Gin />} />
          <Route path="gin" element={<Gins />} />
          <Route path="our-ethos" element={<OurEthos />} />
          <Route path="our-story" element={<OurStory />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="story/:slug" element={<StoryArticle />} />
          <Route path="terms-and-conditions" element={<Terms />} />
          <Route path="tours" element={<Tours />} />
          <Route path="whiskey/:slug" element={<Whiskey />} />
          <Route path="whiskey" element={<Whiskeys />} />
        </Route>
      </Routes>
    {/* </Container> */}
  </Router>
);

export default App;
