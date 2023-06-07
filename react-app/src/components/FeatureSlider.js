import React from 'react';
import { useNavigate } from 'react-router-dom'; // useParams, useLocation  
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
//import { useRef, useEffect } from 'react';
import { COLOR } from '../constants';
import { gutter, titleMedium, titleLargest, titleMono } from '../constants/styles';

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
  height: 100vh;
  flex-shrink: 0;
  justify-content: start;
  align-items: start;
  cursor: pointer;
`;
const FeatureHeading = styled.h2`
  margin-top: 4rem;
  margin-bottom: 2rem;
  width: 100%;
  text-align: left;
  text-transform: capitalize;
  ${titleLargest}
`;
const ItemDate = styled.h3`
  ${titleMono}
  width: 100%;
  text-align: left;
`;
const ItemImage = styled.div`
  position: relative;
  text-align: center;
  height: 25vw; 
  margin-right: 2rem;
  background-size: cover;
  background-repeat: no-repeat;
`;
const ItemTitle = styled.h3`
  position: absolute;
  bottom: 0;
  margin: 0;
  width: 100%;
  text-align: center;
  background: rgba(35, 31, 32, 0.6);
  ${titleMedium}
  color: ${COLOR.white};
  padding: 1rem;
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

const FeatureSlider = ({ className, category, items, activeUrl, bgColor }) => {
  const handleDragStart = (e) => e.preventDefault();
  // const { slug } = useParams('slug');
  // const location = useLocation();
  const navigate = useNavigate(); // onClick={() => navigate(item.url)} 

  const COORDS = {
    xDown: null,
    xUp: null
  }

  const handleOnMouseDown = e => {
    e.preventDefault()
    COORDS.xUp = null
    COORDS.xDown = null
    COORDS.xDown = e.clientX
  }

  const handleMouseUp = e => {
    e.preventDefault()
    COORDS.xUp = e.clientX
  }

  const handleOnClick = (e, url) => {
    if (COORDS.xDown !== COORDS.xUp) {
      e.preventDefault()
    } else {
      navigate(url);
    }
  }

  const slides = items.map((item, i) => (
    <SliderItem key={i} role="presentation"
      onDragStart={handleDragStart}
      onMouseDown={handleOnMouseDown}
      onMouseUp={handleMouseUp}
      onClick={(e) => handleOnClick(e, item.url)}
    >
      <ItemDate>{item.date}</ItemDate>
      <ItemImage style={{ backgroundImage: `url(${item.image})` }}>
        <ItemTitle>{item.title}</ItemTitle>
      </ItemImage>
    </SliderItem>
  ))

  return (
    <PanelContainer className={className} style={{ backgroundColor: `${COLOR[bgColor]}` }}>
      <FeatureHeading>{category}</FeatureHeading>
      <SliderContainer>
        <AliceCarousel mouseTracking items={slides} responsive={responsive} />
      </SliderContainer>
    </PanelContainer>
  )
};

FeatureSlider.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  product: PropTypes.string,
  items: PropTypes.array,
  activeUrl: PropTypes.string,
};

export default FeatureSlider;
