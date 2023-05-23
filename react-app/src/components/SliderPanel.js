import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FONT } from '../constants';
//
import slider_home_01 from '../assets/slider_home_01.jpg';
import slider_features_01 from '../assets/slider_features_01.jpg';
import slider_cocktails_01 from '../assets/slider_cocktails_01.jpg';

const slides = {
  home: [{'image': slider_home_01}],
  features: [{'image': slider_features_01}],
  cocktails: [{'image': slider_cocktails_01}],
}

const PanelContainer = styled.div`
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
  min-height: 380px;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Nav = styled.nav`
  font-size: 1.4rem;
  li {
    margin-right: 1rem;
    font-family: ${FONT.sans};
    font-weight: 700;
    font-style: 'normal';
    text-transform: uppercase;
  }
`;

const SliderPanel = ({ className, page, items, activeUrl }) => (
  <PanelContainer className={className}>
    <Panel style={{backgroundImage: `url(${slides[page][0].image})`}} >
      <Nav>
        <ul className="nav flex-row">
          <li className="nav-item">01</li>
          <li className="nav-item">02</li>
          <li className="nav-item">03</li>
          <li className="nav-item">04</li>
        </ul>
      </Nav>
    </Panel>
  </PanelContainer>
);

SliderPanel.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
  activeUrl: PropTypes.string,
};

export default SliderPanel;