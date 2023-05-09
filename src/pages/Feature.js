import React from 'react';
// import PropTypes from 'prop-types';
import { useParams, useLocation } from 'react-router-dom';
import ProductNav from '../components/ProductNav';
import ProductThumbs from '../components/ProductThumbs';
import NewsPanel from '../components/NewsPanel';
import { features as menuItems } from '../utils/MenuItems';

const Feature = () => {
  const { slug } = useParams('slug');
  const location = useLocation();
  return (
    <>
      <h1>Feature: {slug}</h1>
      <hr />
      <ProductNav items={menuItems} activeUrl={location.pathname} />
      <ProductThumbs />
      <hr />
      <NewsPanel />
    </>
  );
};

// Product.propTypes = {
//   slug: PropTypes.string,
// };

export default Feature;
