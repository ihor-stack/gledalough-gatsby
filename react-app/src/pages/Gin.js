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
import photo_gin_summary from '../assets/photo_gin_summary.jpg';


const Gin = () => {
  //const { slug } = useParams('slug');
  //const location = useLocation();
  const [currentPage, setCurrentPage] = useState(0); 

  return (
    <>
    <NavPanel currentPage={`gin-page-${currentPage}`} />
      <PageScroll width="100vw" height="100vh" onScrollStart={({ targetIndex }) => setCurrentPage(targetIndex)}>
        <ProductDetail className='page' bgColor='wrpink' product={CONTENT.gins[0]} />
        <ProductSummary className='page' product={CONTENT.gins[0]} bgColor='cream' />
        <ProductDualPanel className='page' bgColor='wrpink' theme='gin' content={CONTENT.gin_article} photo={photo_gin_summary} />
        <CocktailsPanel className='page' theme='gin' items={cocktails.gin.slice(0,3)} />
        <ShopDualPanel className='page' bgColor='warmwhite' content={CONTENT.gin_shop} photo={photo_gin_summary} />

        <Footer className='page' />
      </PageScroll>
    </>
  );
};

Gin.propTypes = {
  slug: PropTypes.string,
};

export default Gin;
