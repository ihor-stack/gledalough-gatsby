import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR } from '../constants';
import { heroText } from '../constants/styles';


const PanelContainer = styled.div`
  display: flex;
  background-color: #efefef;
`;
const TextContainer = styled.div`
  margin: 0 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeroText = styled.h2`
  ${heroText}
  text-align: center;
`;

const Hero = ({ className, title, bgColor }) => {
 
  return (
    <PanelContainer className={className} style={{backgroundColor: `${COLOR[bgColor]}`}}>
      <TextContainer>
          <HeroText>{title}</HeroText>
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
