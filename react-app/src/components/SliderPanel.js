import React, { useRef, useState } from 'react';
// import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
import { FONT, COLOR } from '../constants';
import { gutterWidth, headingLarge, titleLargest, buttonRounded } from '../constants/styles';
import slider_home_01 from '../assets/slider_home_01.jpg';
import slider_features_01 from '../assets/slider_features_01.jpg';
import slider_cocktails_01 from '../assets/slider_cocktails_01.jpg';
import bg_hero_our_story from '../assets/bg_hero_our_story.jpg';

const data = {
  home: [{ 'image': slider_home_01 }, { 'image': slider_features_01 }, { 'image': slider_cocktails_01 }, { 'image': bg_hero_our_story }],
  features: [{ 'image': slider_home_01 }, { 'image': slider_features_01 }, { 'image': slider_cocktails_01 }, { 'image': bg_hero_our_story }],
  cocktails: [{ 'image': slider_home_01 }, { 'image': slider_features_01 }, { 'image': slider_cocktails_01 }, { 'image': bg_hero_our_story }],
  features2: [{ 'image': slider_home_01 }, { 'image': slider_features_01 }, { 'image': slider_cocktails_01 }, { 'image': bg_hero_our_story }],
}

const PanelContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background-color: ${COLOR.warmwhite};
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 6rem;
  width: 100%;
  max-width: 100%;
  height: calc(100vh - 6rem);
`;

const Nav = styled.nav`
  position: absolute;
  left: ${gutterWidth};
  bottom:-2rem;
  right:0;
  height: 6rem;
  font-size: 1.4rem;
  li {
    color: ${COLOR.grey};
    padding-bottom: 0.2rem;
    cursor: pointer;
    margin-right: 1rem;
    font-size: 1.4rem;
    line-height: 1.4rem;
    letter-spacing: 0.1rem;
    font-family: ${FONT.monospace};
    font-weight: 400;
    font-style: 'normal';
    text-transform: uppercase;
    &.active {
      color: ${COLOR.black};
      border-bottom: 1px ${COLOR.black} dotted;
    }
  }
`;
const TextContainer = styled.div`
  pointer-events:none;
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 6rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
const Heading = styled.h1`
  ${headingLarge}
  color: ${COLOR.white};
`;
const Title = styled.h2`
  ${titleLargest}
  color: ${COLOR.white};
`;
const Button = styled.button`
  pointer-events:all;
  ${buttonRounded}
  margin-top: 1rem;
  padding: 1rem 1.6rem;
  color: ${COLOR.white};
  border-color: ${COLOR.white};
`;

const SliderPanel = ({ className, page, items, activeUrl }) => {
  const carousel = useRef(null);
  const [activeIndex] = useState(0); // setActiveIndex
  const handleDragStart = (e) => e.preventDefault();
  const navigate = useNavigate();

  const slides = items.map((item, i) => (
    <Panel key={i} onDragStart={handleDragStart} role="presentation" style={{ backgroundImage: `url(${data[page][i].image})` }} />
  ))
  // const syncActiveIndex = ({ item }) => setActiveIndex(item); //onSlideChanged={syncActiveIndex}

  return (
    <PanelContainer className={className}>
      <TextContainer data-aos="fade-in">
        <Heading>Explore</Heading>
        <Title>Our Story</Title>
        <Button onClick={()=>navigate('/our-story')}>Discover More</Button>
      </TextContainer>

      <AliceCarousel key="carousel" items={slides} mouseTracking disableDotsControls disableButtonsControls ref={carousel} />
      <Nav>
        <ul className="nav flex-row">
          {items.map((item, i) => (
            <li className={`nav-item ${activeIndex === i ? 'active' : ''}`} key={i} onClick={() => carousel?.current?.slideTo(i)}>
              {item.title}
            </li>
          ))}
        </ul>
      </Nav>
    </PanelContainer>
  )
};


export default SliderPanel;