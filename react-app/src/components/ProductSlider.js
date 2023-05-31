import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
//import { useRef, useEffect } from 'react';
import { COLOR, FONT } from '../constants';

const PanelContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 12.5vw;
`;
const SliderContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100vh;
  //padding-top: 20vh;
`;

const SliderItem = styled.div`
  width: 100%;
  height: 100vh;
  flex-shrink: 0;
`;
const SlideImage = styled.div`
  text-align: center;
  margin-top: 10vh;
  img{
     height: 60vh;
  }
`;
const SlideTitle = styled.h3`
  width: 100%;
  text-align: center;
`;
const LinkButton = styled.div`
  width: 100%;
  text-align: center;
  a {
    color: ${COLOR.black};
    padding: 0.5rem 1rem;
    margin: 0 auto;
    background: none;
    border: none; 
    font-family: ${FONT.sans};
    font-weight: 700;
    font-style: 'normal';
    text-transform: uppercase;
    text-decoration: none;
    border-bottom: 1px solid ${COLOR.black};
  }
`;
const ShopButton = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  button {
    margin: 0 auto;
    padding: 0.5rem 1.6rem;
    background: none;
    border: none; 
    font-family: ${FONT.sans};
    font-weight: 700;
    font-style: 'normal';
    text-transform: uppercase;
    border: 1px solid ${COLOR.black};
    border-radius: 1.6rem;
  }
`;

const responsive = {
  0: { 
      items: 1
  },
  568: { 
      items: 2
  },
  1024: {
      items: 3, 
      itemsFit: 'fill'
  },
};

const ProductSlider = ({ className, product, items, activeUrl, bgColor }) => {
  const handleDragStart = (e) => e.preventDefault();

  const slides = items.map((item, i) => (
    <SliderItem key={i} onDragStart={handleDragStart} role="presentation">
      <SlideImage><img src={item.image} className="img-fluid" alt="alt placeholder" /></SlideImage>
      <SlideTitle>{item.title}</SlideTitle>
      <LinkButton><Link to={item.url}>Learn more</Link></LinkButton>
      <ShopButton><button>Buy now</button></ShopButton>
    </SliderItem>
  ))

  return (
    <PanelContainer className={className} style={{ backgroundColor: `${COLOR[bgColor]}` }}>
      <SliderContainer>
        <AliceCarousel mouseTracking items={slides} responsive={responsive} />
      </SliderContainer>
    </PanelContainer>
  )
};

ProductSlider.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  product: PropTypes.string,
  items: PropTypes.array,
  activeUrl: PropTypes.string,
};

export default ProductSlider;
