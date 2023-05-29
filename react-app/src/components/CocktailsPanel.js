import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, FONT } from '../constants';
import img_bg_texture from '../assets/bg_textured_paper.jpg';

const PanelContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  background-image: url(${img_bg_texture});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const ItemsContainer = styled.div`
  width: 100%;
  padding: 0 12.5vw;
  display: flex;
`;

const Item = styled.div`
  text-align: center;
  width: 25vw;
  padding: 2vw;
 
`;

const Button = styled.button`
  background: none;
  border: none; 
  font-family: ${FONT.sans};
  font-weight: 700;
  font-style: 'normal';
  text-transform: uppercase;
  border-bottom: 1px solid ${COLOR.black};
`;

const Title = styled.h3`
  margin-top: 1rem;
  flex-grow: 1;
`;

const PanelHeader = styled.h3`
  position: absolute;
  top: 0;
  left:0;
  right:0;
  text-align: center;
  width: 100%;
  padding-top: 4rem;
  font-family: ${FONT.serif};
  font-weight: 600;
  font-style: 'normal';
  font-size: 2rem;
  line-height: 2.2rem;
`;

const Image = styled.img`
  border-radius: 50% 50% 0 0;
  -webkit-border-radius: 50% 50% 0 0;
  -moz-border-radius: 50% 50% 0 0;
`;

const CocktailsPanel = ({ className, items }) => {

  const cocktails = items.map((item, i) => (
    <Item key={i}>
        <Image className='img-fluid' src={item.image} alt={item.title} />
        <Title>{item.title}</Title>
        <Button>View Recipe</Button>
    </Item>
  ))

  return (
    <PanelContainer className={`${className} d-flex justify-content-between align-items-center`}>
      <PanelHeader>Gin Cocktails</PanelHeader>
      <ItemsContainer>{ cocktails }</ItemsContainer>
    </PanelContainer>
  )
};

CocktailsPanel.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
};

export default CocktailsPanel;