import React from 'react';
import HeroVideo from '../components/HeroVideo';
import ProductNav from '../components/ProductNav';
import ProductThumbs from '../components/ProductThumbs';
import NewsPanel from '../components/NewsPanel';
import { whiskeys as menuItems } from '../constants/menu_items';

const Whiskeys = () => (
  <>
    <h1>Whiskey</h1>
    <hr />
    <ProductNav items={menuItems} activeUrl="/whiskey" />
    <HeroVideo title="Our Story" />
    <hr />
    <ProductThumbs />
    <hr />
    <NewsPanel />
  </>
);

export default Whiskeys;
