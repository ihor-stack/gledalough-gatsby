import React from 'react';
import HeroVideo from '../components/HeroVideo';
import ProductNav from '../components/ProductNav';
import ProductThumbs from '../components/ProductThumbs';
import NewsPanel from '../components/NewsPanel';
import { gins as menuItems } from '../utils/MenuItems';

const Gins = () => (
  <>
    <h1>Gin</h1>
    <hr />
    <ProductNav items={menuItems} activeUrl="/gin" />
    <HeroVideo title="Our Story" />
    <hr />
    <ProductThumbs />
    <hr />
    <NewsPanel />
  </>
);

export default Gins;
