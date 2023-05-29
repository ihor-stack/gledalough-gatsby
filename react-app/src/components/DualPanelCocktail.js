import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, FONT } from '../constants';
import photo_cocktail_01 from '../assets/photo_cocktail_01.jpg';

const PanelContainer = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  &.photo {
    background-size: cover;
    background-repeat: no-repeat;
  }
  &.text {
    background-size: cover;
    background-repeat: no-repeat;
    padding: 0 0 0 12.5vw;
  }
`;

const Title = styled.h3`
  width: 100%;
  text-align: left;
  font-size: 1.4rem;
`;

const Paragraph = styled.p`
  width: 100%;
  text-align: left;
  font-size: 1.2rem;
  font-family: ${FONT.sans}; 
  font-weight: 500;
  font-style: 'normal';
  margin: 2rem 0;
`;

const DualPanelCocktail = ({ className, bgColor, photo, content }) => {
  return (
    <PanelContainer className={className} style={{ backgroundColor: `${COLOR[bgColor]}` }}>
      <Panel className='text' >
        <Title>Ingredients</Title>
        <Paragraph>2 oz Wild Botanical Gin<br />
          3/4 oz Fresh Lime Juice<br />
          3/4 oz Simple Syrup<br /> <br /> Garnish with Fresh mint</Paragraph>
        <Title>Preperation</Title>
        <Paragraph>Shake up all three ingredients in a cocktail shaker and strain into a chilled coup.<br />
          Or for a longer version, this can be built over ice in a highball glass and topped with soda water.</Paragraph>
      </Panel>
      <Panel className='photo' style={{ backgroundImage: `url(${photo_cocktail_01})` }} />
    </PanelContainer>
  )
};

DualPanelCocktail.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  content: PropTypes.array,
  photo: PropTypes.string,
};

export default DualPanelCocktail;