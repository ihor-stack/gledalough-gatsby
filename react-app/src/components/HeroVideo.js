import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from '../assets/ic_glendalough.svg';
import bg_home_main from '../assets/bg_home_main.jpg';
import bg_our_story from '../assets/bg_our_story.jpg';
import bg_gin_home from '../assets/bg_gin_home.jpg';
import bg_whiskey_home from '../assets/bg_whiskey_home.jpg';

// !!! TODO: validate 'page' propType
const bg = { 
  'home' : bg_home_main,
  'our_story' : bg_our_story,
  'gin_home' : bg_gin_home,
  'whiskey_home' : bg_whiskey_home,
}

const PanelContainer = styled.div`
  display: flex;
  //background-image: url(${bg_home_main});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  > div {
    width: 100%;
`;

const HeroVideo = ({ className, title, page }) => (
  <PanelContainer className={className} style={{backgroundImage: `url(${bg[page]})`}}>
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
  page: PropTypes.string,
};

export default HeroVideo;