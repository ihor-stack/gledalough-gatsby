import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FONT } from '../constants';
import bg_image from '../assets/bg_river_tower.jpg';

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
  background-image: url(${bg_image});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Nav = styled.nav`
  font-size: 1.4em;
  li {
    margin-right: 1rem;
    font-family: ${FONT.heading};
    font-weight: 700;
    font-style: 'normal';
    text-transform: uppercase;
  }
`;

const SliderPanel = ({ className, items, activeUrl }) => (
  <PanelContainer className={className}>
    <Panel>
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