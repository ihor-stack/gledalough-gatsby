import React, { useRef, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
import { FONT, COLOR } from '../constants';
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
  width: 100%;
  left:12.5vw;
  bottom:-2rem;
  right:0;
  height: 6rem;
  font-size: 1.4rem;
  li {
    cursor: pointer;
    margin-right: 1rem;
    font-family: ${FONT.sans};
    font-weight: 700;
    font-style: 'normal';
    text-transform: uppercase;
    &.active {
      border-bottom: 1px ${COLOR.black} dotted;
    }
  }
`;

const SliderPanel = ({ className, page, items, activeUrl }) => {
  const carousel = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleDragStart = (e) => e.preventDefault();

  const slides = items.map((item, i) => (
    <Panel key={i} onDragStart={handleDragStart} role="presentation" style={{ backgroundImage: `url(${data[page][i].image})` }} />
  ))

  // const syncActiveIndex = ({ item }) => setActiveIndex(item); //onSlideChanged={syncActiveIndex}

  return (
    <PanelContainer className={className}>
      <AliceCarousel key="carousel" mouseTracking items={slides} disableDotsControls disableButtonsControls ref={carousel}  />
      <Nav>
        <ul className="nav flex-row">
          {items.map((item, i) => (
            <li className={`nav-item ${activeIndex === i ? 'active' : ''}`} key={i} onClick={() => carousel?.current?.slideTo(i) }>
              {item.title}
            </li>
          ))}
        </ul>
      </Nav>
    </PanelContainer>
  )
};


export default SliderPanel;