import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//import placeholder from '../assets/placeholder.png';
import bg_home_main from '../assets/bg_home_main.jpg';

const PanelContainer = styled.div`
  display: flex;
  background-image: url(${bg_home_main});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const HeroVideo = ({ className, title }) => (
  <PanelContainer className={className}>
    <div className="text-center">
      <h1 className="hidden" hidden>{title}</h1>
    </div>
  </PanelContainer>
);

HeroVideo.propTypes = {
  title: PropTypes.string,
};

export default HeroVideo;
