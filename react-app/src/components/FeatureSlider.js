import React from 'react';
import { useNavigate } from 'react-router-dom'; // useParams, useLocation 
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
//import { useRef, useEffect } from 'react';
import { COLOR } from '../constants';

const PanelContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 10vw;
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
  justify-content: start;
  align-items: start;
`;

const FeatureHeading = styled.h2`
  margin-top: 4rem;
  width: 100%;
  text-align: left;
  text-transform: capitalize;
`;
const ItemDate = styled.h3`
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
  color: ${COLOR.white}
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
  const navigate = useNavigate();

  const slides = items.map((item, i) => (
     <SliderItem key={i} onDragStart={handleDragStart} onClick={() => navigate(item.url)} role="presentation">
      <ItemDate>{item.date}</ItemDate>
      <ItemImage style={{backgroundImage: `url(${item.image})`}}>
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
