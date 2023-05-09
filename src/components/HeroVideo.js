import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import placeholder from '../assets/placeholder.png';

const PanelContainer = styled.div`
  min-height: 380px;
  background-image: url(${placeholder});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const HeroVideo = ({ title }) => (
  <PanelContainer>
    <div className="text-center">
      <h2>{title}</h2>
    </div>
  </PanelContainer>
);

HeroVideo.propTypes = {
  title: PropTypes.string,
};

export default HeroVideo;
