import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FONT, COLOR } from '../constants';
//
import slider_home_01 from '../assets/slider_home_01.jpg';
import slider_features_01 from '../assets/slider_features_01.jpg';
import slider_cocktails_01 from '../assets/slider_cocktails_01.jpg';
import bg_hero_our_story from '../assets/bg_hero_our_story.jpg';

const slides = {
  home: [{ 'image': slider_home_01 },{ 'image': slider_features_01 },{ 'image': slider_cocktails_01 },{ 'image': bg_hero_our_story }],
  features: [{ 'image': slider_home_01 },{ 'image': slider_features_01 },{ 'image': slider_cocktails_01 },{ 'image': bg_hero_our_story }],
  cocktails: [{ 'image': slider_home_01 },{ 'image': slider_features_01 },{ 'image': slider_cocktails_01 },{ 'image': bg_hero_our_story }],
  features2: [{ 'image': slider_home_01 },{ 'image': slider_features_01 },{ 'image': slider_cocktails_01 },{ 'image': bg_hero_our_story }],
}

const PanelContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const Panel = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 6rem;
`;

const Nav = styled.nav`
  position: absolute;
  width: 100%;
  left:12.5vw;
  bottom:-8rem;
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
  const [currentSlide, setCurrentSlide] = useState(0);


  const menu_items = items.map((item, i) => (
    <li className={`nav-item ${currentSlide === i ? 'active': ''}`} key={i} onClick={() => setCurrentSlide(i)} >
      {item.title}
    </li>
  ));


  return (
    <PanelContainer className={className}>
      <Panel style={{ backgroundImage: `url(${slides[page][currentSlide].image})` }} >
        <Nav>
          <ul className="nav flex-row">
             { menu_items } 
          </ul>
        </Nav>
      </Panel>
    </PanelContainer>
  )
};

SliderPanel.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
  activeUrl: PropTypes.string,
};

export default SliderPanel;