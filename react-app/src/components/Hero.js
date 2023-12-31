import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useParallax } from "react-scroll-parallax";
import { COLOR } from '../constants';
import { respondTo, heroText } from '../constants/styles';


const PanelContainer = styled.div`
  display: flex;
  background-color: ${COLOR.beige};
`;
const TextContainer = styled.div`
  padding: 0 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
  ${respondTo.sm`
    padding: 0 20vw;
  `}
`;
const HeroText = styled.h2`
  ${heroText}
  text-align: center; 
`;

const Hero = ({ className, title, bgColor }) => {
  const parallaxText = useParallax({
    speed: -10
  });
  return (
    <PanelContainer className={className} style={{backgroundColor: `${COLOR[bgColor]}`}}>
      <TextContainer>
       <HeroText><div ref={parallaxText.ref}>{title}</div> </HeroText>
      </TextContainer>
    </PanelContainer>
  )
};

Hero.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Hero;
