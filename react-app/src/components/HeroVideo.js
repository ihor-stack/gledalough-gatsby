import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from '../assets/ic_glendalough.svg';
import bg_home_main from '../assets/bg_home_main.jpg';

const PanelContainer = styled.div`
  display: flex;
  background-image: url(${bg_home_main});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  > div {
    width: 100%;
`;

const HeroVideo = ({ className, title }) => (
  <PanelContainer className={className}>
    <div className="d-flex justify-content-center align-items-center">
      <h1 className="hidden" hidden>{title}</h1>
      <div>
        <img src={logo} className="nav-logo" alt="Glendalough logo" />
      </div>
    </div>
  </PanelContainer>
);

HeroVideo.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

export default HeroVideo;