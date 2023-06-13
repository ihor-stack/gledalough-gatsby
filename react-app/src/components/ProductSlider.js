import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
//import { useRef, useEffect } from 'react';
import { COLOR } from '../constants';
import { gutter } from '../constants/styles';
import { buttonRounded, linkUnderlined, titleMedium } from '../constants/styles';

const PanelContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  ${gutter}
`;
const SliderContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100vh;
`;

const SliderItem = styled.div`
  width: 100%;
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
  margin-top: 1rem;
  ${titleMedium}
`;
const SlideLink = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  a {
    ${linkUnderlined}
  } 
`;
const SlideButton = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  button {
    ${buttonRounded}
    margin: 0 auto;
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
      <SlideLink><Link to={item.url}>Learn more</Link></SlideLink>
      <SlideButton><button>Buy now</button></SlideButton>
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
