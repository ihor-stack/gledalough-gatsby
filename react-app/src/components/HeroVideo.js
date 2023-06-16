import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useParallax } from "react-scroll-parallax";
import { COLOR } from '../constants';
import { respondTo, headingLarge, titleLargest } from '../constants/styles';
import logo from '../assets/ic_glendalough.svg';
import bg_hero_home from '../assets/bg_hero_home.jpg';
import bg_hero_our_story from '../assets/bg_hero_our_story.jpg';
import bg_hero_gin_home from '../assets/bg_hero_gin_home.jpg';
import bg_hero_whiskey_home from '../assets/bg_hero_whiskey_home.jpg';
import bg_hero_features from '../assets/bg_hero_features.jpg';
import bg_hero_cocktails from '../assets/bg_hero_cocktails.jpg';
import bg_hero_stories from '../assets/bg_hero_stories.jpg';

// !!! TODO: validate 'page' propType
const bg = {
  'notfound': bg_hero_stories,
  'home': bg_hero_home,
  'our_story': bg_hero_our_story,
  'gin_home': bg_hero_gin_home,
  'whiskey_home': bg_hero_whiskey_home,
  'features': bg_hero_features,
  'cocktails': bg_hero_cocktails,
  'stories': bg_hero_stories,
}

const PanelContainer = styled.div`
  display: flex;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  } 
  img {
    margin-top: -4rem;
    max-width: 300px;
    ${respondTo.xs`
      max-width: 400px;
    `}
    ${respondTo.sm`
      max-width: 480px; 
    `}
    ${respondTo.md`
      max-width: none; 
    `}
  }
`;

const Heading = styled.h1`
  ${headingLarge}
  text-align:center;
  color: ${COLOR.white};
`;
const Title = styled.h2`
  ${titleLargest}
  color: ${COLOR.white};
`;

const HeroVideo = ({ className, page, heading = 'Glendalough Distillery', title = '' }) => {
  const parallaxText = useParallax({
    speed: -33
  });
  return (
    <PanelContainer className={className} style={{ backgroundImage: `url(${bg[page]})` }}>
      <div ref={parallaxText.ref}>
        {'home' !== page && <Heading>{heading}</Heading>}
        {'home' !== page && <Title>{title}</Title>}
        {'home' === page && <div>
          <img src={logo} className="nav-logo" alt="Glendalough logo" />
        </div>}
      </div>
    </PanelContainer>
  )
};

HeroVideo.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  page: PropTypes.string,
};

export default HeroVideo;