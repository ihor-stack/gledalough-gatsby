import React from 'react';
import HeroVideo from '../components/HeroVideo';
import ProductNav from '../components/ProductNav';
import ProductThumbs from '../components/ProductThumbs';
import NewsPanel from '../components/NewsPanel';
import { cocktails as menuItems } from '../utils/MenuItems';

const Cocktails = () => (
  <>
    <h1>Cocktails</h1>
    <hr />
    <ProductNav items={menuItems} activeUrl="/cocktail" />
    <HeroVideo title="Our Story" />
    <hr />
    <ProductThumbs />
    <hr />
    <NewsPanel />
  </>
);

export default Cocktails;
