import React, { useState }  from 'react';
import PageScroll from 'react-page-scroll';
import PropTypes from 'prop-types';
//import { useParams, useLocation } from 'react-router-dom';
import NavPanel from '../components/NavPanel';
import ProductDetail from '../components/ProductDetail';
import ProductSummary from '../components/ProductSummary';
import ProductDualPanel from '../components/ProductDualPanel';
import CocktailsPanel from '../components/CocktailsPanel';
import ShopDualPanel from '../components/ShopDualPanel';
import Footer from '../components/Footer';
import CONTENT from '../constants/content';
import { cocktails } from '../constants/menu_items';
import photo_whiskey_summary from '../assets/photo_whiskey_summary.jpg';


const Whiskey = () => {
  //const { slug } = useParams('slug');
  //const location = useLocation();
  const [currentPage, setCurrentPage] = useState(0); 

  return (
    <>
    <NavPanel currentPage={`whiskey-page-${currentPage}`} />
      <PageScroll width="100vw" height="100vh" onScrollStart={({ targetIndex }) => setCurrentPage(targetIndex)}>
        <ProductDetail className='page' bgColor='wgrey' product={CONTENT.whiskeys[0]} />
        <ProductSummary className='page' product={CONTENT.whiskeys[0]} bgColor='cream' />
        <ProductDualPanel className='page' bgColor='wgrey' theme='whiskey' content={CONTENT.whiskey_article} photo={photo_whiskey_summary} />
        <CocktailsPanel className='page' theme='whiskey' items={cocktails.whiskey.slice(0,3)} />
        <ShopDualPanel className='page' bgColor='warmwhite' content={CONTENT.whiskey_shop} photo={photo_whiskey_summary} />

        <Footer className='page' />
      </PageScroll>
    </>
  );
};

Whiskey.propTypes = {
  slug: PropTypes.string,
};

export default Whiskey;
