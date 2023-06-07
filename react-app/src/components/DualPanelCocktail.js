import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, FONT } from '../constants';
import { gutterLeft, gutterRight } from '../constants/styles';

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
  align-items: start;
  &.photo {
    background-size: cover;
    background-repeat: no-repeat;
    ${gutterRight}
  }
  &.text {
    background-size: cover;
    background-repeat: no-repeat;
    ${gutterLeft}
  }
`;
const Title = styled.h3`
  width: 100%;
  text-align: left;
  font-size: 1.2rem;
  font-family: ${FONT.sans}; 
  font-weight: 500;
  font-style: 'normal';
  text-transform: uppercase;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  font-family: ${FONT.sans}; 
  font-weight: 500;
  font-style: 'normal';
`;
 
const DualPanelCocktail = ({ className, bgColor, cocktail }) => {

  const ingredients = cocktail['ingredients'].map((ingredient, i) => (
    <li key={i}>
      { ingredient }
    </li>
  ))  
  const instructions = cocktail['instructions'].map((instruction, i) => (
    <li key={i}>
      { instruction }
    </li>
  ))  
  const preperations = cocktail['preperations'].map((preperation, i) => (
    <li key={i}>
      { preperation }
    </li>
  ))  

  return (
    <PanelContainer className={className} style={{ backgroundColor: `${COLOR[bgColor]}` }}>
      <Panel className='text'>
        <Title>Ingredients</Title>
        <List>
          { ingredients }
        </List>
        <List>
          { instructions }
        </List>
        <Title>Preperation</Title>
        <List>
          { preperations }
        </List>
      </Panel>
      <Panel className='photo' style={{ backgroundImage: `url(${cocktail.image})` }} />
    </PanelContainer>
  )
};

DualPanelCocktail.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  cocktail: PropTypes.object,
  photo: PropTypes.string,
};

export default DualPanelCocktail;