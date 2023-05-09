import React from 'react';
import HeroVideo from '../components/HeroVideo';
import ProductNav from '../components/ProductNav';
import ProductThumbs from '../components/ProductThumbs';
import NewsPanel from '../components/NewsPanel';
import { features as menuItems } from '../utils/MenuItems';

const Features = () => (
  <>
    <h1>Features</h1>
    <hr />
    <ProductNav items={menuItems} activeUrl="/feature" />
    <HeroVideo title="Our Story" />
    <hr />
    <ProductThumbs />
    <hr />
    <NewsPanel />
  </>
);

export default Features;
