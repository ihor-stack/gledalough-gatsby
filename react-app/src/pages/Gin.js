import React, { useState } from 'react';
//import PageScroll from 'react-page-scroll';
import PageScroll from '../components/PageScroll';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import NavComponent from '../components/NavComponent';
import ProductDetail from '../components/ProductDetail';
import ProductSummary from '../components/ProductSummary';
import ProductDualPanel from '../components/ProductDualPanel';
import CocktailsSlider from '../components/CocktailsSlider';
import ShopDualPanel from '../components/ShopDualPanel';
import Footer from '../components/Footer';
import CONTENT from '../constants/content';
import { cocktails } from '../constants/menu_items';
import photo_gin_summary from '../assets/photo_gin_summary.jpg';


const Gin = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageClass = `gin-page-${currentPage}`;

  const { slug } = useParams('slug');
  const data = CONTENT.gins;
  const gin = data[slug];

  return (
    <>
      <NavComponent pageClass={pageClass} />
      <PageScroll width="100vw" height="100vh" onScrollStart={({ targetIndex }) => setCurrentPage(targetIndex)}>
        <ProductDetail className='page' bgColor='wrpink' product={gin} />
        <ProductSummary className='page' product={gin} bgColor='cream' />
        <ProductDualPanel className='page' bgColor='wrpink' theme='gin' content={CONTENT.gin_article} photo={photo_gin_summary} />
        <CocktailsSlider className='page' theme='gin' items={cocktails.gin.slice(0, 3)} />
        <ShopDualPanel className='page' theme='gin' content={CONTENT.gin_shop} photo={photo_gin_summary} />
        <Footer className='page' />
      </PageScroll>
    </>
  );
};

Gin.propTypes = {
  slug: PropTypes.string,
};

export default Gin;
